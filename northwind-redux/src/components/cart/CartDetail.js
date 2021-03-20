import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import alertify from "alertifyjs";

class CartDetail extends Component {
  removeFromCart = (product) => {
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName +" sepetten silindi.",2);
  }

  renderCart() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <td>{cartItem.product.id}</td>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() =>
                    this.removeFromCart(cartItem.product)
                  }
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }

  render() {
    return <div>{this.renderCart()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cartReducer,
  };
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            removeFromCart: bindActionCreators(cartActions.removeFromCart,dispatch)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartDetail);