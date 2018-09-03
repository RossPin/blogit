const initalState = {title: '',text: ''}

export default function currentBlog(state = initalState, action){
    switch(action.type) {
        case 'SET_BLOG':
            return action.blog       
        default:
            return state; 
    }
}