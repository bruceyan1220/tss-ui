import * as types from './types'

export const realtimeTrendingGet = data => ({
  type: types.REALTIME_TRENDING_GET,
  data
})

export const realtimeQueryGet = data => ({
  type: types.REALTIME_QUERY_GET,
  data
})
