import React from 'react'
import classes from '../../styles/Footer.module.css';

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className="footer__copyright">&copy; 2022 David Henriquez</div>
      <div className="footer__signature">GG IZI</div>
    </footer>
  )
}
