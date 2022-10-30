import { Avatar, Box, Typography } from "@mui/material";
import { NAVY_BLUE_HEXA } from "../utils/colors";
import { GET_CARD_IMAGE_LINK } from "../utils/constants";

const MovieReviewCard = ({ review }) => {
  return (
    <Box sx={{ p: 4, border: "1px solid black", my: 5, borderRadius: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2}}>
        {review.author_details.avatar_path ? (
          <Avatar
            alt="User Avatar"
            src={GET_CARD_IMAGE_LINK(review.author_details.avatar_path)}
            sx={{ width: 90, height: 90 }}
          />
        ) : (
          <Avatar
            sx={{
              backgroundColor: NAVY_BLUE_HEXA,
              width: 90,
              height: 90,
              fontSize: 42,
            }}
          >
            {review.author.slice(0, 1)}
          </Avatar>
        )}
          <Typography variant="p" fontWeight={'bold'} fontSize={18} marginX={4}>A review by {review.author}</Typography>
      </Box>
      <Typography>{review.content}</Typography>
    </Box>
  );
};

export default MovieReviewCard;
