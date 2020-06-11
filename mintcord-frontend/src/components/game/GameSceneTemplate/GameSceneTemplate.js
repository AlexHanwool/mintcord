import React, { useState } from 'react';

import styles from './GameSceneTemplate.scss';
import classNames from 'classnames/bind';
import GameBoardContainer from 'containers/game/tile/GameBoardContainer';

// import GameBoardContainer from 'containers/GameBoardContainer';
// import ChatBoardContainer from 'containers/ChatBoardContainer';

const cx = classNames.bind(styles);

const GameSceneTemplate = () => {
  const [leftFlex, setLeftFlex] = useState(0.7);

  const handleSeparatorMouseDown = (event) => {
    document.body.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };
  const handleMouseMove = (event) => {
    // TODO: consider channelList width
    let current = event.clientX / window.innerWidth;
    if (current < 0.2) current = 0.2;
    else if (current > 0.8) current=0.8;

    setLeftFlex(current);
  };
  const handleMouseUp = () => {
    document.body.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const leftStyle = { flex: leftFlex };
  const rightStyle = { flex: 1 - leftFlex };
  const separatorStyle = { left: `${leftFlex*100}%` };

  return (
    <div className={cx('game-scene-template')}>
      <div className={cx('pane', 'game-area')} style={leftStyle}>
        <GameBoardContainer/>
      </div>
      <div className={cx('pane', 'chat-area')} style={rightStyle}>
        {/* <ChatBoardContainer /> */}
      </div>
      <div
        className={cx('separator')}
        style={separatorStyle}
        onMouseDown={handleSeparatorMouseDown} 
      />
    </div>
  )
}

export default GameSceneTemplate;