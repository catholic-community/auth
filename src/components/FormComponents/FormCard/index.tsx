"use client";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { ReactNode } from "react";

interface FormCardProps {
  children: ReactNode;
  submitButtonText: string;
  rememberCheckBox?: boolean;
}

const FormCard: React.FC<FormCardProps> = ({
  children,
  submitButtonText,
  rememberCheckBox,
}) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "none",
        width: "300px",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          padding: "0px",
        }}
      >
        {children}
        <CardActions
          sx={{
            padding: "0px",
            flexDirection: "column",
          }}
        >
          {rememberCheckBox && (
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Lembrar-me"
              sx={{ width: "100%", marginLeft: "0px", marginBottom: "4px" }}
            />
          )}
          <Button
            variant="contained"
            sx={{
              width: "100%",
              textTransform: "capitalize",
              fontWeight: "600",
              borderRadius: "2px",
            }}
          >
            {submitButtonText}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default FormCard;
