import React, { Component } from "react";
import CancelBtn from "../Tools/CancelBtn";
import SevkConsumer from "../../store/context";
export class Callout extends Component {
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
    const GetWayBillPhoto = (dispatch, Path) => {
      dispatch({
        type: "GetWayBillPhoto",
        payload: Path,
      });
    };
    const CancelCallOut = (dispatch) => {
      dispatch({
        type: "CancelCallOut",
        payload: null,
      });
    };
    return (
      <SevkConsumer>
        {(value) => {
          const {
            OneWaybill,
            Order,
            ShowCallOut,
            x,
            y,
            waybillPiece,
            LoopCount,
            dispatch,
          } = value;
          return ShowCallOut ? (
            <div
              style={{ top: x, left: y }}
              className="ms-ContextualHost effect is-positioned ms-ContextualHost--arrowLeft is-open "
            >
              <div className="ms-ContextualHost-main">
                <div className="ms-Callout  ms-Callout--OOBE">
                  <CancelBtn
                    cssclass="CallOutClose"
                    click={CancelCallOut.bind(this, dispatch)}
                  />
                  <div className="ms-Callout-header">
                    <div className="ms-Callout-title">
                      {waybillPiece === 0 ? (
                        "Henüz Sevkiyat Yapılmamış"
                      ) : (
                        <span>
                          {waybillPiece} Adet.
                          {LoopCount} Kez Sevk Edildi.
                          <br />
                          {Order.Dimensions} {Order.Color} <br />
                          {Order.ProductTypeName}
                        </span>
                      )}
                    </div>
                  </div>
                  {waybillPiece === 0 ? null : (
                    <table className="table padd0">
                      <thead>
                        <tr className=" ms-DetailsHeader-cellName cellName-112">
                          <td>Adet</td>
                          <td>Ağırlık</td>
                          <td>Tarih</td>
                          <td>İrsaliye</td>
                        </tr>
                      </thead>
                      <tbody>
                        {OneWaybill.map((w) => (
                          <tr key={w.id}>
                            <td>
                              <b> {w.Piece}</b>
                            </td>
                            <td>{w.Weight} KG </td>
                            <td> {w.CreatedDate} </td>
                            <td
                              onClick={GetWayBillPhoto.bind(
                                this,
                                dispatch,
                                w.WayBillId
                              )}
                            >
                              {w.WayBillId}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          ) : null;
        }}
      </SevkConsumer>
    );
  }
}
export default Callout;
