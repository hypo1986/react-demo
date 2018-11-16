'use strict'
var actions = require('../actions')
module.exports = function (state = null, action = {}) {
  if (action.type === actions.SET_VISITOR) {
    return action.visitor
  }
  return state
}
