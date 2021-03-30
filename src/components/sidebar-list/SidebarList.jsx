import React from 'react'
import classNames from 'classnames'

import { Badge } from '../badge'

import './SidebarList.scss'

import removeIcon from '../../assets/images/remove.svg'

export const SidebarList = ({ items, isRemovable, onClick, onRemove }) => {
  return (
    <ul onClick={onClick} className='sidebar-list'>
      {items.map((item, index) => (
        <li key={index} className={classNames(item.className, { active: item.active })}>
          <i>{item.icon ? item.icon : <Badge color={item.color} />}</i>
          <span>{item.name}</span>
          {isRemovable && (
            <img
              onClick={onRemove}
              className='sidebar-list__remove-icon'
              src={removeIcon}
              alt='Удалить группу дел'
            />
          )}
        </li>
      ))}
    </ul>
  )
}
