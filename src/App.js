import BlogDetails from "./Components/BlogDetails";
import Create from "./Components/Create";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./Components/NotFound";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path exact="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route>
              <NotFound path="*" />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
