import PHForm from "@/components/forms/PHForm";
import PHInput from "@/components/forms/PHInput";
import PHSelectFields from "@/components/forms/PHSelectFields";
import PHFullScreenModal from "@/components/shared/PHModal/PHFullScreenModal";
import { useCreateDoctorMutation } from "@/redux/api/doctorApi";
import { Gender } from "@/types";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorModal = ({ open, setOpen }: TProps) => {
  const [createDoctor] = useCreateDoctorMutation();
  const handleModalSubmit = async (values: FieldValues) => {
    values.doctor.experience = Number(values.doctor.experience);
    values.doctor.apointmentFee = Number(values.doctor.apointmentFee);

    const data = modifyPayload(values);
    try {
      const res = await createDoctor(data).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Doctor Created Successfully!!!");
        setOpen(false);
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const defaultValues = {
    doctor: {
      email: "",
      name: "",
      contactNumber: "",
      address: "",
      registrationNumber: "",
      gender: "",
      experience: 0,
      apointmentFee: 0,
      qualification: "",
      currentWorkingPlace: "",
      designation: "",
      profilePhoto: "",
    },

    Password: "",
  };

  return (
    <PHFullScreenModal open={open} setOpen={setOpen} title="Create New Doctor">
      <PHForm onSubmit={handleModalSubmit} defaultValues={defaultValues}>
        <Grid
          container
          spacing={2}
          sx={{
            my: 5,
          }}
        >
          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.name"
              label="Name"
              fullWidth={true}
              sx={{
                mb: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.email"
              label="Email"
              type="email"
              fullWidth={true}
              sx={{
                mb: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="password"
              label="Password"
              type="password"
              fullWidth={true}
              sx={{
                mb: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.contactNumber"
              label="contact Number"
              type="tell"
              fullWidth={true}
              sx={{
                mb: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.address"
              label="Address"
              fullWidth={true}
              sx={{
                mb: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.registrationNumber"
              label="Registration Number"
              type="tell"
              fullWidth={true}
              sx={{
                mb: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.experience"
              label="Experience"
              type="number"
              fullWidth={true}
              sx={{
                mb: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHSelectFields
              items={Gender}
              name="doctor.gender"
              label="Gender"
              sx={{
                mb: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.apointmentFee"
              label="Apointment Fee"
              type="number"
              fullWidth={true}
              sx={{
                mb: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.qualifications"
              label="Qualifications"
              fullWidth={true}
              sx={{
                mb: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.currentWorkingPlace"
              label="Current Working Place"
              fullWidth={true}
              sx={{
                mb: 2,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={4}>
            <PHInput
              name="doctor.designation"
              label="Designation"
              fullWidth={true}
              sx={{
                mb: 2,
              }}
            />
          </Grid>
        </Grid>

        <Button
          sx={{
            display: "block",
            ml: "auto",
          }}
          type="submit"
        >
          Create
        </Button>
      </PHForm>
    </PHFullScreenModal>
  );
};

export default DoctorModal;
