"use client";

import TextField from "@mui/material/TextField";

interface InputFieldProps {
  label: string;
  multiline?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, multiline }) => {
  return (
    <TextField
      id={multiline ? "outlined-multiline-static" : "outlined-basic"}
      label={label}
      variant="outlined"
      multiline
      rows={multiline ? 3 : 0}
      sx={{
        minWidth: "300px",
        marginBottom: "12px",
        borderColor: "#E6E6E6",
      }}
    />
  );
};

export default InputField;
