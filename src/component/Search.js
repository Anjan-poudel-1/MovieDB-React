import React,{useRef,useState,useEffect} from 'react'
import styles from '../css/Home.module.css'
import Movie from './Movie'
import axios from 'axios';
import {useMovie} from './Context';
import Loading from './Loading';
function Search() {
    let inputref = useRef();
  
let {SetMovieList,setLoading,loading} = useMovie();



const [search,setSearch] = useState('');
useEffect(()=>{
    fetchdata();
}
, [search]);

    let onChangeHandler= ()=>{
        console.log("it is changed")

        console.log(inputref.current.value)
        setSearch(inputref.current.value); 
    }

    async function fetchdata(){
        try{

           setLoading(true);
            console.log("Set to true")
            await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_kEY}&language=en-US&page=1&include_adult=false&query=$${search}`).then((data)=>{
            console.log(data.data.results)   
            SetMovieList(data.data.results)  
            setLoading(false);       
            console.log("setloading is false ")       
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



  
    return (
        <div className={styles.search}>
            <input type="text"  ref={inputref}  className={styles.input} placeholder="Search for a Movie..." onChange={()=>onChangeHandler()}></input>   
        </div>
    )


    }

   

export default Search
