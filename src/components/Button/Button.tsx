import * as React from 'react';
import Icon from '../Icon/Icon';
import cn from 'classnames';

import './Button.css';

type Props = {
  iconName: string
  theme?: 'outlined' | 'default'
}

export const Button: React.FC<Props> = ({ children, iconName, theme = 'default' }) => {
  return (
    <button className={cn('button', `theme-${theme}`)}>
      {!!iconName && <div className='button__icon'><Icon name={iconName} /></div>}
      {children}
    </button>
  )
}
