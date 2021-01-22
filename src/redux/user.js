export function setUserDetails(user) { 
    return {
        type: "SET_USER_DETAILS",
        payload: user
    }
}

const initialState = {
    firstName: "",
    lastName: "",
    id: "",
    email: ""
}

export default function userReducer(user = initialState, action) {
    switch (action.type) {
        case "SET_USER_DETAILS":
            return {
                ...user,
                firstName: action.payload.firstName ? action.payload.firstName : "anonymous firstName",
                lastName: action.payload.lastName ? action.payload.lastName : "anonymous lastName",
                id: action.payload.id ? action.payload.id : 0,
                email: action.payload.email ? action.payload.email : "anonymous@email.com",
            }
        default:
            return user;
    }
} 