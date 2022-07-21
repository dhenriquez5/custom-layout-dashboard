import React, { useEffect, useRef, useState } from 'react'
import classes from '../../styles/Sidebar.module.css';
import { SidebarList } from './SidebarList';
import { FaBars } from 'react-icons/fa';
import useCheckMobileScreen from '../../hooks/useCheckMoblileScreen';


const menuItems = [
  { path: '', name: 'Item 1' },
  { path: '', name: 'Item 2' },
  { path: '', name: 'Item 3' },
  { path: '', name: 'Item 4' },
  { path: '', name: 'Item 5' },
  { path: '', name: 'Item 6' },
  { path: '', name: 'Item 7' },

]


export const SideBar = ({ active }) => {

  const isMobile = useCheckMobileScreen();
  const [showSidebar, setShowSidebar] = useState(false);

  const toggle = () => {
    setShowSidebar(prev => !prev);
  }

  let mobileStyles={};
  let ulMobileStyles={};
  if(isMobile) {
      mobileStyles={
        top:'20px',
        position:'fixed',
        padding:0,
        margin:10,
        borderRadius:6,
        width:'50%',
      };
      ulMobileStyles={
        marginTop:'0px'
      }
  }




  return (
    <>

      {isMobile && (
        <div className={classes.menu__icon}>
          <FaBars onClick={toggle} />
        </div>
      )}
      {
        (showSidebar || !isMobile)  && (
          <aside style={mobileStyles}  className={classes.sidenav}>
            <ul  style={ulMobileStyles} className={classes.sidenav__list}>
              {
                menuItems && menuItems.map(({ path, name }) => (
                  <SidebarList key={name} title={name} path={path} />
                ))
              }
            </ul>
          </aside>
        )

      }

    </>

  )
}
