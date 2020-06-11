import React from 'react';

import styles from './GameBoard.scss';
import classNames from 'classnames/bind'

import Tile from 'components/game/tile/Tile';
// import InfoModalContainer from 'containers/modal/InfoModalContainer';
// import GameWinModalContainer from 'containers/modal/GameWinModalContainer';

const cx = classNames.bind(styles);

// TODO: scss style build
const __gridStyle__ = (numColumn, numRow) => ({
  margin: "auto",
  // width: "70%",
  // height: "400px",
  width: `${numColumn*32+4}px`,
  height: `${numRow*32+4}px`,
  marginBottom: "2rem",
});
// will replace long props to {...props}
const GameBoard = (props) => {
  const { board, focusPos } = props;
  const { handleDragStart, handleDragOver, handleDragEnd, handleDragEnter } = props;

  const getTileGrid = (tileArray) => (
    tileArray.map((tileRow, y) => {
      return tileRow.map((tile, x) => {
        // if (!tile) return null;
        const theme = tile? '' : 'outline';
        return <Tile
                  key={`tile-${x}-${y}`}
                  x={x} y={y}
                  focused={focusPos.x === x && focusPos.y === y}
                  theme={theme}
                  onDragStart={handleDragStart || null}
                  onDragOver={handleDragOver || null}
                  onDragEnter={handleDragEnter || null}
                  onDragEnd={handleDragEnd || null}
                />
      })
    })
  );

  const numRow = board.length;
  const numColumn = board[0].length;
  return (
    <div className={cx('game-board')}>
      <div className={cx('grid-area')}
        style={__gridStyle__(numColumn, numRow)}>
        {getTileGrid(board)}
      </div>
      <div style={{textAlign:"center"}}>
        {/* <GameWinModalContainer/> */}
      </div>
    </div>
  )
}

export default GameBoard;