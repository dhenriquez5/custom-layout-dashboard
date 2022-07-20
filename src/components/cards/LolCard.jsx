import React from 'react'

import classes from '../../styles/Main.module.css';


export const LolCard = ({title,name}) => {
    return (
        <div className={classes.overviewcard}>
            <div className={classes.overviewcard__icon}>{title}</div>
            <div className={classes.overviewcard__info}>{name}</div>
        </div>
    )
}
