import cn from 'classnames';
import * as React from 'react';

import './Icon.css';

type Props = {
  raw?: boolean,
  className?: string,
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => any,
  style?: Record<string, any>,
  name: string,
}

class Icon extends React.Component<Props> {

  render() {

    const { className, name, raw, onClick, style } = this.props;

    if (!name) {
      return null;
    }

    const icon = require(`./${name}.svg`);
    if (!icon) {
      return null;
    }

    return (
      <span
        onClick={onClick}
        style={style}
        className={cn('icon', { ['icon-raw'] : raw }, className, name)}
        dangerouslySetInnerHTML={{ __html : icon.default }}
      />
    );
  }
}

export default Icon;
