import { Divider, Container } from "@mui/material";

import MediaInfo from "components/MediaDetails/MediaInfo";
import MediaReviews from "components/MediaDetails/MediaReviews";
import { BLACK, WHITE } from "constants/colors";

const DetailsPage = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: BLACK,
      }}
    >
      <MediaInfo color={WHITE} />
      <Divider />
      <MediaReviews />
    </Container>
  );
};

export default DetailsPage;
