import * as types from '../actions/types'

const reducer = (
  state = {
    realtimeTrending: [],
    realtimeQuery: [],
    realtimeCluster: '',
    realtimeInstance: '',
    report: []
  },
  action
) => {
  switch (action.type) {
    case types.REALTIME_TRENDING_GET:
      return { ...state, realtimeTrending: action.data }
    case types.REALTIME_QUERY_GET:
      return { ...state, realtimeQuery: action.data }
    case types.REALTIME_CLUSTER_SET:
      return { ...state, realtimeCluster: action.cluster }
    case types.REALTIME_INSTANCE_SET:
      return { ...state, realtimeInstance: action.instance }
    case types.REPORT_GET:
      return { ...state, report: action.data }
    default:
      return state
  }
}

export default reducer
