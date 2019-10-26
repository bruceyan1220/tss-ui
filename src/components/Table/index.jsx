import React from 'react'
import ReactTooltip from 'react-tooltip'

const Table = props => {
  const Header = props.header
  const Item = props.item

  return (
    <>
      <div className="tss-TableWrapper">
        <table className="table is-fullwidth is-bordered is-hoverable tss-Table">
          <Header item={props.data.length > 0 ? props.data[0] : {}} />
          <tbody>
            {props.data.length > 0 &&
              props.data.map((item, i) => <Item key={item.query_id + item.sql_id + i} item={item} />)}
          </tbody>
        </table>
      </div>
      {props.data.length === 0 && (
        <div className="subtitle has-text-centered table-no-data">No data available in table</div>
      )}
      {props.data.length > 0 && (
        <ReactTooltip className="tss-Tooltip" id="sqlText" getContent={datatip => <div>{datatip}</div>} />
      )}
    </>
  )
}

export default Table
