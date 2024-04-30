import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "date-fns";

export default function PostPage() {
    const [postInfo, setPostInfo] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        //console.log(id);
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                })
            });
    }, []);

    if (!postInfo) return 'No info from post';

    return (
      <div className="post-page">
        <h1> {postInfo.title} </h1>

        <time> {format(new Date(postInfo.createdAt), 'MMM d, yyyy')} </time>
        
        <div className="author"> by @{postInfo.author.username} </div>

        <div className="image">
          <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />

        {/* if you want to print HTML from a string, you need to use dangerouslySet in an empty div that is closed directly after */}
        </div>

        <div className="content" dangerouslySetInnerHTML={{__html: postInfo.content}} />

      </div>
    );
};