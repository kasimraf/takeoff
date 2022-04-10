import {Types} from "../../action-types/action-types";

const initialState = {
    authStatus: false,
    user: []
};

export const user = (state = initialState, action) => {
    switch (action.type) {
        case Types.AUTH_TRUE: {
            return {
                ...state,
                authStatus: true
            }
        }
        case Types.ClEAR_ALL_STATE: {
            return initialState
        }
        default: {
            return state
        }
    }
}