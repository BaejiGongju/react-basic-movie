import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);

  return (
    <>
      <h1>{movie.title}</h1>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <h3>{movie.year}</h3>
      <p>
        {movie.description_full?.length > 235
          ? `${movie.description_full?.slice(0, 235)}...`
          : movie.description_full}
      </p>
      <ul>
        {movie.genres?.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </>
  );
}

export default Detail;
