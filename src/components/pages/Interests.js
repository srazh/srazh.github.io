import React from 'react';
import Card from "../pages/home/Card";
import {Grid } from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft:"40px",
    paddingRight: "40px"
  }
})

export default function Interests() {
  const classes = useStyles();

  return (
    <Grid container spacing= {4} classame={classes.gridContainer} justify="center">>
      <Grid item xs={12} sm={6} md={4}>
      <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card />
      </Grid>

    </Grid>
   


  );
}

