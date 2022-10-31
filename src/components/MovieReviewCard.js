import { useState } from "react";
import { Box, Button, Typography } from "@mui/material";

import { truncate } from "../utils/helpers";
import UserAvatar from "./UserAvatar";

const MovieReviewCard = ({ review }) => {
  const [readMore, setReadMore] = useState(false);

  const toggleReadMore = () => setReadMore(!readMore);

  return (
    <Box sx={{ p: 4, border: "1px solid black", my: 5, borderRadius: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
        <UserAvatar
          avatar={review.author_details.avatar_path}
          author={review.author}
        />
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
      <Typography>
        {readMore ? truncate(review.content, -1) :truncate(review.content, 250)}{" "}
        <Button
          variant="text"
          sx={{ textTransform: "none", p: 0 }}
          onClick={toggleReadMore}
        >
          {!readMore && review.content.length > 250 ? "Read more" : "Read less"}
        </Button>
      </Typography>
    </Box>
  );
};

export default MovieReviewCard;
