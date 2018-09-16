//reducer takes two things
// 1. information about what happened (action)
//2. copy of current state

function posts(state = [], action ) {
    switch(action.type) {
        case 'INCREMENT_LIKES' :
            console.log('increm,enting likes');
            const i = action.index;
            return [
                ...state.slice(0,i),//before the one that needs update
                {...state[i], likes: state[i].likes + 1},//update the middle one.
                ...state.slice(i+1)//after the one that needs update
            ]
        default:
            return state;
    }
}

export default posts;