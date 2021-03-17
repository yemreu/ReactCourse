import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavLink,
  NavItem
} from "reactstrap";
import {Link} from "react-router-dom";

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <div>
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Your Cart
          </DropdownToggle>
          <DropdownMenu right>
            {this.props.cart.map((cartItem) => (
              <DropdownItem key={cartItem.id}>
                <Badge color="danger" onClick={() => this.props.removeFromCart(cartItem.product)}>X</Badge>
                {cartItem.product.productName}
                <Badge color="success">{cartItem.quantity}</Badge>
              </DropdownItem>
            ))}
            <DropdownItem divider />
            <DropdownItem><Link to="cart">Go to cart</Link></DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    );
  }

  renderEmptyCart(){
      return (<NavItem>
          <NavLink>Empty Cart</NavLink>
      </NavItem>);
  }

  render() {
    return (<div>{this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}</div>);
  }
}
