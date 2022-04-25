import React from 'react';
import * as FaIcons from "react-icons/fa";
import {Link} from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className='Sidebar'>
        <Link to="#" className='menu-bars'>
        <FaIcons.FaBars />
        </Link>
      </div>  
    </>
  )
}

export default Sidebar