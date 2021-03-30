import React from 'react'
import classNames from 'classnames'

import { Badge } from '../badge'

import './SidebarList.scss'

export const SidebarList = ({ items, isRemovable, onClick }) => {
  return (
    <ul onClick={onClick} className='sidebar-list'>
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className, { active: item.active })}>
          <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
          <span>{item.name}</span>
        </li>
      ))}
    </ul>
  )
}
