import { Pagination } from "@mui/material";

import { WHITE } from "../../constants/colors";

const PaginationComponent = ({ pageCount, onChange, isMobile }) => {
  return (
    <Pagination
      count={pageCount}
      size={`${isMobile ? 'small' : 'large'}`}
      sx={{ m: isMobile ? 2 : 4, button: { color: WHITE } }}
      onChange={onChange}
      color="primary"
    />
  );
};
export default PaginationComponent;
