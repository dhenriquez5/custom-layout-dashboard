import React, { useState } from 'react'
import { Footer } from '../components/ui/Footer'
import { Main } from '../components/ui/Main'
import { Navbar } from '../components/ui/Navbar'
import { SideBar } from '../components/ui/SideBar'
import useCheckMobileScreen from '../hooks/useCheckMoblileScreen'
import classes from '../styles/Dashboard.module.css'
import { FaTimes } from 'react-icons/fa';
import { FaBars } from 'react-icons/fa';

export const Dashboard = () => {
    const isMobile = useCheckMobileScreen();
    const [showSidebar, setShowSidebar] = useState(false);

    const toggle = () => {
        setShowSidebar(prev=>!prev);
    }

    return (
        <>
            <div className={classes.container}>

                <Navbar />
                 
                 <SideBar />
                
                


                <Main />

                <Footer />
            </div>


        </>

    )
}
