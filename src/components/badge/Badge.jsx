import React from 'react'
import classNames from 'classnames'

import './Badge.scss'

// className={`badge badge--${color} ${activeClassName}`

export const Badge = ({ color, onClick, activeClassName }) => (
  <i
    onClick={onClick}
    className={classNames('badge', { [`badge--${color}`]: color }, activeClassName)}
  ></i>
)
