import { Pagination } from "@mui/material";

import { WHITE } from "../../constants/colors";

const PaginationComponent = ({ pageCount, onChange }) => {
  return (
    <Pagination
      count={pageCount}
      size="large"
      sx={{ m: 4, button: { color: WHITE } }}
      onChange={onChange}
    />
  );
};
export default PaginationComponent;
