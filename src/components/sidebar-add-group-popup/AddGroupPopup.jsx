import React, { useState } from 'react'

import { Badge } from '../badge'

import db from '../../mock/db.json'

import closeIcon from '../../assets/images/close.svg'

import './AddGroupPopup.scss'

export const AddGroupPopup = ({ colors, isOpened }) => {
  const [selectedColor, setColor] = useState(colors[0].id)

  return (
    <div className='sidebar-list__group-popup'>
      <img
        onClick={() => isOpened(false)}
        src={closeIcon}
        alt='Закрыть'
        className='sidebar-list__group-popup-close-btn'
      />
      <input className='field' type='text' placeholder='Название группы' />
      <div className='sidebar-list__group-popup-colors'>
        {db.colors.map(color => (
          <Badge
            onClick={() => setColor(color.id)}
            color={color.name}
            key={color.id}
            activeClassName={selectedColor === color.id && 'active'}
          />
        ))}
      </div>
      <button className='button'>Добавить</button>
    </div>
  )
}
