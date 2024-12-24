import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import { useEffect, useState } from 'react';
import style from './listing.module.css';
import { useQuery } from "@tanstack/react-query";

function getHero() {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjUwYjdkMjk2ZWI2MTA2NjEwN2YzOTMwYjk2ZjE3NSIsIm5iZiI6MTczMjg4NjI4MC40NDcyODY0LCJzdWIiOiI2NzI3YmRiODcyMGYwNDc2ZjYwZDkwYjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LpFK3dt465lTshpk8hB9wWnASAw5cNL1JODGxsxHElU");
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'", requestOptions)
  .then((response) => response.json())
  .then((result) => {
      // setHeroArray(result.results);
      return result.results;
  })
  .catch((error) => {console.error(error); return error});
}

function Hero () {
    // const [heroArray, setHeroArray] = useState([]);
    // useEffect (() => {}, []);

      const { isPending, isError, data, error } = useQuery({
        queryKey: ['hero'],
        queryFn: getHero,
      })
    
      if (isPending) {
        return <span>Loading...</span>
      }
    
      if (isError) {
        return <span>Error: {error.message}</span>
      }
    

    return (
        <div className={style.hero}>
        <Fade duration={15000}>
            {data.map((slideImage)=> (
              <div key={slideImage.id} className={style.slidehdlr}>
                <img className={style.imgStyle} src={`https://image.tmdb.org/t/p/original${slideImage.backdrop_path}`} />
                <div className={style.leftFade}>&nbsp;</div>
                <div className={style.rytFade}>&nbsp;</div>
                <div className={style.bottomFade}>&nbsp;</div>
                <div className={style.title}>{slideImage.title}</div>
                <div className={style.desc}>{slideImage.overview}</div>
              </div>
          ))} 
        </Fade>
        
        </div>
    )
}

export default Hero;