"use client";

import Container from "@mui/material/Container";
import OnboardingLayout from "../components/layout/OnboardingLayout";
import Form from "@/components/Form";

export default function Login() {
  return (
    <OnboardingLayout>
      <Container
        fixed
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "70vh",
          justifyContent: "center",
        }}
      >
        <Form />
      </Container>
    </OnboardingLayout>
  );
}
