import { Box, Typography } from "@mui/material";

import UserAvatar from "./UserAvatar";

const MovieReviewCard = ({ review }) => {
  return (
    <Box sx={{ p: 4, border: "1px solid black", my: 5, borderRadius: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <UserAvatar avatar={review.author_details.avatar_path} author={review.author}/>
        <Box sx={{ display: "flex", flexDirection: "column", mx: 4 }}>
          <Typography variant="p" fontWeight={"bold"} fontSize={18}>
            A review by{" "}
            {review.author ||
              review.author_details.name ||
              review.author_details.username}
          </Typography>
          <Typography variant="p" fontSize={14} color="text.secondary">
            Written by{" "}
            {review.author ||
              review.author_details.name ||
              review.author_details.username}{" "}
            on{" "}
            {review.updated_at.split("T")[0] || review.created_at.split("T")[0]}
          </Typography>
        </Box>
      </Box>
      <Typography>{review.content}</Typography>
    </Box>
  );
};

export default MovieReviewCard;
