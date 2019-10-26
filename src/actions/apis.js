import * as actions from './'
import * as realtimeAPI from '../api/realtime'

function getRealtimeTrending(params) {
  return dispatch => {
    realtimeAPI.getRealtimeTrending(params).then(resp => {
      const data = resp.data.results

      dispatch(actions.realtimeTrendingGet(data))
    })
  }
}

function getRealtimeQuery(params) {
  return dispatch => {
    realtimeAPI.getRealtimeQuery(params).then(resp => {
      const data = resp.data.results

      dispatch(actions.realtimeQueryGet(data))
    })
  }
}

export { getRealtimeTrending, getRealtimeQuery }
