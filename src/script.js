import store from "./redux";
import { changeCount } from "./redux/count";
import { setYouTubeTitle, upvoteVideo,  downVoteVideo, updateViewCount } from "./redux/youTubeVideo";
import { addFavoriteThing, removeFavoriteThing } from "./redux/favoriteThings";

store.dispatch(setYouTubeTitle("New marilyn manson shocking video clip out !"));
store.dispatch(changeCount());
store.dispatch(upvoteVideo());
store.dispatch(downVoteVideo());
store.dispatch(updateViewCount());
store.dispatch(addFavoriteThing("Music"));
store.dispatch(addFavoriteThing("Gaming"));
store.dispatch(removeFavoriteThing("music"));