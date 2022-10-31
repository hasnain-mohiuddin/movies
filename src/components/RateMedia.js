import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import CardRatings from "./CardRatings";
import { rateMedia } from "../services/moviesService";

const RateMedia = () => {
  const params = useParams();
  const [rating, setRating] = useState(0);
  const [mediaType, setMediaType] = useState('');

  useEffect(() => {
    if (location.pathname.includes("movie")) setMediaType('movie');
    else setMediaType('tv');
  }, []);

  const handleChange = (val) => {
    setRating(val);
    rateMedia(mediaType, params.id, val*2)
  }

  return (
    <Box sx={{ mx: 15, p: 4, border: "1px solid black", my: 5, borderRadius: 4, display: 'flex' }}>
      <Typography variant="h6">Submit your ratings</Typography>
      <CardRatings
        averageScore={rating}
        readOnly={false}
        setRating={handleChange}
        size="large"
      />
    </Box>
  );
};
export default RateMedia;
