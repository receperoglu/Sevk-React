import React, { Component } from "react";

class OrdersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
         <table className="pointer OrderDetailTable table table-hover">
              <thead>
                <tr className="alert alert-success">
                  <td>Adet</td>
                  <td>Ölçü</td>
                  <td>Renk</td>
                  <td>Tip</td>
                  <td>#</td>
                </tr>
              </thead>
              <tbody aria-live="polite">
                {this.props.Orders.map((o) => (
                  <tr
                    data-piece={o.Piece}
                    data-product={o.Color}
                    className="MotionData"
                    key={o.id}
                    data-orderid={o.id}
                  >
                    <td>
                      <div onClick={this.props.CallOutonMouseMove.bind(this)}>
                        <span
                          data-piece={o.Piece}
                          onClick={() =>
                            this.props.GetWaybillforOrder(
                              o.id,
                              o.Dimensions,
                              o.Color,
                              o.ProductTypeName,
                              this
                            )
                          }
                        >
                          {o.Piece} {o.Metrics}
                        </span>
                      </div>
                    </td>
                    <td>{o.Dimensions}</td>
                    <td>{o.Color}</td>

                    <td>{o.ProductTypeName}</td>

                    <td>
                      <i
                        onClick={() =>
                          this.props.GetOrderEdit(
                            o.id,
                            o.Dimensions,
                            o.Color,
                            o.Piece,
                            o.ProductTypeName,
                            o.Typeid
                          )
                        }
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
    );
  }

  componentDidMount() {}

  componentWillUnmount() {}
}

export default OrdersTable;
