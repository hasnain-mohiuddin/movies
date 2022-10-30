import React from "react";
import { TextField } from "@mui/material";
import { WIHITE_HEXA } from "../utils/colors";

const ApiKeyTestField = ({SetApiKey}) => {
  return (
    <TextField
      id="outlined-required"
      label="API Key"
      variant="filled"
      onChange={ (event)=>SetApiKey(event.target.value)}
      sx={{ width: "25%", m: 1, backgroundColor: WIHITE_HEXA, borderRadius: 1 }}
    />
  );
};

export default ApiKeyTestField;