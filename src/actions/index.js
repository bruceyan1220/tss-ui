import * as types from './types'

export const realtimeTrendingGet = data => ({
  type: types.REALTIME_TRENDING_GET,
  data
})

export const realtimeQueryGet = data => ({
  type: types.REALTIME_QUERY_GET,
  data
})

export const realtimeClusterSet = cluster => ({
  type: types.REALTIME_CLUSTER_SET,
  cluster
})

export const realtimeInstanceSet = instance => ({
  type: types.REALTIME_INSTANCE_SET,
  instance
})

export const reportGet = data => ({
  type: types.REPORT_GET,
  data
})
