import React from 'react';

import styles from './Tile.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Tile = (props) => {
  const { x, y, focused, theme } = props;
  const { onDragStart, onDragOver, onDragEnter, onDragEnd } = props;

  const style = { transform: `translate3d(${x*32}px, ${y*32}px, 0)` }

  return (
    <div className={cx('tile', theme, {focused})}
      style={style}
      draggable={!theme}
      onDragStart={(event) => onDragStart(event,x,y)}
      onDragOver={(event) => onDragOver(event)}
      onDragEnter={() => onDragEnter(x,y)}
      onDragEnd={(event) => onDragEnd(event,x,y)}
    >
      {/* {!theme? <TileImg /> : null} */}
    </div>
  );
}

export default Tile;