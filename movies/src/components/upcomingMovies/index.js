import React from "react";
import Movie from "../movieCard";
import Grid from "@mui/material/Grid";

const UpcomingMovieList = (props) => {
  let upcomingMovieCards = props.UpcomingMovieList.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Movie key={m.id} movie={m} selectFavorite={props.selectFavorite} />
    </Grid>
  ));
  return upcomingMovieCards;
};

export default UpcomingMovieList;