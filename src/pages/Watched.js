import React,{useEffect} from 'react'
import {useMovie} from '../component/Context'
import styles from '../css/WatchList.module.css'
import picture from './download.jpg'
import { AiFillEyeInvisible } from 'react-icons/ai';
import {MdDelete } from 'react-icons/md';
function Watched() {

    let {wishList,setWishList,setWatched,watched} = useMovie();
   let notwatchedHandler=(data)=>{
    let newLista = watched.filter(a=>{
        if(data.data.id===a.data.id){
            setWishList([data,...wishList])
            return false;
        }
        else{
            return true;
        }
    }) 

    setWatched(newLista);
    
    };
let deleteHandler = (data)=>{
   
    
   
   let newList= watched.filter(a=>{
    
        if(data.data.id===a.data.id){
            return false;
        }
        else{
            return true;
        }
    }
    )
    
    setWatched(newList)

}
    return (
        <div className= {styles.WishList}>
               {
watched.map(a=>{
    
            return (

                <div className={styles.movieList}>
           {
   

}
            <div className={styles.movie}>
                <div className={styles.images}>
                <img src={a.data.backdrop_path? `https://image.tmdb.org/t/p/w200${a.data.backdrop_path}`:picture } width="100%" height="100%" alt="No image Available" style={{borderRadius:"8px", boxShadow:"0 3px 8px 3px rgba(0,0,0,0.3)",cursor:"pointer"}}></img> 
                <div className={styles.Menu}>
                    <span className={styles.span} onClick={()=>notwatchedHandler(a)}><AiFillEyeInvisible/>
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
export default Watched
