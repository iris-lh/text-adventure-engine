const Immutable = require('immutable')

const initialState = new Immutable.Map({
  location: '',
  inventory: []
})

module.exports = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
