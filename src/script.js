import store from "./redux";
import { changeCount } from "./redux/count";
import { setYouTubeTitle, upvoteVideo,  downVoteVideo, updateViewCount } from "./redux/youTubeVideo";
import { addFavoriteThing, removeFavoriteThing } from "./redux/favoriteThings";
import { setUserDetails, removeUserDetails } from "./redux/user";

store.dispatch(setUserDetails(
        {
            firstName: "Jean-Yves"
        }
    )
)
store.dispatch(removeUserDetails());