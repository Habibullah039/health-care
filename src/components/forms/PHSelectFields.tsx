import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

interface ITextField {
  name: string;
  label?: string;
  size?: "small" | "medium";
  placeholder?: string;
  fullWidth?: boolean;
  sx?: SxProps;
  items: string[];
  required?: boolean;
}
const PHSelectFields = ({
  items,
  name,
  label,
  size = "small",
  fullWidth = true,
  sx,
  required,
}: ITextField) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          id="outlined-name"
          label={label}
          InputLabelProps={{
            shrink: true,
          }}
          size={size}
          fullWidth={fullWidth}
          sx={{ ...sx }}
          required={required}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
        >
          {items.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default PHSelectFields;
