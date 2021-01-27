import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home'
import Organization from './components/organization'
import Container from "@material-ui/core/Container";

function App() {
  return (
    <Router>
      <Container maxWidth="lg">
        <h1>Bliss 2.0 SPIKE</h1>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/organization/:orgId">
            <Organization />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
