import React from 'react'

const TableHeader = props => {
  const item = props.item

  return (
    <thead className="tss-TableHeader">
      <tr>
        <th>Cluster</th>
        {item.inst_name && <th>Instance</th>}
        <th>DB</th>
        {item.count && <th>Count</th>}
        <th onClick={props.handleSortTable((a, b) => a.sql_id - b.sql_id, (a, b) => b.sql_id - a.sql_id)}>
          <i className="fas fa-sort has-text-primary" /> SQL Id
        </th>
        <th>SQL Text</th>
        <th>Datetime</th>
        <th onClick={props.handleSortTable((a, b) => a.query_time - b.query_time, (a, b) => b.query_time - a.query_time)}>
          <i className="fas fa-sort has-text-primary" /> Query Time
        </th>
        <th>Process Keys</th>
        <th onClick={props.handleSortTable((a, b) => a.process_time - b.process_time, (a, b) => b.process_time - a.process_time)}>
          <i className="fas fa-sort has-text-primary" /> Process Time
        </th>
        <th>Commit Time</th>
        <th>Total Keys</th>
        <th>Write Keys</th>
        <th onClick={props.handleSortTable((a, b) => a.mem_max - b.mem_max, (a, b) => b.mem_max - a.mem_max)}>
          <i className="fas fa-sort has-text-primary" /> Max Memory
        </th>
      </tr>
    </thead>
  )
}

export default TableHeader
