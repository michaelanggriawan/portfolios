export const form = (request) => {
    return(dispatch, getState,{ getFirebase, getFirestore} )=>{
        // make asynch call to databse
        const firestore = getFirestore()
        firestore.collection('message').add({
            ...request,
        }).then(()=> {
            dispatch({ type: 'FORM', request})
        }).catch((err)=> {
            dispatch({ type: 'FORM_ERROR', err})
        })
    }
};