import { getRealtimeQuery, getRealtimeTrending } from '../../actions/apis'

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
    switch (props.type) {
      case 'realtime':
        props.handleGetRealtimeTrending(params)
        props.handleGetRealtimeQuery(params)
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
          <div className="field-label">
            <label className="label">Date</label>
          </div>
          <DateTimePicker handlePickCallback={handlePickCallback} />
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
  handleGetRealtimeQuery: params => dispatch(getRealtimeQuery(params))
})

export default connect(
  null,
  mapDispatchToProps
)(TssInputGroup)
