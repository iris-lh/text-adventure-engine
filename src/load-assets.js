const jetpack = require('fs-jetpack')
const yaml    = require('js-yaml')

const assetsPath = __dirname + '/assets'
const roomsPath = assetsPath + '/rooms'
const itemsPath = assetsPath + '/items'
const npcsPath = assetsPath + '/npcs'


function loadRooms() {
  const rooms = {}
  const roomFiles = jetpack.list(roomsPath)
  roomFiles.forEach(roomFile => {
    const roomPath = `${roomsPath}/${roomFile}`
    const yamlContents = jetpack.read(roomPath)
    const room = yaml.safeLoad(yamlContents)
    rooms[room.id] = room
  })
  return rooms
}

function loadItems() {
  const items = {}
  const itemFiles = jetpack.list(itemsPath)
  itemFiles.forEach(itemFile => {
    const itemPath = `${itemsPath}/${itemFile}`
    const yamlContents = jetpack.read(itemPath)
    const item = yaml.safeLoad(yamlContents)
    items[item.id] = item
  })
  return items
}

function loadNpcs() {
  const npcs = {}
  const npcFiles = jetpack.list(npcsPath)
  npcFiles.forEach(npcFile => {
    const npcPath = `${npcsPath}/${npcFile}`
    const yamlContents = jetpack.read(npcPath)
    const npc = yaml.safeLoad(yamlContents)
    npcs[npc.id] = npc
  })
  return npcs
}

function loadAssets() {
  const assets = {
    rooms: loadRooms(),
    items: loadItems(),
    npcs: loadNpcs()
  }
  return assets
}

module.exports = loadAssets
