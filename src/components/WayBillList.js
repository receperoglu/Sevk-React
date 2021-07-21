import React, { Component } from "react";
import Arrow from "./Tools/Arrow";
class WayBillList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WayBillVisible: true,
    };
    this.toggleWayBillList = this.toggleWayBillList.bind(this);
  }
  toggleWayBillList() {
    this.setState({ WayBillVisible: !this.state.WayBillVisible });
  }
  render() {
    return (
      <div className={this.props.Waybill.length === 0 ? "hide" : ""}>
        <div onClick={() => this.toggleWayBillList()} className="PartHead">
          İrsaliyeler
          <Arrow Direction={this.state.WayBillVisible} />
        </div>
        <table
          className={
            this.state.WayBillVisible
              ? "MotionDetails table table-hover "
              : "hide"
          }
        >
          <thead>
            <tr className="alert alert-success">
              <td>Adet</td>
              <td>KG</td>
              <td>Ölçü</td>
              <td>Renk</td>
              <td>
                Tarih <br />
              </td>
              <td className={this.state.isMobile ? "hide" : ""}>
                İrsaliye <br />
              </td>
            </tr>
          </thead>
          <tbody aria-live="polite">
            {this.props.Waybill.map((w) => (
              <tr key={w.id}>
                <td> {w.Piece} </td>
                <td> {w.Weight} </td>
                <td> {w.Dimensions} </td>
                <td className={this.props.isMobile ? "minifont" : ""}>
                  {w.Color}
                </td>

                <td className="pointer">
                  <span>
                    {w.CreatedDate}
                    <span className={this.state.isMobile ? "" : "hide"}>
                      ( {w.WayBillId} )
                    </span>
                  </span>
                </td>
                <td className={this.state.isMobile ? "hide" : ""}>
                  <span> {w.WayBillId} </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default WayBillList;
