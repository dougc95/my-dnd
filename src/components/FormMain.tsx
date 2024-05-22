// FormMain.tsx
import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import { Layout, Responsive, WidthProvider } from "react-grid-layout";
import SectionItem from "./SectionItem";
import { mockSections } from "./test/mockData";

interface Field extends Layout {
  id: number;
  title: string;
}

interface Section {
  id: number;
  fields: Field[];
}

const ResponsiveGridLayout = WidthProvider(Responsive);

const FormMain: React.FC = () => {
  const [sections, setSections] = useState<Section[]>(mockSections);

  const handleAddSection = () => {
    setSections([...sections, { id: Date.now(), fields: [] }]);
  };

  const handleFieldDrop = (sectionId: number, field: Field) => {
    setSections((prevSections) =>
      prevSections.map((section) => {
        if (section.id === sectionId) {
          return {
            ...section,
            fields: [...section.fields, field],
          };
        }
        return section;
      })
    );
  };

  return (
    <Box>
      <Box mb={2}>
        <Button variant="contained" onClick={handleAddSection}>
          Add Section
        </Button>
      </Box>
      <ResponsiveGridLayout
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        rowHeight={50}
      >
        {sections.map((section) => (
          <Box
            key={section.id}
            data-grid={{ x: 0, y: 0, w: 12, h: section.fields.length + 1 }}
          >
            <SectionItem section={section} onFieldDrop={handleFieldDrop} />
          </Box>
        ))}
      </ResponsiveGridLayout>
    </Box>
  );
};

export default FormMain;
