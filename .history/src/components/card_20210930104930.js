//#region Imports
import React from "react";
import "../styles/card.css";



// Material UI
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//#endregion

export default function PdfCard(prop) {
  //#region HTML code
  return (
    <Card className="root">
      <CardActionArea>
        <CardMedia
          className="media"
          image={prop.prop.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {prop.prop.title}
          </Typography>
          <Typography
            className="text-truncate"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {prop.prop.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
  //#endregion
}
//#endregion
