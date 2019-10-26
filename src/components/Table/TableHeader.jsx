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
        <th>SQL Id</th>
        <th>SQL Text</th>
        <th>Datetime</th>
        <th>Query Time</th>
        <th>Process Keys</th>
        <th>Process Time</th>
        <th>Commit Time</th>
        <th>Total Keys</th>
        <th>Write Keys</th>
        <th>Max Memory</th>
      </tr>
    </thead>
  )
}

export default TableHeader
