import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import { useEffect, useState } from 'react';
import style from './listing.module.css';
import { useQuery } from '@tanstack/react-query';
import { getHero } from './../API/api';

function Hero() {
  const {data, isLoading, isError } = useQuery({
    queryKey: ['hero'],
    queryFn: getHero,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {isError.message}</span>;
  }

  return ( data && 
    <div className={style.hero}>
      <Fade duration={15000}>
        {data.map(slideImage => (
          <div key={slideImage.id} className={style.slidehdlr}>
            <img
              className={style.imgStyle}
              src={`https://image.tmdb.org/t/p/original${slideImage.backdrop_path}`}
            />
            <div className={style.leftFade}>&nbsp;</div>
            <div className={style.rytFade}>&nbsp;</div>
            <div className={style.bottomFade}>&nbsp;</div>
            <div className={style.title}>{slideImage.title}</div>
            <div className={style.desc}>{slideImage.overview}</div>
          </div>
        ))}
      </Fade>
    </div>
  );
}

export default Hero;