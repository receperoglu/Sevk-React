import React, { Component } from "react";
import Files from "./components/Files";
import WayBillList from "./components/WayBillList";
import TopBar from "./components/TopBar";
import ProductOutModal from "./components/ProductOutModal";
import ProductEditModal from "./components/ProductEditModal";
import ProductNewModal from "./components/ProductNewModal";
import ArticelsTable from "./components/ArticelsTable";
import LayoutRight from "./components/LayoutRight";
import LayoutNote from "./components/LayoutNote";
import CreateArticelModal from "./components/CreateArticelModal";
import OrdersTable from "./components/OrdersTable";
import ProgressBar from "./components/ProgressBar";
import FirstRun from "./components/FirstRun";
const USER_SERVICE_URL = "StartApi.ashx?Platform=Android&ProcessType=";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.getCorps = this.getCorps.bind(this);
    this.getProductType = this.getProductType.bind(this);
    this.GetOrders = this.GetOrders.bind(this);
    this.productEditShow = this.productEditShow.bind(this);
    this.productOutShow = this.productOutShow.bind(this);

    this.CorpSearch = this.CorpSearch.bind(this);

    this.toggleView = this.toggleView.bind(this);
    this.closeTopBar = this.closeTopBar.bind(this);
    this.LayoutRightShow = this.LayoutRightShow.bind(this);
    this.CancelShare = this.CancelShare.bind(this);
    this.CancelNote = this.CancelNote.bind(this);
    this.CancelProduct = this.CancelProduct.bind(this);
    this.CancelEdit = this.CancelEdit.bind(this);
    this.CancelNewProduct = this.CancelNewProduct.bind(this);
    this.CancelCreateArticel = this.CancelCreateArticel.bind(this);

    this.ChangeProductType = this.ChangeProductType.bind(this);
    this.ChangeSalesType = this.ChangeSalesType.bind(this);
    this.ChangeCorpId = this.ChangeCorpId.bind(this);
    this.ChangeArticelName = this.ChangeArticelName.bind(this);
    this.ChangePiece = this.ChangePiece.bind(this);
    this.ChangeWeight = this.ChangeWeight.bind(this);
    this.ChangeDimensions = this.ChangeDimensions.bind(this);
    this.ChangeColor = this.ChangeColor.bind(this);
    this.ChangeWayBillId = this.ChangeWayBillId.bind(this);

    this.UpdateOrder = this.UpdateOrder.bind(this);
    this.SaveOrder = this.SaveOrder.bind(this);
    this.SaveArticel = this.SaveArticel.bind(this);
    this.SaveProductOut = this.SaveProductOut.bind(this);

    this.NewProductShow = this.NewProductShow.bind(this);

    this.LayoutNoteShow = this.LayoutNoteShow.bind(this);
    this.CreateArticelShow = this.CreateArticelShow.bind(this);
    this.filterCorp = this.filterCorp.bind(this);

    this.GetOrderEdit = this.GetOrderEdit.bind(this);
    this.getNotes = this.getNotes.bind(this);
    this.UpdateArticelNote = this.UpdateArticelNote.bind(this);
    this.SaveNotes = this.SaveNotes.bind(this);
    this.uploadPicture = this.uploadPicture.bind(this);
    this.chooseFile = this.chooseFile.bind(this);
    this.state = {
      Articels: [],
      Orders: [],
      Waybill: [],
      Corps: [],
      Files: [],
      ProductTypes: [],
      SalesTypes: [],
      FileType: "",
      ArticelNotes: "",
      Dimensions: "",
      CorpName: "",
      Color: "",
      TypeName: "",

      RawPath: "",
      Articel: "Articel",
      ArticelName: "",
      OrderId: 0,
      Weight: 0,
      Piece: 0,
      WayBillId: 0,

      TypeId: 0,
      CorpId: 0,
      LoopCount: 0,
      TotalOutPiece: 0,
      TotalOutWeight: 0,
      ArticelId: 0,
      SaleTypeId: 0,
      ActiveArticel: 0,
      IsFirstRun: true,
      isShow: true,

      ChangeView: false,
      IsCreateArticelShow: false,
      IsNewProductShow: false,
      isShowOrder: false,
      isShowTopBar: false,
      isShowLayoutNote: false,
      ismodalvisible: false,
      isShowProductOut: false,
      isShowProductEdit: false,

      isFetching: false,
      isShowLayoutRight: false,

      isShowCreateArticel: false,
      ProductNewLoading: false,
    };
  }

  componentDidMount() {
    this.fetcharticels();
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }
  async fetcharticelsAsync() {
    this.setState({
      Articels: await this.FetchFunc(USER_SERVICE_URL + "Articels"),
      isShow: false,
      IsFirstRun: false,
    });
    this.getProductType();
    this.getCorps();
    this.getSalesTypes();
  }
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
  fetcharticels = this.fetcharticelsAsync;
  CorpSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = this.state.Articels.filter((data) => {
      return data.ArticelName.toLowerCase().search(value) !== -1;
    });
    this.setState({ Articels: result });
  };
  UpdateArticelNote = (note) => {
    this.setState({ ArticelNotes: note });
  };

  SaveNotes() {
    this.setState({ isShow: true });
    var formData = new FormData();
    formData.append("ArticelId", this.state.ActiveArticel);
    formData.append("Notes", this.state.ArticelNotes);
    fetch("abi/post/AddNotes.ashx", {
      method: "POST",
      body: formData,
    })
      .then((response) => this.setState({ isShow: false }))
      .then((data) => console.log(data));
  }

  toggleView() {
    if (this.state.isShowOrder) {
      this.setState({ ChangeView: !this.state.ChangeView });
    } else {
    }
  }
  chooseFile(type) {
    this.setState({ FileType: type });
    var file = document.getElementById("FileNew");
    file.click();
  }
  uploadPicture() {
    this.setState({ isShow: true });
    var FilesCollection = document.getElementById("FileNew");
    var fileList = FilesCollection.files;
    var formData = new FormData();
    formData.append("ArticelId", this.state.ArticelId);
    formData.append("FileType", this.state.FileType);
    formData.append("UploadArea[0]", fileList[0], fileList[0].name);
    fetch("abi/post/UploadWayBillOrder.ashx", {
      method: "POST",
      contentType: "application/json",
      processData: false,
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        this.setState({ isShow: false });
        this.GetOrders(
          this.state.ArticelId,
          this.state.CorpId,
          this.state.ArticelName,
          this.state.CorpName
        );
      })
      .catch((error) => {
        console.error("Error:", error);
      });
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
      isShowTopBar: false,
      isShowOrder: false,
    });

    document.getElementById("SecondScreen").classList.add("hide");
    document.getElementById("FirstScreen").classList.add("col-md-12");
    document.getElementById("FirstScreen").classList.remove("col-md-4");
    try {
      var selectedId = "Articel" + this.state.ArticelId;
      document.getElementById(selectedId).classList.remove("ActiveArticelRow");
    } catch (error) {
      console.log("ulaşılamadı" + error);
    }
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
  LayoutRightShow() {
    this.setState({
      isShowLayoutRight: true,
      isShowTopBar: false,
    });
    document.getElementById("LayoutRight").style.width = "300px";
  }
  LayoutNoteShow() {
    this.setState({
      isShowLayoutNote: true,
      isShowLayoutRight: false,

      isShowTopBar: false,
    });
    document.getElementById("LayoutNote").style.width = "300px";
  }
  productOutShow() {
    this.setState({ isShowProductOut: true });
  }
  productEditShow() {
    this.setState({ isShowProductEdit: true });
  }
  CancelArticel() {
    this.setState({ IsCreateArticelShow: false });
  }
  CancelProduct() {
    this.setState({ isShowProductOut: false });
  }
  CancelNewProduct() {
    this.setState({ IsNewProductShow: false });
  }
  CancelEdit() {
    this.setState({ isShowProductEdit: false });
  }
  CancelCreateArticel() {
    this.setState({ IsCreateArticelShow: false });
  }
  CancelShare() {
    this.setState({
      isShowLayoutRight: false,
      isShowTopBar: true,
    });
    document.getElementById("LayoutRight").style.width = "0px";
  }
  CancelNote() {
    this.setState({
      isShowLayoutRight: false,
      isShowLayoutNote: false,

      isShowTopBar: true,
    });
    document.getElementById("LayoutNote").style.width = "0px";
  }

  closeTopBar() {
    this.setState({
      isShowTopBar: false,
      ActiveArticel: 0,
    });

    document.getElementById("SecondScreen").classList.add("hide");
    document.getElementById("FirstScreen").classList.add("col-md-12");
    document.getElementById("FirstScreen").classList.remove("col-md-4");
    var selectedId = "Articel" + this.state.ActiveArticel;
    document.getElementById(selectedId).classList.remove("ActiveArticelRow");
  }
  Closeproductmodal() {
    this.setState({ ismodalvisible: false });
  }
  TransferSummary(weight, piece) {
    this.setState({
      TotalOutPiece: 1 + piece,
      TotalOutWeight: 1 + weight,
      LoopCount: 99,
    });
  }
  GetOrderEdit(id, dimensions, color, piece, typeName, TypeId) {
    this.setState({
      Piece: piece,
      TypeId: TypeId,
      Dimensions: dimensions,
      Color: color,
      OrderId: id,
      ProductTypeName: typeName,
      ismodalvisible: true,
      isShowProductEdit: true,
    });
  }

  filterCorp(CorpId) {
    this.setState({
      Articels: this.state.Articels.filter(
        (articel) => articel.CorpId === CorpId
      ),
    });
  }
  async getProductType() {
    this.setState({
      ProductTypes: await this.FetchFunc("abi/post/ProductType.ashx"),
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
    this.setState({
      SalesTypes: await this.FetchFunc("abi/post/SaleType.ashx"),
    });
  }
  async getNotes(ArticelId) {
    fetch("abi/post/ArticelNotes.ashx?ArticelId=" + ArticelId)
      .then((response) => response.text())
      .then((response) => {
        this.setState({
          ArticelNotes: response,
        });
      })
      .catch((err) => console.log(err));
  }
  async GetOrders(ArticelId, CorpId, ArticelName, CorpName) {
    this.setState({
      isShow: true,
      CorpId: CorpId,
      ArticelId: ArticelId,
      isShowTopBar: true,
      ArticelName: ArticelName,
      CorpName: CorpName,
      isShowLayoutNote: false,
      isShowLayoutRight: false,
    });
    document.getElementById("LayoutRight").style.width = "0px";
    document.getElementById("LayoutNote").style.width = "0px";

    this.GetWaybillAsync(ArticelId);
    this.getNotes(ArticelId);
    this.GetFilesAsync(ArticelId);

    this.setState({
      Orders: [],
      isShowOrder: true,
    });

    if (this.state.ActiveArticel === 0) {
      this.state.ActiveArticel = ArticelId;
    } else {
      var selectedId = "Articel" + this.state.ActiveArticel;
      document.getElementById(selectedId).classList.remove("ActiveArticelRow");

      this.setState({
        ActiveArticel: ArticelId,
      });
    }

    var Clicked = "Articel" + ArticelId;
    document.getElementById(Clicked).classList.add("ActiveArticelRow");
    document.getElementById("SecondScreen").classList.remove("hide");
    document.getElementById("SecondScreen").classList.add("col-md-8");
    document.getElementById("FirstScreen").classList.add("col-md-4");
    document.getElementById("FirstScreen").classList.remove("col-md-12");
    var FullUrl = USER_SERVICE_URL + "Orders&ArticelId=" + ArticelId;
    this.setState({
      Orders: await this.FetchFunc(FullUrl),
      isShow: false,
      isShowOrder: true,
    });
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
      this.state.ArticelId;

    await this.FetchFunc(url);
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
      ArticelId: articelid,
      IsNewProductShow: true,
      IsCreateArticelShow: false,
    });
  }
  async PostOrdersave() {
    var url =
      "abi/post/AddOrder.ashx?ArticelId=" +
      this.state.ArticelId +
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

    this.FetchFunc(url);
    this.setState({ ProductNewLoading: false });

    this.GetOrders(
      this.state.ArticelId,
      this.state.ArticelName,
      this.state.CorpName
    );
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
    console.log(response);

    this.setState({ isShowProductEdit: false });

    this.GetOrders(
      this.state.ArticelId,
      this.state.ArticelName,
      this.state.CorpName
    );
  }
  async GetWaybillPhoto(WaybillId) {}
  async GetWaybillAsync(ArticelId) {
    this.setState({
      Waybill: [],
      isShow: true,
    });

    this.setState({
      Waybill: await this.FetchFunc(
        USER_SERVICE_URL + "Motion&MotionType=Multi&OrderId=" + ArticelId
      ),
      isShow: false,
    });
  }
  async GetFilesAsync(ArticelId) {
    this.setState({
      Files: [],
    });
    var url = "/abi/post/OrderPictures.ashx?ArticelId=" + ArticelId;
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
    });
  }
  render() {
    return (
      <div className="padd0 col-md-12">
        <TopBar
          chooseFile={this.chooseFile}
          CorpSearch={this.CorpSearch}
          NewProductShow={this.NewProductShow}
          toggleView={this.toggleView}
          closeTopBar={this.closeTopBar}
          LayoutRightShow={this.LayoutRightShow}
          isShowTopBar={this.state.isShowTopBar}
          productEditShow={this.productEditShow}
          productOutShow={this.productOutShow}
          Corps={this.state.Corps}
          filterCorp={this.filterCorp}
          ArticelId={this.state.ArticelId}
          CorpName={this.state.CorpName}
          LayoutNoteShow={this.LayoutNoteShow}
          CreateArticelShow={this.CreateArticelShow}
        />

        <FirstRun IsFirstRun={this.state.IsFirstRun} />
        <ProgressBar isVisible={this.state.isShow} />
        <div
          id="FirstScreen"
          className={
            this.state.ChangeView ? "hide" : "WizardArea padd0 col-md-12"
          }
        >
          <ArticelsTable
            GetOrders={this.GetOrders}
            Articel={this.state.Articel}
            Articels={this.state.Articels}
          />
        </div>
        <div
          id="SecondScreen"
          className={
            this.state.ChangeView
              ? "WizardArea padd0 col-md-12"
              : "WizardArea padd0 col-md-8"
          }
        >
          <OrdersTable
            GetOrderEdit={this.GetOrderEdit}
            Orders={this.state.Orders}
            ArticelName={this.state.ArticelName}
          />

          <Files Files={this.state.Files} Articel={this.state.ArticelName} />
          <WayBillList Waybill={this.state.Waybill} />
          <LayoutRight
            CancelShare={this.CancelShare}
            isShowLayoutRight={this.state.isShowLayoutRight}
          />
          <LayoutNote
            CancelNote={this.CancelNote}
            SaveNotes={this.SaveNotes}
            UpdateArticelNote={this.UpdateArticelNote}
            ArticelNotes={this.state.ArticelNotes}
            isShowLayoutNote={this.state.isShowLayoutNote}
          />
        </div>
        <ProductOutModal
          ChangePiece={this.ChangePiece}
          ChangeWeight={this.ChangeWeight}
          ChangeWayBillId={this.ChangeWayBillId}
          CancelProduct={this.CancelProduct}
          OrderList={this.state.Orders}
          ArticelName={this.state.ArticelName}
          SaveProductOut={this.SaveProductOut}
          isShowProductOut={this.state.isShowProductOut}
        />
        <ProductEditModal
          isShowProductEdit={this.state.isShowProductEdit}
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
          IsCreateArticelShow={this.state.IsCreateArticelShow}
        />
        <ProductNewModal
          SaveOrder={this.SaveOrder}
          CancelNewProduct={this.CancelNewProduct}
          ChangeProductType={this.ChangeProductType}
          ChangePiece={this.ChangePiece}
          ChangeDimensions={this.ChangeDimensions}
          ChangeColor={this.ChangeColor}
          ProductTypes={this.state.ProductTypes}
          ProductNewLoading={this.state.ProductNewLoading}
          IsNewProductShow={this.state.IsNewProductShow}
        />
        <input
          type="file"
          id="FileNew"
          name="UploadArea[]"
          onChange={() => {
            this.uploadPicture();
          }}
          className="MultipleNew hide"
          multiple
        ></input>
        <div id="PrintArea" className="col-md-12 hide hidden">
          {this.state.Orders.map((o) => (
            <div key={o.id} className="he col-md-2">
              <h5>
                <span>{o.Dimensions}</span> <span> {o.Color}</span>
                {o.ProductTypeName}
              </h5>
              <hr /> {o.Piece} {o.Metrics}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MainPage;
