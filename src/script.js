const redux = require("redux");

const initialState = {
    count: 0,
    favoriteThings: [],
    youtubeVideo: {
        title: "",
        viewCount: 0,
        votes: {
            up: 0,
            down: 0
        }
    }
}

function changeCount(amount = 1) {
    return {
        type: "CHANGE_COUNT",
        payload: amount
    }
}

function addFavoriteThing(thing) {
    return {
        type: "ADD_FAVORITE_THING",
        payload: thing
    }
}

function removeFavoriteThing(thing) {
    return {
        type: "REMOVE_FAVORITE_THING",
        payload: thing
    }
}

function setYouTubeTitle(title) {
    return {
        type: "SET_YOUTUBE_TITLE",
        payload: title
    }
}

function upvoteVideo() {
    return {
        type: "UPVOTE_VIDEO"
    }
}

function downVoteVideo() {
    return {
        type: "DOWNVOTE_VIDEO"
    }
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "CHANGE_COUNT":
            return {
                ...state,
                count: state.count + action.payload
            }
        case "ADD_FAVORITE_THING":
            return {
                ...state,
                favoriteThings: [...state.favoriteThings, action.payload]
            }
        case "REMOVE_FAVORITE_THING": {
            const arrCopy = [...state.favoriteThings]
            
            const updatedArr = state.favoriteThings.filter(thing => thing.toLowerCase() !== action.payload.toLowerCase())
            return {
                ...state,
                favoriteThings: updatedArr
            }
        }
        case "SET_YOUTUBE_TITLE":
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    title: action.payload
                }
            }
        case "UPVOTE_VIDEO":
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    votes: {
                        ...state.youtubeVideo.votes,
                        up: state.youtubeVideo.votes.up + 1
                    }
                }
            }
        case "DOWNVOTE_VIDEO":
            return {
                ...state,
                youtubeVideo: {
                    ...state.youtubeVideo,
                    votes: {
                        ...state.youtubeVideo.votes,
                        down: state.youtubeVideo.votes.down - 1
                    }
                }
            }
        default:
            return state
    }
}

const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(setYouTubeTitle("Learn Redux"))
store.dispatch(upvoteVideo())