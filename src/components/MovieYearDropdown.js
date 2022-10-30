import React from "react";
import { TextField, FormControl } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ORANGE_HEXA, WIHITE_HEXA } from "../utils/colors";

const MovieYearDropdown = ({ setSelectedYear, selectedYear }) => {
  return (
    <FormControl
      sx={{
        width: "25%",
        minWidth: "200px",
        m: 1,
        ".css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
          color: ORANGE_HEXA,
          fontWeight: "700",
          fontSize: "25px",
          lineHeight: "1.8em",
        },
      }}
    >
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        sx={{
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        <DatePicker
          views={["year"]}
          label="Year"
          value={selectedYear}
          onChange={(newValue) => {
            setSelectedYear(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              helperText={null}
              sx={{
                backgroundColor: WIHITE_HEXA,
                borderRadius: 1,
                color: ORANGE_HEXA,
              }}
            />
          )}
          sx={{ m: 1 }}
        />
      </LocalizationProvider>
    </FormControl>
  );
};

export default MovieYearDropdown;
