type state = {loading: bool};

type action =
  | SetLoading(bool);

let initialState = {loading: false};

let reducer = (_, action) => {
  switch (action) {
  | SetLoading(bool) => {loading: bool}
  };
};

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  let (state, _) = React.useReducer(reducer, initialState);

  let show =
    switch (url.path) {
    | [] => <Realtime />
    | ["report"] => <Report />
    | _ => <Realtime />
    };

  <div className="container tss-Container">
    {state.loading ? <Loading /> : React.null}
    show
  </div>;
};
