import React, { Component } from "react";
import CallOut from "./CallOut";
const USER_SERVICE_URL = "StartApi.ashx?Platform=Android&ProcessType=";

class OrdersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      OrderVisible: true,    
      y: 0,
      isShowCallOut: false,
      CalloutLoading: false,
      OneWayBill: [],
    };
    this.toggleOrderList = this.toggleOrderList.bind(this);
    this.CallOutonMouseMove = this.CallOutonMouseMove.bind(this);
    this.CancelCallOut = this.CancelCallOut.bind(this);
    this.GetWaybillforOrder = this.GetWaybillforOrder.bind(this);
  }
  toggleOrderList() {
    this.setState({ OrderVisible: !this.state.OrderVisible });
  }
  CancelCallOut() {
    this.setState({ isShowCallOut: false });
  }
  CallOutonMouseMove(e) {
    this.setState({
      y: e.pageY - 50 + "px",
    });
    console.log(e.pageX + "px");
  }
  async GetWaybillforOrder(OrderId, dimensions, color, producttypename) {
    this.setState({
      Dimensions: dimensions,
      OneWayBill: [],
      Color: color,
      ProductTypeName: producttypename,

      isShow: true,
    });

    this.setState({
      OneWayBill: await this.FetchFunc(
        USER_SERVICE_URL + "Motion&MotionType=One&OrderId=" + OrderId
      ),
      isShow: false,
      isShowCallOut: true,
    });
    var wayPiece = 0;
    var wayWeight = 0;

    this.state.OneWayBill.map(
      (w) => (wayPiece = wayPiece + parseInt(w.Piece, 10))
    );

    this.setState({
      LoopCount: this.state.OneWayBill.length,
      TotalOutPiece: wayPiece,
      TotalOutWeight: wayWeight,
    });
  }
  updateDimensions = () => {
    this.setState({ isShowCallOut: false });
  };

  async FetchFunc(Url) {
    const response = await fetch(Url, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": Url,
        Authorization: "bearer ",
      },
    });
    return response.json();
  }

  render() {
    return (
      <div>
        <div
          onClick={() => this.toggleOrderList()}
          className="ArticelNameHead SSOrder text-capitalize PartHead"
        >
          {this.props.ArticelName}
        </div>
        <table
          className={
            this.state.OrderVisible
              ? "pointer OrderDetailTable table table-hover"
              : "hide"
          }
        >
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
                  <div onClick={this.CallOutonMouseMove.bind(this)}>
                    <span
                      data-piece={o.Piece}
                      onClick={() =>
                        this.GetWaybillforOrder(
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
        <CallOut
          CalloutLoading={this.state.CalloutLoading}
          CancelCallOut={this.CancelCallOut}
          TotalOutPiece={this.state.TotalOutPiece}
          LoopCount={this.state.LoopCount}
          Dimensions={this.state.Dimensions}
          Color={this.state.Color}
          ProductTypeName={this.state.ProductTypeName}
          OneWayBill={this.state.OneWayBill}
          top={this.state.y}
          isShowCallOut={this.state.isShowCallOut}
        />
      </div>
    );
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {}
}

export default OrdersTable;
