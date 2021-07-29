import React, { Component } from "react";
import HeadSection from "./Layout/HeadSection";
import SevkConsumer from "../store/context";
export default  class OrdersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrderVisible: true,
    };
    this.toggleOrderList = this.toggleOrderList.bind(this);
  }
  toggleOrderList = () => {
    this.setState({ OrderVisible: !this.state.OrderVisible });
  };
  render() {
    const Mouse_Position = (dispatch, Order, e) => {
      dispatch({
        type: "Mouse_Position",
        payload: { x: e.pageY + "px", y: e.pageX + "px", Order: Order },
      });
    };
    const toggleEdit = (dispatch, Order) => {
      dispatch({ type: "toggleEdit", payload: { statu: true, Order: Order } });
    };
    return (
      <SevkConsumer>
        {(value) => {
          const { Orders, DetailActive, ArticelName, isMobile, dispatch } =
            value;
          return DetailActive ? (
            <div>
              <HeadSection
                click={this.toggleOrderList}
                text={ArticelName}
                isVisible={this.state.OrderVisible}
              />
              <table
                className={
                  this.state.OrderVisible ? "pointer table table-hover" : "hide"
                }
              >
                <thead>
                  <tr className="ms-DetailsHeader-cellName cellName-112">
                    <td>Adet</td>
                    <td>Ölçü</td>
                    <td>Renk</td>
                    <td>Tip</td>
                    <td>#</td>
                  </tr>
                </thead>
                <tbody aria-live="polite">
                  {Orders.map((o) => (
                    <tr key={o.id} id={"Order" + o.id}>
                      <td>
                        <div onClick={Mouse_Position.bind(this, dispatch, o)}>
                          {o.Piece} {o.Metrics}
                        </div>
                      </td>
                      <td>{o.Dimensions}</td>
                      <td className={isMobile ? "minifont" : ""}>{o.Color}</td>
                      <td>{o.ProductTypeName}</td>
                      <td>
                        <i
                          onClick={toggleEdit.bind(this, dispatch, o)}
                          data-icon-name="Edit"
                          role="presentation"
                          className="ms-Button-icon fleft icon-73"
                        >
                          
                        </i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null;
        }}
      </SevkConsumer>
    );
  }
}
