import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import MyClassComponent from "./components/MyClassComponent";
import MyFunctionalComponent from "./components/MyFunctionalComponent";

function App() {
  return (
    <BrowserRouter>
      <h1>This is a React App</h1>
      <p>This is a paragraph</p>
      <Switch>
        <Route exact path="/class" component={MyClassComponent} />
        <Route
          exact
          path="/func"
          component={MyFunctionalComponent}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
