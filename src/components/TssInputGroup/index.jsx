import { getRealtimeQuery, getRealtimeTrending, getReport } from '../../actions/apis'
import { realtimeClusterSet, realtimeInstanceSet } from '../../actions'

import DateTimePicker from '../DateTimePicker'
import React, { useState } from 'react'
import { connect } from 'react-redux'

const TssInputGroup = props => {
  const [params, setParams] = useState({
    cluster: '',
    instance: '',
    start: '',
    end: ''
  })

  const handleInputChange = type => e => {
    setParams({ ...params, [type]: e.target.value })
  }

  const handleDifferentGet = () => {
    props.handleSetRealtimeCluster(params.cluster)
    props.handleSetRealtimeInstance(params.instance)

    switch (props.type) {
      case 'realtime':
        props.handleGetRealtimeTrending(params)
        props.handleGetRealtimeQuery(params)
        break
      case 'report':
        props.handleGetReport(params)
        break
      default:
        return
    }
  }

  const handlePickCallback = (start, end) => {
    setParams({ ...params, start, end })
  }

  return (
    <article className="panel tss-TssInputGroup">
      <div className="panel-block">
        <div className="field is-horizontal">
          <div className="field-label">
            <label className="label">Cluster</label>
          </div>
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="Type a cluster name"
                onChange={handleInputChange('cluster')}
              />
            </p>
          </div>
          <div className="field-label">
            <label className="label">Instance</label>
          </div>
          <div className="field">
            <p className="control">
              <input
                className="input"
                type="text"
                placeholder="Type a instance name"
                onChange={handleInputChange('instance')}
              />
            </p>
          </div>
          {props.type === 'report' && (
            <div className="field-label">
              <label className="label">Date</label>
            </div>
          )}
          {props.type === 'report' && <DateTimePicker handlePickCallback={handlePickCallback} />}
          <div className="field field-submit-button">
            <div className="control">
              <button className="button is-primary" onClick={handleDifferentGet}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

const mapDispatchToProps = dispatch => ({
  handleGetRealtimeTrending: params => dispatch(getRealtimeTrending(params)),
  handleGetRealtimeQuery: params => dispatch(getRealtimeQuery(params)),
  handleSetRealtimeCluster: cluster => dispatch(realtimeClusterSet(cluster)),
  handleSetRealtimeInstance: instance => dispatch(realtimeInstanceSet(instance)),
  handleGetReport: params => dispatch(getReport(params))
})

export default connect(
  null,
  mapDispatchToProps
)(TssInputGroup)
