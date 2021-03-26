import React from 'react'

import './SidebarList.scss'

export const SidebarList = ({ items }) => {
  return (
    <ul className='sidebar-list'>
      {items.map(item => (
        <li className={item.active ? 'active' : ''}>
          <i>{item.icon ? item.icon : <i className={`badge badge--${item.color}`}></i>}</i>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  )
}
