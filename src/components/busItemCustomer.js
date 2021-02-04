import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import img from "../img/greyImage.jpg";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 20,
  },
  media: {
    marginTop: 50,
    height: 140,
  },
  ab: {
    width: 300,
    backgroundColor: "black",
    color: "white",
  },
});

const Bus_item_customer = ({ bus }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia className={classes.media} image={img} title={bus.bus_id} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {bus.from} to {bus.to}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Start At: {bus.start_time}
              <br />
              End At:{bus.end_time}
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Link to={`/api/users/bus/${bus._id}`}>
            {" "}
            <Button
              className={classes.ab}
              type="submit"
              variant="contained"
              value="login"
            >
              {" "}
              View Bus{" "}
            </Button>
          </Link>{" "}
        </CardActions>
      </Card>
    </Fragment>
  );
};

export default Bus_item_customer;
