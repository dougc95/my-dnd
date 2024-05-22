// App.tsx
import React from "react";
import { Container, Typography } from "@mui/material";
import FormMain from "./components/FormMain";

const App: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Form Builder
      </Typography>
      <FormMain />
    </Container>
  );
};

export default App;
