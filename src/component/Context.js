import React,{useState,useContext, createContext} from 'react'

 export const MovieContext =createContext();
 export function useMovie (){     //It is used to link up the values where context is being used in other components
    return useContext(MovieContext);
}
export function MovieProvider(props){

    const[wishList,setWishList] = useState([]);
    const[watched,setWatched] = useState([]);
const [loading,setLoading]= useState(false);
const [MovieList,SetMovieList] = useState([]);
const [search,setSearch] = useState('');

let value={
wishList,
watched,
setLoading,
loading,
setWatched,
setWishList,
MovieList,
SetMovieList,
search,
setSearch

    }

return(

    <MovieContext.Provider value={value}>
        {props.children}
    </MovieContext.Provider>

)



}





