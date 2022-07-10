import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoad] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const json = await await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setMovie(json.data.movie);
    setLoad(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <img src={movie.large_cover_image} alt={movie.id} />
          <h1>{movie.title}</h1>
          <span>{movie.description_full}</span>
        </div>
      )}
    </div>
  );
}

export default Detail;
