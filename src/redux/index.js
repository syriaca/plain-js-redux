const redux = require("redux");
const { combineReducers, createStore } = redux;

// import the separate reducers
import countReducer from "./count";
import favoriteThingsReducer from "./favoriteThings";
import youTubeVideoReducer from "./youTubeVideo";

// combine the reducers into a single state tree
const rootReducer = combineReducers({
    count: countReducer,
    favoriteThings: favoriteThingsReducer,
    youTubeVideo: youTubeVideoReducer
})

// create createStore
const store = redux.createStore(rootReducer);
store.subscribe(() => { console.log(store.getState()) });

// export store
export default store;