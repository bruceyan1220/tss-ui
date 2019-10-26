import * as types from '../actions/types'

const reducer = (
  state = {
    realtimeTrending: [],
    realtimeQuery: []
  },
  action
) => {
  switch (action.type) {
    case types.REALTIME_TRENDING_GET:
      return { ...state, realtimeTrending: action.data }
    case types.REALTIME_QUERY_GET:
      return { ...state, realtimeQuery: action.data }
    default:
      return state
  }
}

export default reducer
