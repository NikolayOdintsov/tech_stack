export default (state = null, action) => {  //if 'state' is undefined set it to 'null'
    // console.log('action: ', action);
    switch (action.type) {
        case 'select_library':
            return action.payload;
        default:
            return state;
    }
};
//reducers cannot return 'undefined'!!!!
