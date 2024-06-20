import { format } from "date-fns";
//import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';


export default function Post({_id, title, summary, cover, createdAt, author}) {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea component={RouterLink} to={`/post/${_id}`}>
          <CardMedia
            component="img"
            height="140"
            image={`http://localhost:4000/${cover}`}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {summary}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <Button
            size="small"
            color="primary"
            component={RouterLink}
            to={`/post/${_id}`}
          >
            Leer más
          </Button>
          <Typography variant="caption" color="text.secondary">
            {format(new Date(createdAt), "MMM d, yyyy")} por {" "}
            {author ? author.username : "Anonymous"}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}
