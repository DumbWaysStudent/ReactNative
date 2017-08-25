import {createStore, applyMiddleware} from 'redux';

const reducer = function(state, action){
  if(action.type == "INC"){
    state = state + action.payload;
  }

  if(action.type == "DEC"){
    state = state - action.payload;
  }

  if(action.type == "ERR"){
    throw new Error('ERRORRRR');
  }

  return state;

}

const logger = (store)=>(next)=>(action)=>{
  console.log('logger middleware called');
  next(action);
}

const error = (store)=>(next)=>(action)=>{
  try {
    next(action);
  } catch (e) {
    console.log('ERROR MIDDLEWARE CALLED');
  }
}

const middleware = applyMiddleware(logger);

const store = createStore(reducer, 0, middleware);

store.subscribe(()=>{
  console.log('current state',  store.getState());
});

store.dispatch({type: "INC",  payload: 1});
store.dispatch({type: "ERR"});
store.dispatch({type: "INC",  payload: 1});
