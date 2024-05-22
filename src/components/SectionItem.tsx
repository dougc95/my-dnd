// SectionItem.tsx
import React from "react";
import { Box, Typography, Paper, IconButton } from "@mui/material";
import { Droppable, Draggable } from "@hello-pangea/dnd";
import FieldItem from "./FieldItem";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { Layout } from "react-grid-layout";
interface Field extends Layout {
  id: number;
  title: string;
}

interface Section {
  id: number;
  fields: Field[];
}

interface SectionItemProps {
  section: Section;
  onFieldDrop: (sectionId: number, field: Layout) => void;
}

const SectionItem: React.FC<SectionItemProps> = ({ section, onFieldDrop }) => {
  const handleDrop = (field: Field) => {
    onFieldDrop(section.id, field);
  };

  return (
    <Box mb={2}>
      <Paper elevation={3}>
        <Box display="flex" alignItems="center" p={2}>
          <IconButton>
            <DragHandleIcon />
          </IconButton>
          <Typography variant="h6">Section {section.id}</Typography>
        </Box>
        <Droppable droppableId={`section-${section.id}`} onDrop={handleDrop}>
          {(provided) => (
            <Box ref={provided.innerRef} {...provided.droppableProps} p={2}>
              {section.fields.map((field, index) => (
                <Draggable
                  key={field.id}
                  draggableId={JSON.stringify(field)}
                  index={index}
                >
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <FieldItem field={field} />
                    </Box>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Box>
          )}
        </Droppable>
      </Paper>
    </Box>
  );
};

export default SectionItem;
