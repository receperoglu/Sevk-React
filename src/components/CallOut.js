import React, { Component } from "react";

class CallOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        id="PopupWaybill"
        style={{ top: this.props.top, left:this.props.left }}
        className={
          this.props.isShowCallOut
            ? "ms-ContextualHost effect is-positioned ms-ContextualHost--arrowLeft is-open ms-ContextualHost--primaryArrow"
            : "hide"
        }
      >
        <div className="ms-ContextualHost-main">
          <div className="ms-Callout ms-Callout--arrowLeft ms-Callout--OOBE">
            <div className="ms-Callout-main">
              <i
                data-icon-name="Cancel"
                onClick={() => this.props.CancelCallOut()}
                aria-hidden="true"
                className="pointer ms-Button-icon icon-73 fright cwhite"
              >
                
              </i>
              <div className="ms-Callout-header">
                <div className="ms-Callout-title">
                  {this.props.TotalOutPiece === 0
                    ? " Henüz Sevkiyat Yapılmamış"
                    : ""}
                  <div className={this.props.TotalOutPiece === 0 ? "hide" : ""}>
                    {this.props.TotalOutPiece} Adet.
                    {this.props.LoopCount} Kez Sevk Edildi.
                    <br />
                    {this.props.Dimensions} {this.props.Color} <br />
                    {this.props.ProductTypeName}
                  </div>
                </div>
              </div>
              <div className="ms-Callout-inner">
                <div className="ms-Callout-content">
                  <div className="ms-Callout-subText">
                    <table
                      className={
                        this.props.calloutloading
                          ? "opaq0 hide"
                          : "table padd0  table-hover alert alert-primary"
                      }
                    >
                      <thead
                        className={this.props.TotalOutPiece === 0 ? "hide" : ""}
                      >
                        <tr className="alert alert-success">
                          <td>Adet</td>
                          <td>Ağırlık</td>
                          <td>Tarih</td>
                          <td>İrsaliye</td>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.OneWayBill.map((w) => (
                          <tr key={w.id}>
                            <td>
                              <b> </b> {w.Piece}
                            </td>
                            <td>{w.Weight} KG </td>
                            <td> {w.CreatedDate} </td>
                            <td>
                              <span
                                onClick={() =>
                                  this.GetWayBillPhoto(w.WayBillId)
                                }
                              >
                                {w.WayBillId}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CallOut;
