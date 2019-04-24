const initState = {
    projects: [
        {id: '1', title: 'This is the first project', content: 'some content for first'},
        {id: '2', title: 'The second', content: 'some content for 2nd'},
        {id: '3', title: 'The third', content: 'some content for third'},
    ],
};

const projectReducer = (state = initState, action) => {
    // check action type create read update delete
    // detect create
    switch(action.type) {
        case 'CREATE_PROJECT':
        console.log('created project', action.project);
        break;
        
        default:
        console.log('default');
        
    }

    return state;
}





export default projectReducer;