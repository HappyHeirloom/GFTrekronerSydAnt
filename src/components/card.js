//#region Imports
import React from "react";
import "../styles/card.css";
import changeLanguage from '../components/languageComponent'



// Material UI
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

//#endregion

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    paddingTop: "42.85%", // 21:9
  }
};

export default function PdfCard(prop) {
  var title = "";
  var content = "";

  if(changeLanguage() ? title = prop.prop.title_en  : title = prop.prop.title_dk); 
  if(changeLanguage() ? content = prop.prop.content_en  : content = prop.prop.content_dk); 

  //#region HTML code
  return (
    <Card className="root cardtext">
      <CardActionArea>
        <div className="">  
          <CardMedia
            style={styles.media}
            image={prop.prop.img}
            title="Contemplative Reptile"
            className="ui-box bottom-stay"
          >
            <span className="ui-border-element">
            </span>
          </CardMedia>
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography
            className="text-truncate"
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
  //#endregion
}
//#endregion
