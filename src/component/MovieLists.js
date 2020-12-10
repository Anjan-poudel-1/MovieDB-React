import React,{useState,useEffect} from 'react'
import Loading from './Loading';
import axios from 'axios'
import {useMovie} from './Context'
import Movie from './Movie'
import styles from '../css/Home.module.css'

function MovieList() {

  const [loading,setLoading] = useState(false)
  let disabled= false;
let {MovieName,SetMovieList,MovieList,wishList,watched} = useMovie();
  useEffect(()=>{
    fetchdata();
}
, [MovieName]);

async function fetchdata(){
  try{

     setLoading(true);

      await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_kEY}&language=en-US&page=1&include_adult=false&query=$${MovieName}`).then((data)=>{
      console.log(data.data.results)   
      SetMovieList(data.data.results)  
      setLoading(false);       
    
      })
      .catch((error)=>{
          console.log(error);
      })
      setLoading(false);
  }
  catch(err){
      console.log(err)
  }
  
  
}
if (loading){
  return <Loading/>
}
    return (
      <div className={styles.main}>


{MovieName?
(MovieList.length>0?
    MovieList.map(m=>{
    disabled=false
      if(wishList && wishList.length>0)
      {    
        wishList.map(a=>{
        if(a.data.id===m.id){
            disabled=true;
        }   })}
        if(watched && watched.length>0){
        watched.map(a=>{
          if(a.data.id===m.id){
              disabled=true;
          }   })

  
  
  }

return <Movie data={m} key={m.id} disabled={disabled}/>
    })
: 
 <p>Sorry!! No results found</p>)
 :
 null
}

         
      </div>
    )


    }
export default MovieList
