import React, { Fragment } from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

// const useStyles = makeStyles({
//   root: {
//     minWidth: 200,
//     margin: 15,
//     borderRadius: 15,
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 18,
//   },
//   pos: {
//     marginBottom: 4,
//   },
// });

// const Bus_item_customer = ({ bus }) => {
//   const classes = useStyles();
//   const bull = <span className={classes.bullet}>•</span>;
//   return (
//     <Fragment>
//       <Card className={classes.root} variant="outlined">
//         <CardContent>
//           <Typography
//             className={classes.title}
//             color="textSecondary"
//             gutterBottom
//           >
//             <h2>
//               {" "}
//               <i class="fa fa-bus" aria-hidden="true"></i> {bus.bus_id}
//             </h2>
//           </Typography>
//           <Typography className={classes.pos} color="textSecondary">
//             <p>
//               {bus.from} to {bus.to}
//             </p>
//           </Typography>
//           {/* <Typography className={classes.pos} color="textSecondary">
//             <p>
//               {bus.from} to {bus.to}
//             </p>
//           </Typography> */}
//           {/* <Typography className={classes.pos} color="textSecondary">
//             <p>To:{bus.to}</p>
//           </Typography> */}
//           <Typography variant="body2" component="h1">
//             <p>Arrival:{bus.start_time}</p>

//             <p>Departure:{bus.end_time}</p>
//           </Typography>
//           <Typography variant="body2" component="p">
//             <p>Duration:180 mins</p>
//             <p>Fare:Rs 250</p>
//           </Typography>
//           <Typography>
//             <Button>
//               <Link to={`/api/users/bus/${bus._id}`}>View bus </Link>
//             </Button>
//           </Typography>
//         </CardContent>
//       </Card>
//       {/* // */}
//       {/* <div className="profile bg-light">
//         <div>
//           <p>From:{bus.from}</p>
//           <p>To:{bus.to}</p>
//           <p>Arrival:{bus.start_time}</p>
//           <p>Departure:{bus.end_time}</p>
//           <p>
//             {" "}
//             <i class="fas fa-calendar-alt" aria-hidden="true">
//               {" "}
//               {bus.date}
//             </i>
//           </p>
//           <div className="black">
//             <Link to={`/api/users/bus/${bus._id}`}>View bus </Link>
//           </div>
//         </div>
//       </div> */}
//     </Fragment>
//   );
// };
// Bus_item_customer.propTypes = {
//   bus: PropTypes.object.isRequired,
// };

// export default Bus_item_customer;

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
            {/* <Typography variant="body2" color="textSecondary" component="p">
              Duration: {bus.start_time - bus.end_time}
            </Typography> */}
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
