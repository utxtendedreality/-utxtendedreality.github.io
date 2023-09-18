import {Link} from "react-router-dom";
import {format,  formatISO9075} from "date-fns";
import "./SinglePost.css"

export default function Post({_id,title,summary,createdAt,author}) {

  return (
    <div className="post">
      <div className="texts">
        <Link className="post-title" to={`/post/${_id}`}>{title}</Link>
        <p className="info">
          <a className="author">{author.username}</a>
          <time>{format(new Date(createdAt), 'yyyy-MM-dd')}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
}