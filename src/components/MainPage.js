import React, { Component } from "react";
import "../css/Table.css";
import CallOut from "./CallOut";
import Files from "./Files";
import WayBillList from "./WayBillList";
import TopBar from "./TopBar";
import ProductOutModal from "./ProductOutModal";
import ProductEditModal from "./ProductEditModal";
import ProductNewModal from "./ProductNewModal";

import LayoutRight from "./LayoutRight";
import CreateArticelModal from "./CreateArticelModal";

const USER_SERVICE_URL = "StartApi.ashx?Platform=Android&ProcessType=";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Articels: [],
      Orders: [],
      Waybill: [],
      Corps: [],
      OneWayBill: [],
      Files: [],
      ProductTypes: [],
      SalesTypes: [],
      Piece: 0,
      WayBillId: 0,
      Dimensions: "",
      OrderId: 0,
      Weight: 0,
      Color: "",
      TypeName: "",
      TypeId: 0,
      CorpId: 0,
      LoopCount: 0,
      TotalOutPiece: 0,
      TotalOutWeight: 0,
      Articelid: 0,
      SaleTypeId: 0,

      isShowWaybilllist: true,
      IsFirstRun: true,
      isShow: true,

      MenuStatu: false,
      IsCreateArticelShow: false,
      IsNewProductShow: false,
      isShowFiles: false,
      isShowOrder: false,
      isShowTopBar: false,
      ismodalvisible: false,
      isShowProductOut: false,
      isShowProductEdit: false,
      isShowCallOut: false,
      CalloutLoading: false,
      isFetching: false,
      isShowLayoutRight: false,

      isShowCreateArticel: false,
      ProductNewLoading: false,
      Articel: "Articel",
      x: 0,
      y: 0,
      ArticelName: "",
      ActiveArticel: 0,
    };

    this.getCorps = this.getCorps.bind(this);

    this.getProductType = this.getProductType.bind(this);
    this.GetOrders = this.GetOrders.bind(this);
    this.productEditShow = this.productEditShow.bind(this);
    this.productOutShow = this.productOutShow.bind(this);
    this.productOutShow = this.productOutShow.bind(this);
    this.CancelProduct = this.CancelProduct.bind(this);
    this.CancelEdit = this.CancelEdit.bind(this);

    this.CancelCreateArticel = this.CancelCreateArticel.bind(this);

    this.closeTopBar = this.closeTopBar.bind(this);
    this.LayoutRightShow = this.LayoutRightShow.bind(this);
    this.CancelCallOut = this.CancelCallOut.bind(this);
    this.CancelShare = this.CancelShare.bind(this);
    this.CancelNewProduct = this.CancelNewProduct.bind(this);

    this.UpdateOrder = this.UpdateOrder.bind(this);

    this.SaveOrder = this.SaveOrder.bind(this);
    this.SaveArticel = this.SaveArticel.bind(this);
    this.SaveProductOut = this.SaveProductOut.bind(this);

    this.NewProductShow = this.NewProductShow.bind(this);

    this.ChangeProductType = this.ChangeProductType.bind(this);
    this.ChangeSalesType = this.ChangeSalesType.bind(this);
    this.ChangeCorpId = this.ChangeCorpId.bind(this);
    this.ChangeArticelName = this.ChangeArticelName.bind(this);
    this.ChangePiece = this.ChangePiece.bind(this);
    this.ChangeWeight = this.ChangeWeight.bind(this);
    this.ChangeDimensions = this.ChangeDimensions.bind(this);
    this.ChangeColor = this.ChangeColor.bind(this);
    this.ChangeWayBillId = this.ChangeWayBillId.bind(this);

    this.MenuToggler = this.MenuToggler.bind(this);

    this.CreateArticelShow = this.CreateArticelShow.bind(this);
    this.filterCorp = this.filterCorp.bind(this);
  }

  ChangeProductType(TypeId) {
    this.setState({ TypeId: TypeId });
  }
  ChangeArticelName(Name) {
    this.setState({ ArticelName: Name });
  }
  ChangeCorpId(Id) {
    this.setState({ CorpId: Id });
  }

  MenuToggler = () => {
    this.setState({ MenuStatu: !this.state.MenuStatu });
  };
  ChangePiece(Piece) {
    this.setState({ Piece: Piece });
  }
  ChangeWeight(Weight) {
    this.setState({ Weight: Weight });
  }
  ChangeDimensions(Dimensions) {
    this.setState({ Dimensions: Dimensions });
  }
  ChangeWayBillId(Id) {
    this.setState({ WayBillId: Id });
  }

  ChangeColor(Color) {
    this.setState({ Color: Color });
  }
  ChangeSalesType(Id) {
    this.setState({ SaleTypeId: Id });
  }

  NewProductShow() {
    this.setState({ IsNewProductShow: true });
  }
  CreateArticelShow() {
    this.setState({
      IsCreateArticelShow: true,
      IsNewProductShow: false,
      isShowCallOut: false,
      isShowTopBar: false,
      isShowOrder: false,
    });

    document.getElementById("SecondScreen").classList.add("hide");
    document.getElementById("FirstScreen").classList.add("col-md-12");
    document.getElementById("FirstScreen").classList.remove("col-md-4");
    var selectedId = "Articel" + this.state.ActiveArticel;
    document.getElementById(selectedId).classList.remove("ActiveArticelRow");
  }
  CancelArticel() {
    this.setState({ IsCreateArticelShow: false });
  }
  SaveProductOut(OrderId) {
    this.setState({ OrderId: OrderId });
    setTimeout(() => this.PostProductOutSave(), 5000);
  }

  UpdateOrder() {
    this.PostOrderUpdate();
  }
  SaveOrder(a) {
    this.setState({ ProductNewLoading: true });

    this.PostOrdersave();
  }
  SaveArticel() {
    this.setState({ isShowCreateArticel: true });
    this.PostArticelsave();
  }

  async PostProductOutSave() {
    var url =
      "abi/post/AddWayBill.ashx?CorpId=" +
      this.state.CorpId +
      "&Piece=" +
      this.state.Piece +
      "&OrderId=" +
      this.state.OrderId +
      "&Weight=" +
      this.state.Weight +
      "&SaleType=1&Comment=9&WayBillId=" +
      this.state.WayBillId +
      "&ArticelId=" +
      this.state.Articelid;

    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
    });
    console.log(response.json);
  }
  async PostArticelsave() {
    var url =
      "abi/post/AddArticel.ashx?CorpId=" +
      this.state.CorpId +
      "&Articel=" +
      this.state.ArticelName +
      "&SaleType=" +
      this.state.SaleTypeId;

    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
    });
    let articelid = response.json();
    this.setState({
      Articelid: articelid,
      IsNewProductShow: true,
      IsCreateArticelShow: false,
    });
  }

  async PostOrdersave() {
    var url =
      "abi/post/AddOrder.ashx?ArticelId=" +
      this.state.Articelid +
      "&ProductType=" +
      this.state.TypeId +
      "&Dimensions=" +
      this.state.Dimensions +
      "&CorpId=" +
      this.state.CorpId +
      "&Color=" +
      this.state.Color +
      "&Piece=" +
      this.state.Piece +
      "&SaleType=1&Articel=test";
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
    });
    console.log(response.json());
    this.setState({ ProductNewLoading: false });

    this.GetOrders(this.state.Articelid, this.state.ArticelName);
  }
  async PostOrderUpdate() {
    var url =
      "abi/post/UpdateOrder.ashx?OrderId=" +
      this.state.OrderId +
      "&ProductType=" +
      this.state.TypeId +
      "&Dimensions=" +
      this.state.Dimensions +
      "&Color=" +
      this.state.Color +
      "&Piece=" +
      this.state.Piece;
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": url,
        Authorization: "bearer ",
      },
    });
    console.log(response.json());
    this.setState({ isShowProductEdit: false });

    this.GetOrders(this.state.Articelid, this.state.ArticelName);
  }

  Closeproductmodal() {
    this.setState({ ismodalvisible: false, isShowCallOut: false });
  }
  LayoutRightShow() {
    this.setState({
      isShowLayoutRight: true,
      isShowTopBar: false,
      isShowCallOut: false,
    });
    document.getElementById("LayoutRight").style.width = "300px";
  }
  productOutShow() {
    this.setState({ isShowProductOut: true, isShowCallOut: false });
  }

  productEditShow() {
    this.setState({ isShowProductEdit: true, isShowCallOut: false });
  }

  CancelProduct() {
    this.setState({ isShowProductOut: false, isShowCallOut: false });
  }

  CancelNewProduct() {
    this.setState({ IsNewProductShow: false, isShowCallOut: false });
  }
  CancelEdit() {
    this.setState({ isShowProductEdit: false, isShowCallOut: false });
  }
  CancelCreateArticel() {
    this.setState({ IsCreateArticelShow: false, isShowCallOut: false });
  }

  CancelShare() {
    this.setState({
      isShowLayoutRight: false,
      isShowTopBar: true,
      isShowCallOut: false,
    });
    document.getElementById("LayoutRight").style.width = "0px";
  }

  CancelCallOut() {
    this.setState({ isShowCallOut: false });
  }

  closeTopBar() {
    this.setState({
      isShowTopBar: false,
      isShowCallOut: false,
      ActiveArticel: 0,
    });

    document.getElementById("SecondScreen").classList.add("hide");
    document.getElementById("FirstScreen").classList.add("col-md-12");
    document.getElementById("FirstScreen").classList.remove("col-md-4");
    var selectedId = "Articel" + this.state.ActiveArticel;
    document.getElementById(selectedId).classList.remove("ActiveArticelRow");
  }

  TransferSummary(weight, piece) {
    this.setState({
      TotalOutPiece: 1 + piece,
      TotalOutWeight: 1 + weight,
      LoopCount: 99,
    });
  }

  async GetWaybillPhoto(WaybillId) {}
  async GetWaybillAsync(Articelid) {
    this.setState({
      Waybill: [],
      isShow: true,
    });
    var WayBillUrl =
      USER_SERVICE_URL + "Motion&MotionType=Multi&OrderId=" + Articelid;
    const response = await fetch(WayBillUrl, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": WayBillUrl,
        Authorization: "bearer ",
      },
    });
    this.setState({
      Waybill: await response.json(),
      isShow: false,
    });
    if (this.state.Waybill === "") {
      this.setState({ isShowWaybilllist: false });
    } else {
      this.setState({ isShowWaybilllist: true });
    }
  }

  async GetFilesAsync(Articelid) {
    this.setState({
      Files: [],
      isShowFiles: false,
    });
    var url = USER_SERVICE_URL + "Pictures&Articelid=" + Articelid;
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": url,
        Authorization: "bearer ",
      },
    });
    this.setState({
      Files: await response.json(),
      isShowFiles: false,
    });
    if (this.state.Files === "") {
      this.setState({ isShowFiles: false });
    } else {
      this.setState({ isShowFiles: true });
    }
  }

  async GetOrderEdit(
    orderId,
    dimensions,
    color,
    piece,
    productTypeName,
    TypeId
  ) {
    this.setState({
      Piece: piece,
      TypeId: TypeId,
      Dimensions: dimensions,
      Color: color,
      OrderId: orderId,
      ProductTypeName: productTypeName,
      ismodalvisible: true,
      isShowProductEdit: true,
    });
  }

  _onMouseMove(e) {
    this.setState({
      x: e.pageX + "px",
      y: e.pageY + "px",
    });
  }
  async GetWaybillforOrder(OrderId, dimensions, color, producttypename) {
    this.setState({
      Dimensions: dimensions,
      OneWayBill: [],
      Color: color,
      ProductTypeName: producttypename,
      CalloutLoading: true,
      isShowCallOut: true,
      isShow: true,
    });
    var MotionUrl =
      USER_SERVICE_URL + "Motion&MotionType=One&OrderId=" + OrderId;
    const response = await fetch(MotionUrl, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": MotionUrl,
        Authorization: "bearer ",
      },
    });
    this.setState({
      OneWayBill: await response.json(),
      isShow: false,
    });
    var wayPiece = 0;
    var wayWeight = 0;

    this.state.OneWayBill.map((w) => (wayPiece = wayPiece + parseInt(w.Piece,10)));

    this.setState({
      LoopCount: this.state.OneWayBill.length,
      CalloutLoading: false,
      TotalOutPiece: wayPiece,
      TotalOutWeight: wayWeight,
    });
  }

  async getProductType() {
    var ProductTypeUrl = "abi/post/ProductType.ashx";
    const response = await fetch(ProductTypeUrl, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": ProductTypeUrl,
        Authorization: "bearer ",
      },
    });

    this.setState({
      ProductTypes: await response.json(),
    });
  }
  async getCorps() {
    var CorpUrl = "abi/post/CorpList.ashx";
    const response = await fetch(CorpUrl, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": CorpUrl,
        Authorization: "bearer ",
      },
    });

    this.setState({
      Corps: await response.json(),
    });
  }

  async getSalesTypes() {
    var SalesTypeUrl = "abi/post/SaleType.ashx";
    const response = await fetch(SalesTypeUrl, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": SalesTypeUrl,
        Authorization: "bearer ",
      },
    });

    this.setState({
      SalesTypes: await response.json(),
    });
  }

  filterCorp(CorpId) {
    this.setState({
      Articels: this.state.Articels.filter(
        (articel) => articel.CorpId === CorpId
      ),
    });
  }

  async GetOrders(Articelid, CorpId, ArticelName) {
    this.setState({
      isShow: true,
      CorpId: CorpId,
      Articelid: Articelid,
      isShowTopBar: true,
      isShowCallOut: false,
      ArticelName: ArticelName,
    });

    this.GetWaybillAsync(Articelid);

    this.GetFilesAsync(Articelid);

    this.setState({
      Orders: [],
      isShowOrder: true,
    });

    if (this.state.ActiveArticel === 0) {
      this.state.ActiveArticel = Articelid;
    } else {
      var selectedId = "Articel" + this.state.ActiveArticel;
      document.getElementById(selectedId).classList.remove("ActiveArticelRow");
      this.state.ActiveArticel = Articelid;
    }

    var Clicked = "Articel" + Articelid;
    document.getElementById(Clicked).classList.add("ActiveArticelRow");

    document.getElementById("ArticelName").innerHTML = ArticelName;
    document.getElementById("SecondScreen").classList.remove("hide");

    document.getElementById("SecondScreen").classList.add("col-md-8");
    document.getElementById("FirstScreen").classList.add("col-md-4");
    document.getElementById("FirstScreen").classList.remove("col-md-12");
    var FullUrl = USER_SERVICE_URL + "Orders&Articelid=" + Articelid;
    const response = await fetch(FullUrl, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": FullUrl,
        Authorization: "bearer ",
      },
    });

    this.setState({
      Orders: await response.json(),
      isShow: false,
      isShowOrder: true,
    });
  }

  render() {
    return (
      <div className="padd0 col-md-12">
        <TopBar
          NewProductShow={this.NewProductShow}
          closeTopBar={this.closeTopBar}
          MenuToggler={this.MenuToggler}
          LayoutRightShow={this.LayoutRightShow}
          isShowTopBar={this.state.isShowTopBar}
          productEditShow={this.productEditShow}
          productOutShow={this.productOutShow}
          MenuStatu={this.state.MenuStatu}
          Corps={this.state.Corps}
          filterCorp={this.filterCorp}
        />

        <div
          className={
            this.state.IsFirstRun ? "show pagefirstloading" : "opaq0 hide"
          }
        >
          <div className="text-center">İlk Açılış ayarlanıyor</div>

          <div className="prf ProgressSpinnerFlat" role="progressbar">
            <div aria-hidden="true">•</div>
            <div aria-hidden="true">•</div>
            <div aria-hidden="true">•</div>
            <div aria-hidden="true">•</div>
          </div>
        </div>

        <div
          className={
            this.state.isShow
              ? "show ProgressSpinnerFlat"
              : "opaq0 ProgressSpinnerFlat"
          }
          role="progressbar"
        >
          <div aria-hidden="true">•</div>
          <div aria-hidden="true">•</div>
          <div aria-hidden="true">•</div>
          <div aria-hidden="true">•</div>
          <div aria-hidden="true">•</div>
          <div aria-hidden="true">•</div>
          <div aria-hidden="true">•</div>
        </div>
        <div id="FirstScreen" className="WizardArea padd0 col-md-12">
          <table className="table table-hover">
            <thead>
              <tr className="alert alert-success">
                <td>Firma</td>
                <td>Articel / Sipariş</td>
                <td>#</td>
              </tr>
            </thead>
            <tbody>
              {this.state.Articels.map((a) => (
                <tr
                  className="ArticelRow"
                  id={this.state.Articel + a.id}
                  key={a.id}
                >
                  <td style={{ whiteSpace: "break-spaces" }}>
                    {a.CustomerName}
                  </td>
                  <td>
                    <span className="Articelid">AT-{a.id}</span>
                    {a.ArticelName}
                  </td>
                  <td>
                    <i
                      onClick={() =>
                        this.GetOrders(a.id, a.CorpId, a.ArticelName)
                      }
                      className="Icon css-43 SearchIcon "
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          id="SecondScreen"
          className={
            this.state.isShowOrder ? "WizardArea padd0 col-md-8" : "hide"
          }
        >
          <div
            id="ArticelName"
            className="ArticelNameHead SSOrder text-capitalize PartHead"
          ></div>

          <div className="DetailOrders SSOrder  OrderDetailsComment">
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
                {this.state.Orders.map((o) => (
                  <tr
                    data-piece={o.Piece}
                    data-product={o.Color}
                    className="MotionData"
                    key={o.id}
                    data-orderid={o.id}
                  >
                    <td>
                      <div onClick={this._onMouseMove.bind(this)}>
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
                          this.GetOrderEdit(
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

          <div className={this.state.isShowWaybilllist ? "" : "hide"}>
            <div className="PartHead">İrsaliyeler</div>

            <WayBillList Waybill={this.state.Waybill} />
          </div>
          <div className={this.state.isShowFiles ? "" : "hide"}>
            <div className="PartHead">Dökümanlar</div>

            <Files Files={this.state.Files} />

          </div>
          <div className={this.state.isShowLayoutRight ? "" : "hide"}>
            
          <LayoutRight
              CancelShare={this.CancelShare}
              isShowLayoutRight={this.state.isShowLayoutRight}
            />
          </div>
        </div>

        <div className={this.state.isShowProductOut ? "" : "hide"}>
          <ProductOutModal
            ChangePiece={this.ChangePiece}
            ChangeWeight={this.ChangeWeight}
            ChangeWayBillId={this.ChangeWayBillId}
            CancelProduct={this.CancelProduct}
            OrderList={this.state.Orders}
            ArticelName={this.state.ArticelName}
            SaveProductOut={this.SaveProductOut}
          />
        </div>

        <div className={this.state.isShowProductEdit ? "" : "hide"}>
          <ProductEditModal
            UpdateOrder={this.UpdateOrder}
            CancelEdit={this.CancelEdit}
            ChangeProductType={this.ChangeProductType}
            ProductTypes={this.state.ProductTypes}
            Piece={this.state.Piece}
            Dimensions={this.state.Dimensions}
            Typeid={this.state.TypeId}
            ProductTypeName={this.state.ProductTypeName}
            Color={this.state.Color}
            OrderId={this.state.OrderId}
          />
        </div>
        <div className={this.state.IsCreateArticelShow ? "" : "hide"}>
          <CreateArticelModal
            Corps={this.state.Corps}
            Piece={this.state.Piece}
            Dimensions={this.state.Dimensions}
            Typeid={this.state.TypeId}
            ProductTypeName={this.state.ProductTypeName}
            Color={this.state.Color}
            ProductTypes={this.state.ProductTypes}
            ChangeArticelName={this.ChangeArticelName}
            CancelCreateArticel={this.CancelCreateArticel}
            ChangeCorpId={this.ChangeCorpId}
            ChangeSalesType={this.ChangeSalesType}
            SalesTypes={this.state.SalesTypes}
            SaveArticel={this.SaveArticel}
            isShowCreateArticel={this.state.isShowCreateArticel}
          />
        </div>
        <div className={this.state.IsNewProductShow ? "" : "hide"}>
          <ProductNewModal
            SaveOrder={this.SaveOrder}
            CancelNewProduct={this.CancelNewProduct}
            ChangeProductType={this.ChangeProductType}
            ChangePiece={this.ChangePiece}
            ChangeDimensions={this.ChangeDimensions}
            ChangeColor={this.ChangeColor}
            ProductTypes={this.state.ProductTypes}
            ProductNewLoading={this.state.ProductNewLoading}
          />
        </div>

        <div className={this.state.isShowCallOut ? "" : "hide"}>
          <div
            id="PopupWaybill"
            style={{ top: this.state.y, left: this.state.x }}
            className="ms-ContextualHost is-positioned ms-ContextualHost--arrowLeft is-open ms-ContextualHost--primaryArrow"
          >
            <CallOut
              CalloutLoading={this.state.CalloutLoading}
              CancelCallOut={this.CancelCallOut}
              TotalOutPiece={this.state.TotalOutPiece}
              LoopCount={this.state.LoopCount}
              Dimensions={this.state.Dimensions}
              Color={this.state.Color}
              ProductTypeName={this.state.ProductTypeName}
              OneWayBill={this.state.OneWayBill}
            />
          </div>
        </div>
        <div
          className={
            this.state.MenuStatu ? "BasePage-leftNav-Container" : "hide"
          }
        >
          <nav className="od-BasePage-leftNav">
            <div
              className="LeftPane LeftPane--hasNotifications"
              data-is-scrollable="true"
            >
              <div className="LeftPane-sections">
                <div className="LeftNav">
                  <div className="LeftNav-linkArea">
                    <span className="LeftNav-subLink ms-font-m" href="#">
                      <span className="LeftNav-fadient">
                        <span
                          onClick={() => this.CreateArticelShow()}
                          className="LeftNav-linkText NewArt"
                        >
                          Yeni Sipariş Oluştur
                        </span>
                      </span>
                    </span>
                    <div className="LeftNav-linkGroupContainer">
                      <div className="LeftNav-linkGroup is-expanded">
                        <div className="LeftNav-subLinksClip">
                          <div className="LeftNav-subLinks">
                            <a
                              className="LeftNav-subLink ms-font-m"
                              href="iplikler.aspx"
                            >
                              <span className="LeftNav-fadient">
                                <span className="LeftNav-linkText" id="">
                                  İplikler
                                </span>
                              </span>
                            </a>
                            <a
                              className="LeftNav-subLink ms-font-m "
                              href="firmalar.aspx"
                            >
                              <span className="LeftNav-fadient">
                                <span className="LeftNav-linkText" id="">
                                  Firmalar
                                </span>
                              </span>
                            </a>
                            <a className="LeftNav-subLink ms-font-m" href="/">
                              <span className="LeftNav-fadient">
                                <span className="LeftNav-linkText" id="">
                                  Siparişler
                                </span>
                              </span>
                            </a>
                            <a
                              className="LeftNav-subLink ms-font-m"
                              href="irsaliyeler.aspx"
                            >
                              <span className="LeftNav-fadient">
                                <span className="LeftNav-linkText" id="">
                                  İrsaliyeler
                                </span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }

  updateDimensions = () => {
    this.setState({ isShowCallOut: false });
  };

  componentDidMount() {
    this.fetcharticels();
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  async fetcharticelsAsync() {
    var ArticelUrl = USER_SERVICE_URL + "Articels";
    const response = await fetch(ArticelUrl, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-credentials": false,
        "Access-Control-Allow-Origin": ArticelUrl,
        Authorization: "bearer ",
      },
    });

    this.setState({
      Articels: await response.json(),
      isShow: false,
      IsFirstRun: false,
    });
    this.getProductType();
    this.getCorps();
    this.getSalesTypes();
  }

  fetcharticels = this.fetcharticelsAsync;
}

export default MainPage;
