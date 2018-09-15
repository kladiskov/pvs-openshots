//reducer takes two things
// 1. information about what happened (action)
//2. copy of current state

function posts(state = [], action ) {
    console.log(state, action);
    return state;
}

export default posts;