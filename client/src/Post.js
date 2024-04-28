export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://www.ipswichriver.org/wp-content/uploads/2023/10/babybeaver.png"
          alt=""
        />
      </div>

      <div className="texts">
        <h2> Beaver </h2>
        <p className="info">
          <a className="author"> Carmen Sophia </a>
          <time> 2024-04-29 </time>
        </p>
        <p className="summary"> This is a beaver and he is super chill </p>
      </div>
    </div>
  );
}
