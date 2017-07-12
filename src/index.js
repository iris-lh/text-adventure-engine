const redux  = require('redux')
const prompt = require('prompt')
const _      = require('lodash')

const reducer    = require('./reducers/index.js')
const loadAssets = require('./load-assets')

const store  = redux.createStore(reducer)
const assets = loadAssets()

const world = {
  rooms: assets.rooms,
  player: {
    location: 'large-room',
    inventory: []
  }
}

function movePlayer(dir) {
  const currentLocation = assets.rooms[world.player.location]
  const exit = currentLocation.exits[dir]
  world.player.location = exit.destination
}

function addItem(item) {
  world.player.inventory.push(item)
}

function searchKeywords(term) {
  _.forOwn(assets.items, item => {
    if (item.keywords.includes(term)) {
      console.log(`match for ${term} found: ${item.id} (${item.name})`);
    }
  })
}

// console.log(store.getState());
store.dispatch({type: 'INC'})
// console.log(store.getState());
store.dispatch({type: 'DEC'})
