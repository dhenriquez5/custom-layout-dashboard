import React from 'react'
import classes from '../../styles/Header.module.css';

import image from '../../assets/linkedin.png'
import search from '../../assets/search.png'
import { IoIosHome } from "react-icons/io";

export const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className={classes.navbar} >
        <div style={{ display: 'flex', marginLeft: '10%' }}>
          <div className={classes.image}>
            <img src={image} style={{ height: 'inherit', width: 'inherit' }} alt="linkedIn" />
          </div>
          <div className={classes.inputContainer} >
            {/* <img src={search} alt="Buscar" style={{height:'inherit', width:'inherit'}} /> */}
            <input type="text" placeholder="Buscar..." className={classes.input} />
          </div>
        </div>


        <div className={classes.titleApp}>
          <div className={classes.navbarItem}  >
            <IoIosHome size="1.5em" title="home" />
            <span>Inicio</span>
          </div>
          <div className={classes.navbarItem}>
            <IoIosHome size="1.5em" title="home" />
            <span>Inicio</span>
          </div>

          <div className={classes.navbarItem}>
            <IoIosHome size="1.5em" title="home" />
            <span>Inicio</span>
          </div>
          <div className={classes.navbarItem}>
            <IoIosHome size="1.5em" title="home" />
            <span>Inicio</span>
          </div>
          <div className={classes.navbarItem}>
            <IoIosHome size="1.5em" title="home" />
            <span>Inicio</span>
          </div>
          <span className={classes['vertical-line']}></span>

          <div className={classes.navbarItem}>
            <IoIosHome size="1.5em" title="home" />
            <span>Inicio</span>
          </div>
          <div className={classes.navbarItem}>
            <IoIosHome size="1.5em" title="home" />
            <span>Inicio</span>
          </div>
        </div>





      </div>

    </header>

  )
}