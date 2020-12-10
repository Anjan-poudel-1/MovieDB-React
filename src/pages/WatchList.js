import React,{useEffect} from 'react'
import {useMovie} from '../component/Context'
import styles from '../css/WatchList.module.css'
import picture from './download.jpg'
import { AiFillEye } from 'react-icons/ai';
import {MdDelete } from 'react-icons/md';
function WatchList() {

    let {wishList,setWishList,setWatched,watched} = useMovie();

   let watchedHandler=(d)=>{
    let newList = wishList.filter(a=>{
        if(a.data.id!==d.data.id){
            return true;
        }
        else{
            setWatched([d,...watched]);
            return false;
        }
    });
    setWishList(newList);
    
    };
let deleteHandler = (d)=>{
   
    let newList = wishList.filter(a=>a.data.id!==d.data.id);
    setWishList(newList);

}
    return (
        <div className= {styles.WishList}>
           
               {
                  
wishList.map(a=>{
  
            return (
                <div className={styles.movieList} key={a.data.id}>
            <div className={styles.movie}>
                <div className={styles.images}>
                <img src={a.data.backdrop_path? `https://image.tmdb.org/t/p/w200${a.data.backdrop_path}`:picture } width="100%" height="100%" alt="No image Available" style={{borderRadius:"8px", boxShadow:"0 3px 8px 3px rgba(0,0,0,0.3)",cursor:"pointer"}}></img> 
                <div className={styles.Menu}>
                    <span className={styles.span} onClick={()=>watchedHandler(a)}><AiFillEye/>
                    </span><span className={styles.span} onClick={()=>deleteHandler(a)}><MdDelete/></span>
                </div>
                </div>
<p style={{margin:"20px 0",color:"rgb(1, 71, 71)"}}>{a.data.original_title}</p>
            </div>
            </div>
            
            )
})
    }
        </div>
    ) 
    }
export default WatchList
