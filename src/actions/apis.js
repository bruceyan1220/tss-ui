import * as actions from './'
import * as realtimeAPI from '../api/realtime'
import * as reportAPI from '../api/report'

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

function getReport(params) {
  return dispatch => {
    reportAPI.getReport(params).then(resp => {
      const data = resp.data.results

      dispatch(actions.reportGet(data))
    })
  }
}

export { getRealtimeTrending, getRealtimeQuery, getReport }
