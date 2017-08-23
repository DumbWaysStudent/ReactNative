import {createStore, combineReducers} from 'redux';

//REDUCER
const heroesReducer = function(state={}, action){
  switch (action.type) {
    case "SET_NAME":
      state = {...state, name: action.payload};
      break;
    case "SET_ROLE":
      state = {...state, role: action.payload};
      break;
    default:
  }

  return state;
}

const skillsReducer = function(state={}, action){
  return state;
}

const reducers = combineReducers({
  heroes: heroesReducer,
  skills: skillsReducer
});

//STORE
const store = createStore(reducers);

//SUBSCRIPTION
store.subscribe(()=>{
  console.log('store changed',  store.getState());
})

//DISPATCH
store.dispatch({type: "SET_NAME", payload: "Eudora"});
store.dispatch({type: "SET_ROLE", payload: "Mage"});
