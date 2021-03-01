export default (state = [], action) => {
    switch (action.type){
        case 'FETCH_POSTS':
        return action.payload;
    default:
        console.log(state);
        console.log(action);
    return state;
}};