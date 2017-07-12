const redux     = require('redux')

const count = require('./count')
const world = require('./world')

module.exports = redux.combineReducers({
  count,
  world
})
