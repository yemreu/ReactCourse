import { Container } from "reactstrap";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Switch,Route} from "react-router-dom";
import CartDetail from "../cart/CartDetail";
import AddOrUpdateProduct from "../products/AddOrUpdateProduct";
import NotFound from "../common/NotFound";

function App() {
  return (
    <Container>
      <Navi/>
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route exact path="/products" component={Dashboard}/>
        <Route exact path="/saveproduct/:productId" component={AddOrUpdateProduct}/>
        <Route path="/saveproduct" component={AddOrUpdateProduct}/>
        <Route exact path="/cart" component={CartDetail}/>
        <Route component={NotFound}/>
      </Switch>
    </Container>
  );
}

export default App;
