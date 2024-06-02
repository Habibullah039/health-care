"use client";
import { Box, Button, IconButton, Stack, TextField } from "@mui/material";
import { useState } from "react";
import DoctorModal from "./components/DoctorModal";
import {
  useDeleteDoctorMutation,
  useGetAllDoctorQuery,
} from "@/redux/api/doctorApi";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";

const DoctorPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const query: Record<string, any> = {};
  const [searchTerm, setSerchTerm] = useState<string>("");
  query["searchTerm"] = searchTerm;

  const { data, isLoading } = useGetAllDoctorQuery({ ...query });
  // console.log(data);

  const [deleteDoctor] = useDeleteDoctorMutation();

  const doctors = data?.doctors;
  const meta = data?.meta;
  console.log(doctors);

  const handleDelete = async (id: string) => {
    console.log(id);

    try {
      const res = await deleteDoctor(id).unwrap();
      console.log(res);
      if (res?.id) {
        toast.success("Successfully Deleted");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "contactNumber", headerName: "Contact Number", flex: 1 },
    { field: "gender", headerName: "Gender", flex: 1 },
    { field: "apointmentFee", headerName: "Apointment Fee", flex: 1 },

    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        // console.log(row);
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Button onClick={() => setIsModalOpen(true)}>
          Create a New Doctor
        </Button>
        <DoctorModal open={isModalOpen} setOpen={setIsModalOpen} />
        <TextField
          onChange={(e) => setSerchTerm(e.target.value)}
          size="small"
          placeholder="Search Doctor"
        />
      </Stack>

      {!isLoading ? (
        <Box>
          <DataGrid rows={doctors} columns={columns} />
        </Box>
      ) : (
        <h1>Loading......</h1>
      )}
    </Box>
  );
};

export default DoctorPage;
