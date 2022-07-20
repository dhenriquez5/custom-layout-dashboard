import React from 'react'
import classes from '../../styles/Header.module.css';

export const Navbar = () => {
  return (
    <header className={classes.header}>
      <div className="header__search">Search...</div>
      <div className="header__avatar">Your face</div>
    </header>
  )
}