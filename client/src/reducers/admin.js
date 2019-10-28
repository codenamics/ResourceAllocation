import { FETCH_ALL_ADMIN, FETCH_ALL_YEARS } from "../actions/types";
const initialState = {
    users: [],
    loading: true,
    years: [],
    data:[]
};

export default (state = initialState, action) => {

    switch (action.type) {

        case FETCH_ALL_ADMIN:
            return {
                ...state,
                users: action.payload,
                loading: false
            };

        case FETCH_ALL_YEARS:
            return {
                ...state,
                years: action.payload,
                loading: false
            };
            
        default:
            return state;
    }
};
