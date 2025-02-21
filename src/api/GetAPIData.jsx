export const getMoviesData = async () =>{
    try{
        const res = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`);
        const moviesData = res.json();
        return moviesData;
    }catch(error) {
        return console.log(error);
    }
}