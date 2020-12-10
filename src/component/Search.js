import React,{useRef,useState,useEffect} from 'react'
import styles from '../css/Home.module.css'
import Movie from './Movie'
import axios from 'axios';
import {useMovie} from './Context';
import Loading from './Loading';
function Search() {
    let inputref = useRef();
  
let {SetMovieName} = useMovie();

    let onChangeHandler= ()=>{
        SetMovieName(inputref.current.value); 
    }
    return (
        <div className={styles.search}>
            <input type="text"  ref={inputref}  className={styles.input} placeholder="Search for a Movie..." onChange={()=>onChangeHandler()}></input>   
        </div>
    )


    }


export default Search
