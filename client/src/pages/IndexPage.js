import { useEffect, useState } from "react";
import Post from "../Post";
import { Grid } from "@mui/material";


export default function IndexPage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/post')
            .then(response => response.json())
            .then(posts => {
                console.log("Fetched posts:", posts);
                setPosts(posts);
            })
            .catch(error => console.error("Error fetching posts:", error));
    }, []);

    return (
        <Grid container spacing={2} sx={{ padding: 2 }}>
            {posts.length > 0 && posts.map(post => (
                <Post key={post._id} {...post} />
            ))}
        </Grid>
    );
}