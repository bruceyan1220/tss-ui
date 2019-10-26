[@react.component]
let make = () => {
  <thead>
    <tr>
      <th> {React.string("Cluster")} </th>
      <th> {React.string("Instance")} </th>
      <th> {React.string("Query Id")} </th>
      <th> {React.string("SQL Id")} </th>
      <th> {React.string("SQL Text")} </th>
    </tr>
  </thead>;
};
