import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { grindTiles, isCorrect } from 'lib/tile/GameLogic';
import * as TileActions from 'store/modules/tile';

import GameBoard from 'components/game/tile/GameBoard';

const GameBoardContainer = () => {
  const [moveX, setMoveX] = useState(0);
  const [moveY, setMoveY] = useState(0);
  const { tileArray, answerArray, isFocus, focusPos } 
    = useSelector(({ tile }) => tile);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(TileActions.initTiles());
  }

  useEffect(() => {
    let newTileArray = tileArray.map((tileRow) => {
      return tileRow.slice();
    });
    newTileArray = grindTiles(newTileArray);

    if (isCorrect(newTileArray, answerArray)) {
      console.log('game win');
    }
  }, [tileArray, answerArray]);

  const handleDragStart = (event, x, y) => {
    if (!isFocus)
      dispatch(TileActions.focusTile({actionX:x, actionY:y}));

    // code for firefox... maybe
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/html', event.target); 

    // I don't know why I have to make as this way,
    // but chrome only works with this
    let dragTile = event.target;
    const HideDraggedTile = (target) => {
      target.style.visibility = 'hidden';
    }
    setTimeout(() => HideDraggedTile(dragTile), 0);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDragEnter = (x, y) => {
    if (focusPos.x === x && focusPos.y !== y) {
      setMoveX(0);
      setMoveY(focusPos.y - y);
    }
    else if (focusPos.x !== x && focusPos.y === y) {
      setMoveX(focusPos.x - x);
      setMoveY(0);
    }
    else {
      setMoveX(0);
      setMoveY(0);
    }
  };
  const handleDragEnd = (event, x, y) => {
    console.log(moveX, moveY);
    if (moveY > 0 && !moveX) {
      // TODO: increase moveCount here?
      for (let i=0; i<moveY; i++)
        dispatch(TileActions.upTiles());
    }
    else if (moveY < 0 && !moveX) {
      for (let i=0; i<Math.abs(moveY); i++)
        dispatch(TileActions.downTiles());
    }
    else if (moveX > 0 && !moveY) {
      for (let i=0; i<moveX; i++)
        dispatch(TileActions.leftTiles());
    }
    else if (moveX < 0 && !moveY) {
      for (let i=0; i<Math.abs(moveX); i++)      
        dispatch(TileActions.rightTiles());
    }

    setMoveX(0);
    setMoveY(0);
    
    event.target.style.visibility = 'visible';
    dispatch(TileActions.unfocusTile());
  };

  // TODO: try simple GameBoard component to render answerArray 
  //       and add play functions to make game 
  return (
    <>
      <GameBoard
        board={tileArray}
        handleReset={handleReset}
        focusPos={focusPos}

        handleDragStart={handleDragStart}
        handleDragOver={handleDragOver}
        handleDragEnter={handleDragEnter}
        handleDragEnd={handleDragEnd}
      />
      <GameBoard
        board={answerArray}
        focusPos={focusPos}
      />
    </>
  );
}

export default GameBoardContainer;