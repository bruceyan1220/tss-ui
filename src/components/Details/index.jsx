import React from 'react'

const Details = props => {
  let handleClose = () => {
    const app = document.querySelector('.tss-App')
    const details = document.querySelector('.tss-Details')

    app.style.transform = ''
    details.style.transform = 'translateX(100vw)'
  }

  return (
    <article className="panel tss-Details">
      <div className="panel-heading tss-panel-heading">
        <div className="title is-4">SQL Details</div>
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
      <div className="panel-block"></div>
    </article>
  )
}

export default Details
