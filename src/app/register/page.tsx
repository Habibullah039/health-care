"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import loginImg from "@/assets/svgs/loginImg.png";
import Link from "next/link";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { modifyPayload } from "@/utils/modifyPayload";
import { registerPatient } from "@/services/actions/registerPatient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { loginPatient } from "@/services/actions/loginPatient";
import { storeUserInfo } from "@/services/auth.service";
import PHForm from "@/components/forms/PHForm";
import PHInput from "@/components/forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const patientValidationSchema = z.object({
  name: z.string().min(1, "Please Enter Your Name"),
  email: z.string().email("Please Enter A Valid Email"),
  contactNumber: z
    .string()
    .regex(/^\d{11}$/, "Please Provide A Valid Phone Numbe!!"),
  address: z.string().min(1, "Please Enter Your address!!"),
});

export const validationSchema = z.object({
  password: z.string().min(6, "Password must be 6 characters"),
  patient: patientValidationSchema,
});

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const router = useRouter();
  const handleRegister = async (values: FieldValues) => {
    const data = modifyPayload(values);
    // console.log(data);

    try {
      const res = await registerPatient(data);
      // console.log(res);
      if (res?.data?.id) {
        toast.success(res?.message);
        const result = await loginPatient({
          password: values.password,
          email: values.patient.email,
        });

        if (result?.data?.accessToken) {
          storeUserInfo({ accessToken: result?.data?.accessToken });
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            p: 4,
            textAlign: "center",
          }}
        >
          <Stack
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>
              <Image src={loginImg} width={50} height={50} alt="logo" />
            </Box>
            <Box>
              <Typography variant="h6" fontWeight={600}>
                Patient Register
              </Typography>
            </Box>
          </Stack>

          <Box>
            <PHForm
              onSubmit={handleRegister}
              resolver={zodResolver(validationSchema)}
              defaultValues={defaultValues}
            >
              <Grid container spacing={3} my={2}>
                <Grid item md={12}>
                  <PHInput name="patient.name" label="Name" fullWidth={true} />
                </Grid>

                <Grid item md={6}>
                  <PHInput
                    name="patient.email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>

                <Grid item md={6}>
                  <PHInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>

                <Grid item md={6}>
                  <PHInput
                    name="patient.contactNumber"
                    label="Number"
                    type="tel"
                    fullWidth={true}
                  />
                </Grid>

                <Grid item md={6}>
                  <PHInput
                    name="patient.address"
                    label="Address"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Button
                sx={{
                  margin: "15px 0",
                }}
                fullWidth={true}
                type="submit"
              >
                Register
              </Button>

              <Typography component="p" fontWeight={300}>
                Do you have an Account ? <Link href="/login">Login</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
