export const SET_VISITOR = 'SET_VISITOR'
export const SET_VARS = 'SET_VARS'
export const SET_BANNERS = 'SET_BANNERS'
export const SET_LISTS = 'SET_LISTS'
export const APPEND_LISTS = 'APPEND_LISTS'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const UPDATE_LIST_ITEM = 'UPDATE_LIST_ITEM'
export const SET_OBJS = 'SET_OBJS'
export const APPEND_OBJS = 'APPEND_OBJS'

function setVisitor (visitor) {
  return {
    type: SET_VISITOR,
    visitor: visitor
  }
}

function logout () {
  return {
    type: SET_VISITOR,
    visitor: {
      isLogin: false
    }
  }
}

function setVars (key, value) {
  return {
    type: SET_VARS,
    key,
    value
  }
}

function setBanners (bannerType, banners) {
  return {
    type: SET_BANNERS,
    bannerType,
    banners
  }
}

function setLists (key, list) {
  return {
    type: SET_LISTS,
    key,
    list
  }
}

function appendLists (key, list) {
  return {
    type: APPEND_LISTS,
    key,
    list
  }
}

function updateListItem (key, index, item) {
  return {
    type: UPDATE_LIST_ITEM,
    key,
    index,
    item
  }
}

function removeItem (key, index) {
  return {
    type: REMOVE_ITEM,
    key,
    index
  }
}

function setObjs (key, value) {
  return {
    type: SET_OBJS,
    key,
    value
  }
}

function appendObjs (key, objKey, objValue) {
  return {
    type: APPEND_OBJS,
    key,
    value: (typeof objKey === 'object') ? objKey : _.object([[objKey, objValue]])
  }
}

function mapSet (...keyPath) {
  let value = keyPath.pop()
  return {
    type: 'MAP_SET',
    keyPath,
    value
  }
}

function mapDelete (...keyPath) {
  return {
    type: 'MAP_DELETE',
    keyPath
  }
}

let actions = {
  setVisitor,
  logout,
  setVars,
  setBanners,
  setLists,
  appendLists,
  updateListItem,
  removeItem,
  setObjs,
  appendObjs,
  mapSet,
  mapDelete
}

export {
  actions as default,
  setVisitor,
  logout,
  setVars,
  setBanners,
  setLists,
  appendLists,
  updateListItem,
  removeItem,
  setObjs,
  appendObjs,
  mapSet,
  mapDelete
}
