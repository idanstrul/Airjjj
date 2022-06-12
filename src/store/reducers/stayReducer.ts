const INITIAL_STATE: State = {
    stays: [] //Should startwith null
}

interface State {
    stays: Stay[]
}

interface Stay {
    _id: String
}

interface LoadStaysAction {
    type: "LOAD_STAYS"
    stays: Stay[]
}

interface AddStayAction {
    type: "ADD_STAY",
    stay: Stay //without ID
}

interface RemoveStayAction {
    type: "REMOVE_STAY",
    stayId: String
}

interface UpdateStayAction {
    type: "UPDATE_STAY",
    stay: Stay
}

interface SetFilterByAction {
    type: "SET_FILTER_BY",
    filterBy: any // should be Filter
}

type Action = LoadStaysAction | AddStayAction | RemoveStayAction | UpdateStayAction | SetFilterByAction

export function styReducer(state: State = INITIAL_STATE, action: Action) {
    switch (action.type) {
        case 'LOAD_STAYS':
            return {
                ...state,
                stays: action.stays
            }
        case 'ADD_STAY':
            return {
                ...state,
                stays: [...state.stays, action.stay] //state.stays.filter(s => s._id !== action.stayId)
            }
        case 'REMOVE_STAY':
            return {
                ...state,
                stays: state.stays.filter(s => s._id !== action.stayId)
            }
        case 'UPDATE_STAY':
            return {
                ...state,
                stays: state.stays.map(s => (s._id === action.stay._id) ? action.stay : s)
            }
        case 'SET_FILTER_BY':
            return {
                ...state,
                filterBy: JSON.parse(JSON.stringify(action.filterBy))
            }

        default:
            return state;
    }
}