export function setYouTubeTitle(title) {
    return {
        type: "SET_YOUTUBE_TITLE",
        payload: title
    }
}

export function upvoteVideo() {
    return {
        type: "UPVOTE_VIDEO"
    }
}

export function downVoteVideo() {
    return {
        type: "DOWNVOTE_VIDEO"
    }
}

export function updateViewCount(view = 1) {
    return {
        type: "UPDATE_VIEW_COUNT",
        payload: view
    }
}

const initialState = {
    title: "",
    viewCount: 0,
    votes: {
        up: 0,
        down: 0
    }
}

export default function youTubeVideoReducer(youTubeVideo = initialState, action) {
    switch (action.type) {
        case "SET_YOUTUBE_TITLE":
            return {
                ...youTubeVideo,
                title: action.payload
            }
        case "UPVOTE_VIDEO":
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    up: youTubeVideo.votes.up + 1
                }
            }
        case "DOWNVOTE_VIDEO":
            return {
                ...youTubeVideo,
                votes: {
                    ...youTubeVideo.votes,
                    down: youTubeVideo.votes.down - 1
                }
            }
        case "UPDATE_VIEW_COUNT":
            return {
                ...youTubeVideo,
                viewCount: youTubeVideo.viewCount + action.payload
            }
        default:
            return youTubeVideo;
    }
}