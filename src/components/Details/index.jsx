import React from 'react'
import AreaChart from '../AreaChart'
import { connect } from 'react-redux'

const Details = props => {
  let handleClose = () => {
    const app = document.querySelector('.tss-App')
    const details = document.querySelector('.tss-Details')

    app.style.transform = ''
    details.style.transform = 'translateX(-100vw)'
  }

  return (
    <article className="panel tss-Details">
      <div className="panel-heading tss-panel-heading">
        <div className="title is-4">SQL Info</div>
        <div onClick={handleClose}>
          <i
            style={{
              marginBottom: '1rem',
              cursor: 'pointer'
            }}
            className="fas fa-times-circle"
          />
        </div>
      </div>
      <div className="panel-block">
        <div className="title is-5">Trending</div>
      </div>
      <div className="panel-block">
        <AreaChart data={props.singleSqlTrending} />
      </div>
      <div className="panel-block sql-info">
        {props.sqlInfo &&
          props.sqlInfo.map(([k, v]) => {
            if (k === 'plan') {
              v = 1
            }

            return (
              <div key={k}>
                <div className="title is-6">{k}</div>
                <div>{v}</div>
              </div>
            )
          })}
      </div>
    </article>
  )
}

const mapStateToProps = state => ({
  singleSqlTrending: state.singleSqlTrending.map(d => ({
    date: new Date(d.day_time),
    count: d.counter
  })),
  sqlInfo: state.sqlInfo
})

export default connect(
  mapStateToProps,
  null
)(Details)
