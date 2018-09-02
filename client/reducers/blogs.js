const initalState = []

export default function blog(state = initalState, action) {
    switch(action.type) {
        case 'UPDATE_BLOGS':
            return action.blogs        
        default:
            return state; 
    }
}