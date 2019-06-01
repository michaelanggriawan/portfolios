const initState = {
    form: [
        {id:1, name:'Michael Anggriawan', email:'michaelanggriawan@gmail.com',message:'its good'}
    ]
}

const formReducer = (state = initState , action )=> {
    if(action.type === 'FORM')
    {
        console.log('Form', action.request);
        return state;
    }
    else if( action.type === ' FORM_ERROR')
    {
        console.log('Form Error', action.err);
        return state;
    }
    return state;
}

export default formReducer;