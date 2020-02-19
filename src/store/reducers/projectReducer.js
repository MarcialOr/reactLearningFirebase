/* eslint-disable default-case */
const initState = {
    projects: [
        {id: 1, title: 'help me find peach', content: 'blah lahb blasjka'},
        {id: 2, title: 'know what', content: 'just looking for help, because i need it'},
        {id: 3, title: 'Jesus is the living God', content: 'blah lahb blasjka'},
    ]
}

export const projectReducer = (state = initState, action) => {
    switch(action.type){
        case 'CREATE_PROJECT':
            console.log('Created project', action.project);
    }
    return state;
}

// export default projectReducer;