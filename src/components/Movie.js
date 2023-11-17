import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/movies.css";
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className="movie">
      <div className="movie-box">
        <img className="poster" src={coverImg} alt={title} />
        <div>
          <h2>
            <Link
              className="title"
              to={`${process.env.PUBLIC_URL}/movie/${id}`}
            >
              {title}
            </Link>
          </h2>
          <p className="summary">
            {summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}
          </p>
          <div className="genres">
            <ul>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
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
