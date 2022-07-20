import React from 'react'

import classes from '../../styles/Sidebar.module.css';

export const SidebarList = ({title,path}) => {
  return (
    <li className={classes.sidenav__list__item}>{title}</li>
  )
}
