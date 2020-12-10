import React,{useState} from 'react'
import Search from '../component/Search'
import styles from '../css/Home.module.css'
import MovieList from '../component/MovieLists'
function Add() {

    

    return (
        <div className={styles.home}>
           <Search/>
           <MovieList/>
    
        </div>
    )
}

export default Add
