[@bs.deriving abstract]
type realtimeQueryTableItemProps = {
  id: int,
  cluster: string,
  [@bs.as "inst_name"]
  instance: string,
  [@bs.as "query_id"]
  queryId: int,
  [@bs.as "sql_id"]
  sqlId: int,
  [@bs.as "sql_text"]
  sqlText: string,
};

[@react.component]
let make = (~item) => {
  <tr>
    <td> {React.string(item->clusterGet)} </td>
    <td> {React.string(item->instanceGet)} </td>
    <td> {React.string(string_of_int(item->queryIdGet))} </td>
    <td> {React.string(string_of_int(item->sqlIdGet))} </td>
    <td> {React.string(item->sqlTextGet)} </td>
  </tr>;
};
