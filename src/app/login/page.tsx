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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginPatient } from "@/services/actions/loginPatient";
import { storeUserInfo } from "@/services/auth.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import PHForm from "@/components/forms/PHForm";
import PHInput from "@/components/forms/PHInput";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const validationSchema = z.object({
  email: z.string().email("Please Enter A Valid Email"),
  password: z.string().min(6, "Password must be 6 characters"),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (values: FieldValues) => {
    // console.log(values);
    try {
      const res = await loginPatient(values);
      // console.log(res);
      if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
        router.push("/dashboard");
      } else {
        setError(res.message);
        // console.log(res.message);
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
                Login Ph Health Care
              </Typography>
            </Box>
          </Stack>
          {error && (
            <Box>
              <Typography
                sx={{
                  backgroundColor: "red",
                  padding: "1px",
                  borderRadius: "2px",
                  color: "white",
                  marginTop: "5px",
                }}
              >
                {error}
              </Typography>
            </Box>
          )}
          <Box>
            <PHForm
              onSubmit={handleLogin}
              resolver={zodResolver(validationSchema)}
              defaultValues={{
                email: "",
                password: "",
              }}
            >
              <Grid container spacing={3} my={2}>
                <Grid item md={12}>
                  <PHInput
                    name="email"
                    label="Email"
                    type="email"
                    fullWidth={true}
                  />
                </Grid>

                <Grid item md={12}>
                  <PHInput
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth={true}
                  />
                </Grid>
              </Grid>

              <Typography
                marginBottom={2}
                textAlign="end"
                component="p"
                fontWeight={300}
              >
                Forgot Password
              </Typography>

              <Button
                sx={{
                  margin: "15px 0",
                }}
                fullWidth={true}
                type="submit"
              >
                Login
              </Button>

              <Typography component="p" fontWeight={300}>
                Don&apos;t have an Account ? Please{" "}
                <Link href="/register">Register</Link>
              </Typography>
            </PHForm>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPage;
