const ADD_AUTHOR = 'ADD_AUTHOR';
const ADD_POST = 'ADD_POST'

function reducer(store={authors: [], posts: []}, action={type: ''}) {
  switch(action.type) {
    case ADD_AUTHOR:
      let author = Object.assign({id: store.authors.length}, action.payload)
      let authors = store.authors.concat(author)
      return Object.assign({}, {authors: authors}, {posts: store.posts})
    case ADD_POST:
      let post = Object.assign({id: store.posts.length}, action.payload)
      let posts = store.posts.concat(post)
      return Object.assign({}, {authors: store.authors}, {posts: posts})
    default:
      return store
  }
}

export default reducer
