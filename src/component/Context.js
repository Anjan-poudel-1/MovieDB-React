import React,{useState,useContext, createContext,useEffect} from 'react'

 export const MovieContext =createContext();
 export function useMovie (){     //It is used to link up the values where context is being used in other components
    return useContext(MovieContext);
}
export function MovieProvider(props){

    const[wishList,setWishList] = useState([]);
    const[watched,setWatched] = useState([]);
const [loading,setLoading]= useState(false);
const [MovieList,SetMovieList] = useState([]);
const [MovieName,SetMovieName] = useState('');
useEffect(() => {

  let tempWishList=  localStorage.getItem("Wishlist")?JSON.parse(localStorage.getItem("Wishlist")):[];
let tempWatched = localStorage.getItem("Watched")?JSON.parse(localStorage.getItem("Watched")):[]
  setWishList(tempWishList)
  setWatched(tempWatched);
}, [])

useEffect(() => {
    localStorage.setItem("Wishlist",JSON.stringify(wishList));
   localStorage.setItem("Watched",JSON.stringify(watched));
}, [wishList,watched]);

let value={
wishList,
watched,
setLoading,
loading,
setWatched,
setWishList,
MovieList,
SetMovieList,
MovieName,
SetMovieName
    }
   
return(

    <MovieContext.Provider value={value}>
        {props.children}
    </MovieContext.Provider>

)



}





