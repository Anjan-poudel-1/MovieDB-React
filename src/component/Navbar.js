import React from 'react'
import styles from '../css/Navbar.module.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
    return (
        <div className={styles.Navbar}>
            
            <div className={styles.logo}>
                <h1>WatchList</h1>
            </div>
            <div className={styles.items}>
             <NavLink to="/Watch-List" ><span className={styles.nav}>WatchList</span></NavLink> 
               <NavLink to="/watched">  <span className={styles.nav}>Watched</span></NavLink>
               <NavLink to="/" style={{textDecoration:'none'}}> <span className={styles.btn}>+ Add</span></NavLink> 
            </div>
        </div>
    )
}

export default Navbar
