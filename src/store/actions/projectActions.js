export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to db
        // pausing dispatch
        dispatch({ type: 'CREATE_PROJECT', project })
    }
};