import React from 'react'

import classes from '../../styles/Main.module.css';
import { LolCard } from '../cards/LolCard';


const cardItems = [
  { name: 'Card 1', title: "Titlte 1 " },
  { name: 'Card 2', title: "Titlte 2 " },
  { name: 'Card 3', title: "Titlte 3 " },
  { name: 'Card 4', title: "Titlte 4 " },
]


export const Main = () => {
  return (
    <main className={classes.main}>
      <div className={classes['main-header']}>
        <div className={classes['main-header'].__heading}>Hello User</div>
        <div className={classes['main-header'].__updates}>Recent Items</div>
      </div>
      <div className={classes.main__overview}>

        {
          cardItems && cardItems.map(({ name, title }) => (
            <LolCard key={name} title={title} name={name} />
          ))
        }

      </div>

      <div className={classes.main__cards}>
        <div className={classes.card}>Card</div>
        <div className={classes.card}>Card</div>
        <div className={classes.card}>Card</div>
      </div>
    </main>
  )
}
