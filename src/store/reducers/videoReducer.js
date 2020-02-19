const initState = {
    videos: [
        {id: 1, title: 'https://www.youtube.com/embed/sh6hZKt-jh0', content: 'blah lahb blasjka'},
        {id: 2, title: 'https://www.youtube.com/embed/es34Nr2JovU', content: 'just looking for help, because i need it'},
        {id: 3, title: 'https://www.youtube.com/embed/6gO9rCFJ1wk', content: 'blah lahb blasjka'},
        {id: 4, title: 'https://www.youtube.com/embed/es34Nr2JovU', content: 'just looking for help, because i need it'},
        {id: 5, title: 'https://www.youtube.com/embed/6gO9rCFJ1wk', content: 'blah lahb blasjka'},
    ]
}

export const videoReducer = (state = initState, action) => {
    return state;
}

// export default projectReducer;