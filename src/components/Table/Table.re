[@react.component]
let make = (~header, ~data) => {
  <table className="table is-fullwidth is-bordered is-hoverable tss-Table">
    header
    <tbody>
      {if (Array.length(data) > 0) {
         data
         |> Array.map(
              (item: RealtimeQueryTableItem.realtimeQueryTableItemProps) =>
              <RealtimeQueryTableItem
                key={string_of_int(item->RealtimeQueryTableItem.idGet)}
                item
              />
            )
         |> React.array;
       } else {
         React.null;
       }}
    </tbody>
  </table>;
};
