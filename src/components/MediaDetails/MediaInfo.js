import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Box, Container, Typography, CardMedia } from "@mui/material";

import { fetchMovie, fetchTvShow } from "../../services/moviesService";
import { GET_CARD_IMAGE_LINK } from "../../utils/helpers";
import CardRatings from "../shared/CardRatings";
import { NEVADA, WHITE } from "../../constants/colors";
import RateMedia from "./RateMedia";

const MediaInfo = () => {
  const params = useParams();
  const location = useLocation();
  const [media, setMedia] = useState({});

  useEffect(() => {
    if (location.pathname.includes("movie")) getMovieById();
    else getTVShowById();
  }, []); // eslint-disable-line

  const getMovieById = async () => {
    try {
      const { data } = await fetchMovie(params.id);
      setMedia(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getTVShowById = async () => {
    const { data } = await fetchTvShow(params.id);
    setMedia(data);
  };

  return (
    <Container>
      <Box sx={{ display: "flex", my: 10 }}>
        <Box
          sx={{
            minWidth: 350,
            objectFit: "contain",
            mr: 10,
            border: `5px solid ${WHITE}`,
          }}
        >
          <CardMedia
            component="img"
            alt="Movie Image"
            image={GET_CARD_IMAGE_LINK(media.backdrop_path)}
          />
        </Box>
        <Box>
          <Typography
            marginBottom={3}
            variant="h4"
            sx={{ fontWeight: "bold", color: WHITE }}
          >
            {media.name || media.title}
          </Typography>
          <Typography variant="p" fontSize={18} color={NEVADA}>
            {media.first_air_date || media.release_date}
          </Typography>
          <Box marginY={3} sx={{ display: "flex", flexDirection: "column" }}>
            <Typography
              variant="p"
              fontSize={18}
              fontWeight={"bold"}
              color={WHITE}
              mb={2}
            >
              Overview
            </Typography>
            <Typography
              variant="p"
              fontSize={18}
              color={NEVADA}
              textAlign="justify"
            >
              {media.overview}
            </Typography>
          </Box>
          <Box
            marginY={3}
            sx={{ display: "flex", flexDirection: "column", maxWidth: 250 }}
          >
            <Typography
              marginBottom={2}
              variant="p"
              fontSize={18}
              fontWeight={"bold"}
              color={WHITE}
            >
              Ratings
            </Typography>
            <CardRatings
              size="larger"
              averageScore={media.vote_average}
              color={NEVADA}
              starColor={WHITE}
            />
          </Box>
          <RateMedia />
        </Box>
      </Box>
    </Container>
  );
};

export default MediaInfo;
