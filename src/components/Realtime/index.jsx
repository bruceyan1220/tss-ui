import React from 'react'
import TssInputGroup from '../TssInputGroup'
import mockData from './mockData'
import AreaChart from '../AreaChart'
import { make as Table } from '../Table/Table.bs'
import { make as RealtimeQueryTableHeader } from '../Table/RealtimeQueryTableHeader.bs'
import { connect } from 'react-redux'

const Realtime = props => (
  <div className="tss-Realtime">
    <TssInputGroup type="realtime" />
    <article className="panel panel-trending">
      <div className="panel-heading tss-panel-heading">
        <div className="title is-4">Realtime Trending</div>
        <i
          style={{
            marginBottom: '1rem',
            cursor: 'pointer'
          }}
          className="fas fa-circle-notch fa-spin has-text-primary"
        />
      </div>
      <AreaChart data={props.trendingData} />
    </article>
    <article className="panel panel-query">
      <div className="panel-heading tss-panel-heading">
        <div className="title is-4">Realtime Query</div>
      </div>
      <Table header={<RealtimeQueryTableHeader />} data={mockData} />
    </article>
  </div>
)

const mapStateToProps = state => ({
  trendingData: state.realtimeTrending.map(d => ({
    date: new Date(d.day_time),
    count: d.counter
  }))
})

export default connect(
  mapStateToProps,
  null
)(Realtime)
