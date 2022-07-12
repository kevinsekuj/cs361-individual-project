import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

interface MediaCardProps {
  title: string;
  description: string;
  url: string;
}

const MediaCard = ({ title, description, url }: MediaCardProps) => (
  <Card sx={{ maxWidth: "80%" }}>
    <CardMedia component="img" height="140" image={url} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

export default MediaCard;
