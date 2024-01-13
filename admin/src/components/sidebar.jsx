import React, { useState } from 'react';
import { UilSignOutAlt, UilEstate, UilClipboardAlt, UilUsersAlt, UilPackage, UilChart } from '@iconscout/react-unicons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from '../imgs/logo.png';
import './Sidebar.css';

const SidebarData = [
  {
    icon: UilEstate,
    heading: 'Dashboard',
  },
  {
    icon: UilClipboardAlt,
    heading: 'Orders',
  },
  {
    icon: UilUsersAlt,
    heading: 'Products',
  },
  {
    icon: UilChart,
    heading: 'Analytics',
  },
];

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: '0',
    },
    false: {
      left: '-60%',
    },
  };

  return (
    <div className='sidebar-main'>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpanded(!expanded)}>
        {/* Your bars icon */}
      </div>
      <motion.div className="sidebar" variants={sidebarVariants} animate={window.innerWidth <= 768 ? `${expanded}` : ''}>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="menu">
          {SidebarData.map((item, index) => (
            <Link to={`/${item.heading.toLowerCase()}`} key={index}>
              <div className={selected === index ? 'menuItem active' : 'menuItem'} onClick={() => setSelected(index)}>
                <item.icon />
                <span className='btn-text-lgt-xs'>{item.heading}</span>
              </div>
            </Link>
          ))}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;