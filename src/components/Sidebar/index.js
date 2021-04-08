import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { sidebarItens } from './utils/sidebar-items';
import SidebarWrapper from './styledComponents';

function Sidebar() {
  let location = useLocation();

  return (
    <SidebarWrapper>
      <ul className="list">
        {sidebarItens.map(item => (
          <li
            className={`list-item ${location.pathname === item.to ? 'list-item--active' : ''}`}
            key={item.title}
          >
            <NavLink
              activeClassName="link--active"
              className="link"
              to={item.to}
              data-testid={item.to}
            >
              {item.svg(`${location.pathname === item.to ? '#0077FF' : '#C0C5D2'}`)}
            </NavLink>
          </li>
        ))}
      </ul>
    </SidebarWrapper>
  );
}

export default Sidebar;
