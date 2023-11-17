import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "../css/home.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setMovie(json.data.movie);

    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="main">
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <div>
          <div className="home_button">
            <a className="home_button-href" href="/my-first-react">
              HOME
            </a>
          </div>
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
