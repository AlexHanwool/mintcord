import { createAction, handleActions } from 'redux-actions';

// import * as api from 'lib/api';
import { isValidTiles } from 'lib/tile/GameLogic';
import { testTileArray, testAnswerArray } from 'lib/tile/Board';

// action types
const FOCUS_TILE = 'tile/FOCUS_TILE';
const UNFOCUS_TILE = 'tile/UNFOCUS_TILE';
const UP_TILES = 'tile/UP_TILES';
const LEFT_TILES = 'tile/LEFT_TILES';
const DOWN_TILES = 'tile/DOWN_TILES';
const RIGHT_TILES = 'tile/RIGHT_TILES';
const INIT_TILES = 'tile/INIT_TILES';

// not applied yet...
// const MOVE_TILES = 'tile/MOVE_TILES';

// action creators
export const focusTile = createAction(FOCUS_TILE);
export const unfocusTile = createAction(UNFOCUS_TILE);
export const upTiles = createAction(UP_TILES);
export const leftTiles = createAction(LEFT_TILES);
export const downTiles = createAction(DOWN_TILES);
export const rightTiles = createAction(RIGHT_TILES);
export const initTiles = createAction(INIT_TILES);

const initialState = {
  tileArray: testTileArray,
  answerArray: testAnswerArray,
  gameState: '',
  isFocus: false,
  focusPos: {
    x: null,
    y: null
  },
}

// reducer
// TODO: need to improve algorithms...
// TODO: need to combine 4 moves as moveTiles or somewhat great
export default handleActions({
  [FOCUS_TILE]: (state, action) => {
    const { actionX, actionY } = action.payload;
    if (!state.tileArray[actionY][actionX]) return state;
    if (state.isFocus) {
      const { x, y } = state.focusPos;
      if (x === actionX && y === actionY) {
        return {...state, isFocus:false, focusPos:{x:null,y:null}}
      }
    }
    return {...state, isFocus:true, focusPos:{x:actionX,y:actionY}};
  },
  [UNFOCUS_TILE]: (state, action) => {
    return {...state, isFocus:false, focusPos:{x:null,y:null}}
  },
  [UP_TILES]: (state, action) => {
    const { x, y } = state.focusPos;
    let newTileArray = state.tileArray.map((tileRow) => tileRow.slice());

    let count=0;
    let i=y;
    for (i; i>0; i--) {
      if (newTileArray[i][x]) count++;
      else break;
    }

    let temp = newTileArray[y-count][x];
    newTileArray[y-count][x] = newTileArray[y][x];
    newTileArray[y][x] = temp;

    if (!isValidTiles(newTileArray, x, y-1)) {
      console.log('can\'t move');
      return state;
    }

    if (i === 0) {
      const zerofill = new Array(newTileArray[y].length).fill(0);
      newTileArray.unshift(zerofill);
      return { ...state, tileArray: newTileArray }
    }

    return { ...state, tileArray: newTileArray, focusPos:{x:x, y:y-1} };
  },
  [LEFT_TILES]: (state, action) => {
    const { x, y } = state.focusPos;
    
    let newTileArray = state.tileArray.map((tileRow) => tileRow.slice());

    let count=0;
    let i=x;
    for (i; i>0; i--) {
      if (newTileArray[y][i]) count++;
      else break; 
    }
    newTileArray[y] = newTileArray[y].slice(0,x-count).concat(newTileArray[y].slice(x-count,x+1).reverse()).concat(newTileArray[y].slice(x+1));

    if (!isValidTiles(newTileArray, x-1, y)) {
      console.log('can\'t move');
      return state;
    }

    if (i === 0) {
      newTileArray.forEach(newTileRow => {
        newTileRow.unshift(0);
      });
      return { ...state, tileArray: newTileArray };
    }

    return { ...state, tileArray: newTileArray, focusPos:{x:x-1, y:y} }; 
  },
  [DOWN_TILES]: (state, action) => {
    const { x, y } = state.focusPos;
    let newTileArray = state.tileArray.map((tileRow) => tileRow.slice());

    let count=0;
    let i=y;
    for (i; i<newTileArray.length; i++) {
      if (newTileArray[i][x]) count++;
      else break;
    }

    let temp = newTileArray[y+count][x];
    newTileArray[y+count][x] = newTileArray[y][x];
    newTileArray[y][x] = temp;

    if (!isValidTiles(newTileArray, x, y+1)) {
      console.log('can\'t move');
      return state;
    }

    if (i === newTileArray.length-1) {
      const zerofill = new Array(newTileArray[0].length).fill(0);
      newTileArray.push(zerofill);
    }

    return { ...state, tileArray: newTileArray, focusPos:{x:x, y:y+1} };
  },
  [RIGHT_TILES]: (state, action) => {
    const { x, y } = state.focusPos;
    
    let newTileArray = state.tileArray.map((tileRow) => tileRow.slice());

    let count=0;
    let i=x;
    for (i; i<newTileArray[y].length; i++) {
      if (newTileArray[y][i]) count++;
      else break; 
    }
    newTileArray[y] = newTileArray[y].slice(0,x).concat(newTileArray[y].slice(x,x+count+1).reverse()).concat(newTileArray[y].slice(x+count+1));

    if (!isValidTiles(newTileArray, x+1, y)) {
      console.log('can\'t move');
      return state;
    }

    if (i === newTileArray[y].length-1) {
      newTileArray.forEach(newTileRow => {
        newTileRow.push(0);
      })
    }

    return { ...state, tileArray: newTileArray, focusPos:{x:x+1, y:y} }; 
  },
  [INIT_TILES]: (state, action) => {
    return initialState; 
  },
}, initialState);