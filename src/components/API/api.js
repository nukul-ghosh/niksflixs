import axios from 'axios';

const headers = {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjUwYjdkMjk2ZWI2MTA2NjEwN2YzOTMwYjk2ZjE3NSIsIm5iZiI6MTczMjg4NjI4MC40NDcyODY0LCJzdWIiOiI2NzI3YmRiODcyMGYwNDc2ZjYwZDkwYjQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LpFK3dt465lTshpk8hB9wWnASAw5cNL1JODGxsxHElU'
    };

const getHero = async () => {
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    
    try {
        const response = await axios.get(url, { headers });
        console.log('Data:', response.data.results);
        return response.data.results;
    } catch (error) {
        console.error('Error fetching data:', error.message); // Handle errors
        return error;
    }
};


export {getHero};