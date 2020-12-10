import React,{useState,useEffect} from 'react'
import styles from '../css/Home.module.css'
import {useMovie} from './Context'
function Movie(props) {

const {wishList,setWishList} = useMovie();
let AddtoWatchList= (id)=>{

    setWishList([props,...wishList]);
   
}

    return (
       
        <div className={styles.movie}>
            <div className={styles.image}>
         <img src={`https://image.tmdb.org/t/p/w200${props.data.backdrop_path}`} width="100%" height="100%" alt="No image Available"></img> 
         </div>
        
            <div className={styles.description}>
    <h3 className={styles.name}>{props.data.original_title}</h3>
                <p className={styles.year}>{props.data.release_date?props.data.release_date.substring(0, 4):"-------"}</p>
                <button className={ props.disabled===true?[styles.btn,styles.disabled].join(" ") :styles.btn}  disabled={props.disabled}
                onClick={()=>{
                    AddtoWatchList(props.data.id);
                }}
                >Add to Watch-List</button>

            </div>
        </div>
    )
}

export default Movie
