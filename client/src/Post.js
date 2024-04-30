import { format } from "date-fns";

export default function Post({title, summary, cover, content, createdAt, author}) {
  //console.log(author)
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://www.ipswichriver.org/wp-content/uploads/2023/10/babybeaver.png"
          alt=""
        />
      </div>

      <div className="texts">
        <h2> {title} </h2>
        <p className="info">
          <a className="author"> {author ? author.username : 'Loading...'} </a>
          <time> {format(new Date(createdAt), 'MMM d, yyyy')} </time>
        </p>
        <p className="summary"> {summary} </p>
      </div>
    </div>
  );
}
