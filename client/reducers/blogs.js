const initalState = []

export default function blog(state = initialState, action) {
    switch(action.type) {
        case 'ADD_BLOG':
            return action.blog        
        default:
            return state; 
    }
}