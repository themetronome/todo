import React, { useState } from 'react'

import { SidebarList } from '../sidebar-list'
import { AddGroupPopup } from '../sidebar-add-group-popup'

import db from '../../mock/db.json'

export const AddGroupButton = ({ onAddItem }) => {
  const [isPopupVisible, setPopupVisibility] = useState(false)

  return (
    <>
      <SidebarList
        onClick={() => setPopupVisibility(true)}
        items={[
          {
            className: 'sidebar-list__add-button',
            icon: (
              <svg
                width='10'
                height='10'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 1V15'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M1 8H15'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ),
            name: 'Добавить категорию',
          },
        ]}
      />
      {isPopupVisible && (
        <AddGroupPopup onAddItem={onAddItem} colors={db.colors} isOpened={setPopupVisibility} />
      )}
    </>
  )
}
