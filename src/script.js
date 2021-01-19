const redux = require("redux");
const store = redux.createStore(reducer);
store.subscribe(() => { console.log(store.getState()) });

// store.dispatch(setYouTubeTitle("Learn Redux"))
// store.dispatch(upvoteVideo())
// store.dispatch(upvoteVideo())
// store.dispatch(upvoteVideo())
// store.dispatch(downVoteVideo())
// store.dispatch(updateViewCount(150000000))
