import { useState, useEffect } from "react";
import style from './itemrelay.module.css';

function Itemsrelay () {
    const [itemArray, setItemArray] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjUwYjdkMjk2ZWI2MTA2NjEwN2YzOTMwYjk2ZjE3NSIsIm5iZiI6MTczMjg4NjI4MC40NDcyODY0LCJzdWIiOiI2NzI3YmRiODcyMGYwNDc2ZjYwZDkwYjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LpFK3dt465lTshpk8hB9wWnASAw5cNL1JODGxsxHElU'
            }
          };
          
          fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => setItemArray(res.results))
            .catch(err => console.error(err));
    },[]);

    return (
        <div className={style.itemsRelayHldr}>
                <h2>Popular Movies</h2>
                <div className={style.itemsRelayItems}>
                {itemArray.map(item => (
                    <div key={item.id} className={style.featuredCard}>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt={item.title} />
                        {/* <p>{item.title}</p> */}
                    </div>
                ))}
                </div>
        </div>
    )
}

export default Itemsrelay;