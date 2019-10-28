import {
    FETCH_ALL,
    ADD_YEAR,
    DELETE_YEAR,

} from '../actions/types'
const initialState = {
    allocations: [],
    loading: true
}


export default (state = initialState, action) => {

    switch (action.type) {
        case FETCH_ALL:
            return {
                ...state,
                allocations: action.payload,
                    loading: false
            }

            case ADD_YEAR:
                return {
                    ...state,
                    allocations: [action.payload, ...state.allocations],
                        loading: false
                }
                case DELETE_YEAR:
                    return {
                        ...state,
                        allocations: state.allocations.filter(allo => allo._id !== action.payload),

                    }
                    default:
                        return state
    }

}