export const getMoviesDetails = async ({params}) =>{

    const id = params.movieID;

    try{
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_API_KEY}`);
        const moviesData = res.json();
        return moviesData;
    }catch(error) {
        return console.log(error);
    }
}