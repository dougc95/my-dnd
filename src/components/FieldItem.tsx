// FieldItem.tsx
import React from "react";
import { Box, Typography } from "@mui/material";
import { Layout } from "react-grid-layout";

interface Field extends Layout {
  id: number;
  title: string;
}

interface FieldItemProps {
  field: Field;
}

const FieldItem: React.FC<FieldItemProps> = ({ field }) => {
  return (
    <Box>
      <Typography variant="subtitle1">{field.title}</Typography>
    </Box>
  );
};

export default FieldItem;
