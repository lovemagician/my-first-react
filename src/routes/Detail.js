import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import MovieInfo from "../components/MovieInfo";
import "../css/home.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="movieInfo-main">
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <div className="home_button">
            <a
              className="home_button-href"
              href="https://lovemagician.github.io/my-first-react/"
            >
              HOME
            </a>
          </div>
          <MovieInfo
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            description={movie.description_full}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
