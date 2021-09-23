//#region Imports
import React from "react";
import { AutoComplete, Card } from 'antd';

const { Meta } = Card;

// Material UI
// import { makeStyles } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Typography from "@material-ui/core/Typography";

//#endregion

//#region Styles
// const useStyles = makeStyles({
//   root: {
//     borderRadius: 20,
//     maxWidth: 800,
//     margin: "auto",
//   },

//   media: {
//     height: 140,
//     width: 320,
//     margin: "auto",
//   },
// });
//#endregion

export default function PdfCard(prop) {
  //#region HTML code
  // const classes = useStyles();
  return (
    <Card
      style={{ width: 600, margin: "auto", }}
      cover={
        <img
          alt="example"
          src={prop.prop.img}
          height="300"
          width="300"
        />
      }
      >
      <Meta
        title={prop.prop.title}
        description={prop.prop.content}
      />
    </Card>
    // <Card className={classes.root}>
    //   <CardActionArea>
    //     <CardMedia
    //       className={classes.media}
    //       image={prop.prop.img}
    //       title="Contemplative Reptile"
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {prop.prop.title}
    //       </Typography>
    //       <Typography
    //         className="text-truncate"
    //         variant="body2"
    //         color="textSecondary"
    //         component="p"
    //       >
    //         {prop.prop.content}
    //       </Typography>
    //     </CardContent>
    //   </CardActionArea>
    // </Card>
  );
  //#endregion
}
//#endregion
