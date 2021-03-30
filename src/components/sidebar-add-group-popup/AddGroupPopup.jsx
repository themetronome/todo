import React, { useState } from 'react'

import { Badge } from '../badge'

import db from '../../mock/db.json'

import closeIcon from '../../assets/images/close.svg'

import './AddGroupPopup.scss'

export const AddGroupPopup = ({ colors, isOpened, onAddItem }) => {
  const [selectedColor, setColor] = useState(colors[0].id)
  const [inputValue, setInputValue] = useState('')

  const onClosePopup = () => {
    isOpened(false)
    setInputValue('')
    setColor(colors[0].id)
  }

  const onPopupSubmit = () => {
    !inputValue
      ? alert('Введите название группы дел')
      : onAddItem({
          id: Math.random() * 10,
          name: inputValue,
          color: colors.filter(color => color.id === selectedColor)[0].name,
        })

    onClosePopup()
  }

  return (
    <div className='sidebar-list__group-popup'>
      <img
        onClick={onClosePopup}
        src={closeIcon}
        alt='Закрыть'
        className='sidebar-list__group-popup-close-btn'
      />
      <input
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className='field'
        type='text'
        placeholder='Название группы'
      />
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
      <button onClick={onPopupSubmit} className='button'>
        Добавить
      </button>
    </div>
  )
}
