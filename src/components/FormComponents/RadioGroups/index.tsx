"use client";

import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Radio } from "@mui/material";

interface RadioGroupProps {
  title: string;
  labels: string[];
}

const StyledRadioGroup: React.FC<RadioGroupProps> = ({ title, labels }) => {
  console.log("isso é: ", title, labels);
  return (
    <FormControl>
      <FormLabel
        id="demo-radio-buttons-group-label"
        sx={{ color: "#666666", fontWeight: "600" }}
      >
        Tipo de Conta
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        sx={{ flexDirection: "row" }}
        defaultValue={labels[0]}
      >
        {labels.map((item) => (
          <FormControlLabel
            value={item}
            control={<Radio />}
            label={item}
            key={item}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default StyledRadioGroup;
