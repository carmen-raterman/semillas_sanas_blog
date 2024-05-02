import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';


export default function Post({_id, title, summary, cover, content, createdAt, author}) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  //console.log(author)


  return (
    <Grid container spacing={2} sx={{ padding: 2 }}>
      {posts.length > 0 &&
        posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <Card>
              <CardActionArea component={RouterLink} to={`/post/${post._id}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`http://localhost:4000/${post.cover}`}
                  alt={post.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions disableSpacing>
                <Button
                  size="small"
                  color="primary"
                  component={RouterLink}
                  to={`/post/${post._id}`}
                >
                  Leer más
                </Button>
                <Typography variant="caption" color="text.secondary">
                  {format(new Date(post.createdAt), "MMM d, yyyy")} por {" "}
                  {post.author ? post.author.username : "Anonymous"}
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );



  // return (
  //   <div className="post">
  //     <div className="image">
  //       <Link to={`/post/${_id}`}>
  //         <img src= {'http://localhost:4000/'+cover} alt="" />
  //       </Link>
  //     </div>

  //     <div className="texts">
  //       <Link to={`/post/${_id}`}>
  //         <h2> {title} </h2>
  //       </Link>
  //       <p className="info">
  //         <a className="author"> {author ? author.username : 'Anonymous'} </a>
  //         <time> {format(new Date(createdAt), 'MMM d, yyyy')} </time>
  //       </p>
  //       <p className="summary"> {summary} </p>
  //     </div>
  //   </div>
  // );
}
