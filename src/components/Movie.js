import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/movies.css";
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="movies">
      <img className="poster" src={coverImg} alt={title} />
      <div>
        <h2>
          <Link className="title" to={`/movie/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="summary">{summary}</p>
        <div className="genres">
          <ul>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;
