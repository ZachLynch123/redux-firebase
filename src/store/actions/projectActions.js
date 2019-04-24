export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async call to db
        // pausing dispatch
        dispatch({ type: 'CREATE_PROJECT', project })
    }
};