import React,{useState} from 'react'
import Search from '../component/Search'
import styles from '../css/Home.module.css'
import MovieLists from '../component/MovieLists'
import LoadingComp from '../component/Loading'
import {useMovie} from '../component/Context'
function Add() {

    let {loading,MovieList,search}= useMovie();
if(loading){
    console.log("i am loading")
    return <LoadingComp/>
}

    return (
        <div className={styles.home}>
           <Search/>
<div className={styles.main}>
    {console.log(MovieList)}

{ 
search?
(MovieList.length>0?
    MovieList.map(m=>{
return <MovieLists data={m}/>
    })
: 
 <p>Sorry!! No results found</p>)
 :
 null
}


</div>
    
        </div>
    )
}

export default Add
