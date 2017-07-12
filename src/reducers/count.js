const Immutable = require('immutable')

const initialState = 0

module.exports = (state = initialState, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'Dec':
      return state - 1
    default:
      return state
  }
}
