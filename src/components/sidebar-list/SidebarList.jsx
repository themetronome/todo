import React from 'react'
import classNames from 'classnames'

import './SidebarList.scss'

export const SidebarList = ({ items, isRemovable }) => {
  return (
    <ul className='sidebar-list'>
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className, { active: item.active })}>
          <i>{item.icon ? item.icon : <i className={`badge badge--${item.color}`}></i>}</i>
          <span>{item.title}</span>
        </li>
      ))}
    </ul>
  )
}
