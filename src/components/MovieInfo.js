import PropTypes from "prop-types";
import "../css/movieInfo.css";
function MovieInfo({ description, coverImg, title, genres }) {
  return (
    <div className="movieInfo">
      <div className="movieInfo-box">
        <img className="movieInfo-poster" src={coverImg} alt={title} />
        <div>
          <h2 className="movieInfo-title">{title}</h2>
          <h2 className="movieInfo-description">{description}</h2>
          <div className="movieInfo-genres">
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

MovieInfo.propTypes = {
  id: PropTypes.number,
  coverImg: PropTypes.string,
  title: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
};
export default MovieInfo;
