// how the data layer looks initially, when we havent added anything.
export const initialState = {
    user: null,
};

// push information into the data layer
export const actionTypes = {
    SET_USER : "SET_USER",
}

const reducer = (state, action) =>{
    console.log(action);
    switch (action.type) {
        // if the action is SET_USER type, then we return the existing state as it is but the user is updated to "action.user".
        case actionTypes.SET_USER:
            return{
                ...state,
                user: action.user,
            };
        // if not of SET_USER, then we fall back to teh original state as it is.
        default:
            return state;
    }
};

export default reducer;
