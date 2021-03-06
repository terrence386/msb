import * as types from './types'
import getters from './getters'

const state = {
  direction: 'forward'
}

const mutations = {
  [types.UPDATE_DIRECTION] (state, payload) {
    state.direction = payload.direction
  }
}

export default {
  state,
  mutations,
  getters
}
