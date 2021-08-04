import React, { Component } from "react";
import { FetchFunc } from "./FetchFunc";
import LocalStore from "../components/Tools/LocalStore";
const apiBase = "StartApi.ashx?Platform=Android&ProcessType=";
const SevkContext = React.createContext();
export class SevkProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      File: [],
      Corps: [],
      Order: [],
      Files: [],
      Orders: [],
      Waybill: [],
      Articels: [],
      OneWaybill: [],
      SalesTypes: [],
      ProductTypes: [],
      Articel: [],
      Menu: false,
      Vtype: false,
      isError: false,
      Loading: false,
      isMobile: false,
      Rotating: false,
      showOrder: false,
      ShowTopBar: false,
      ChangeView: false,
      ShowConfirm: false,
      ShowCallOut: false,
      DetailActive: false,
      ShowProductOut: false,
      NewProductShow: false,
      ShowLayoutNote: false,
      ShowProductEdit: false,
      ShowLayoutRight: false,
      NewArticelCreate: false,
      CreateArticelShow: false,
      ShowPicturePreview: false,
      ShowDocumentPreview: false,
      Piece: 0,
      Weight: 0,
      CorpId: 0,
      OrderId: 0,
      WayBillId: 0,
      LoopCount: 0,
      SaleTypeId: 0,
      waybillPiece: 0,
      waybillWeight: 0,
      ActiveArticel: 0,
      ProductTypeId: 0,
      x: "",
      y: "",
      Path: "",
      Color: "",
      RawPath: "",
      FileType: "",
      CorpName: "",
      Dimensions: "",
      ArticelName: "",
      ArticelNotes: "",
      dispatch: (action) => {
        this.setState((state) => reducer(state, action));
      },
    };
    const reducer = (state, action) => {
      switch (action.type) {
        case "ConfirmAccept":
          return this.ConfirmAccept();
        case "ConfirmToggle":
          return {
            ...state,
            ShowConfirm: action.payload,
          };
        case "cancelDocument":
          return { ...state, ShowDocumentPreview: false, File: [] };
        case "Get_Order":
          return this.GetOrders(action.payload);
        case "Mouse_Position":
          return this.CallOutonMouseMove(action.payload);
        case "WayBill_Data":
          return this.GetWaybillforOrder(action.payload);
        case "GetWayBillPhoto":
          return this.GetWayBillPhoto(action.payload);
        case "hidePicturePreview":
          return { ...state, ShowPicturePreview: false, File: [] };
        case "CancelCallOut":
          return { ...state, ShowCallOut: false, Order: [] };
        case "closeTopBar":
          return this.closeTopBar();
        case "chooseFile":
          return this.chooseFile(action.payload);
        case "SaveProductOut":
          return this.SaveProductOut(action.payload);
        case "SaveNotes":
          return this.SaveNotes();
        case "SaveArticel":
          return this.SaveArticel();
        case "SaveOrder":
          return this.SaveOrder();
        case "uploadFile":
          return this.uploadFile();
        case "UpdateArticelNote":
          return { ...state, ArticelNotes: action.payload };
        case "UpdateOrder":
          return this.UpdateOrder();
        case "toggleNote":
          return { ...state, ShowLayoutNote: action.payload };
        case "toggleShare":
          return { ...state, ShowLayoutRight: action.payload };
        case "toggleCreateArticel":
          return { ...state, CreateArticelShow: action.payload };
        case "toggleView":
          return this.toggleView();
        case "ToggleMenu":
          return { ...state, Menu: !this.state.Menu };
        case "ChangeCorpId":
          return { ...state, CorpId: action.payload };
        case "ChangeArticelName":
          return { ...state, ArticelName: action.payload };
        case "ChangeSalesType":
          return { ...state, SaleTypeId: action.payload };
        case "ChangeProductType":
          return { ...state, ProductTypeId: action.payload };
        case "ChangePiece":
          return { ...state, Piece: action.payload };
        case "ChangeDimensions":
          return { ...state, Dimensions: action.payload };
        case "ChangeColor":
          return { ...state, Color: action.payload };
        case "ChangeWayBillId":
          return { ...state, WayBillId: action.payload };
        case "ChangeWeight":
          return { ...state, Weight: action.payload };
        case "showDocumentPreview":
          return {
            ...state,
            ShowDocumentPreview: true,
            File: action.payload,
          };
        case "showPicturePreview":
          return {
            ...state,
            ShowPicturePreview: true,
            File: action.payload,
          };
        case "toggleOut":
          return {
            ...state,
            ShowProductOut: action.payload.statu,
            File: action.payload,
          };
        case "toggleAddProduct":
          return { ...state, NewProductShow: action.payload };
        case "toggleVtype":
          return {
            ...state,
            Vtype: !this.state.Vtype,
          };
        case "toggleEdit":
          return this.OpenEdit(action.payload);
        default:
          return state;
      }
    };
    this.OpenEdit = this.OpenEdit.bind(this);
    this.GetOrders = this.GetOrders.bind(this);
    this.closeError = this.closeError.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
    this.fetchCorps = this.fetchCorps.bind(this);
    this.fetchNotes = this.fetchNotes.bind(this);
    this.fetchFiles = this.fetchFiles.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.chooseFile = this.chooseFile.bind(this);
    this.CheckMobile = this.CheckMobile.bind(this);
    this.ConfirmAccept = this.ConfirmAccept.bind(this);
    this.SaveArticel = this.SaveArticel.bind(this);
    this.fetchWaybill = this.fetchWaybill.bind(this);
    this.fetchArticels = this.fetchArticels.bind(this);
    this.fetchSalesTypes = this.fetchSalesTypes.bind(this);
    this.UpdateOrAddOrder = this.UpdateOrAddOrder.bind(this);
    this.fetchProductTypes = this.fetchProductTypes.bind(this);
    this.CallOutonMouseMove = this.CallOutonMouseMove.bind(this);
    this.PostProductOutSave = this.PostProductOutSave.bind(this);
  }
  async fetchNotes(ArticelId) {
    fetch("abi/post/ArticelNotes.ashx?ArticelId=" + ArticelId)
      .then((response) => response.text())
      .then((response) => {
        this.setState({ ArticelNotes: response });
      })
      .catch((err) => console.log(err));
  }
  async fetchWaybill(ArticelId) {
    this.setState({ Waybill: [], Loading: true });
    this.setState({
      Waybill: await FetchFunc(
        apiBase + "Motion&MotionType=Multi&OrderId=" + ArticelId
      ),
      Loading: false,
    });
  }
  async fetchFiles(ArticelId) {
    var url = "/abi/post/OrderPictures.ashx?ArticelId=" + ArticelId;
    this.setState({ Files: await FetchFunc(url) });
  }
  async fetchCorps() {
    const response = await fetch("abi/post/CorpList.ashx", {
      method: "GET",
    });
    var CorpsJson = await response.json();
    localStorage.setItem("Corps", JSON.stringify(CorpsJson));
    this.setState({ Corps: CorpsJson });
  }
  async fetchArticels() {
    var data = await FetchFunc(apiBase + "Articels");
    if (!data.error) {
      this.setState({ Articels: data, isError: false });
      localStorage.setItem("Articels", JSON.stringify(data));
    } else {
      this.closeTopBar();
      this.setState({
        isError: true,
        Loading: false,
        Error:
          "Hizmete Ulaşamıyoruz, İnternet bağlantınızın olduğundan emin olun",
      });
      document
        .getElementsByClassName("od-BasePage-topBar")[0]
        .classList.add("hidden");
      document.getElementById("FirstScreen").classList.add("hidden");
    }
  }
  async fetchProductTypes() {
    var data = await FetchFunc("abi/post/ProductType.ashx");
    localStorage.setItem("ProductTypes", JSON.stringify(data));
    this.setState({ ProductTypes: data });
  }
  async fetchSalesTypes() {
    var saletypes = await FetchFunc("abi/post/SaleType.ashx");
    localStorage.setItem("SalesTypes", JSON.stringify(saletypes));
    this.setState({ SalesTypes: saletypes });
  }
  ConfirmAccept = async () => {
    this.setState({ Loading: true });
    setTimeout(() => {
      this.setState({ Loading: true, ShowConfirm: false });
      var DeleteUrl =
        apiBase + "DeleteArticel&ArticelId=" + this.state.ActiveArticel;
      var data = FetchFunc(DeleteUrl);
      console.log(data);
      setTimeout(() => {
        this.setState({
          Loading: false,
          isError: true,
          Error: "Silme işlemi tamamlandı.",
        });
        this.closeTopBar();
        LocalStore.remove("Articels");
        this.fetchArticels();
      }, 1300);
    }, 2500);
  };
  GetWayBillPhoto = async (WayBillId) => {
    var PhotoUrl = "abi/post/WayBillPhoto.ashx?WayBillId=" + WayBillId;
    fetch(PhotoUrl)
      .then((res) => res.json())
      .then(
        (response) => {
          try {
            var file = { Path: response[0].Path, RawPath: response[0].Path };
            this.setState({ File: file, ShowPicturePreview: true });
          } catch (error) {
            this.setState({
              isError: true,
              Error: "Bu irsaliyenin fotoğrafı eklenmemiş.",
            });
            this.closeError();
          }
        },
        (error) => {
          this.setState({
            isError: true,
            Error: "Bu irsaliyenin fotoğrafı eklenmemiş.",
          });
          this.closeError();
        }
      );
  };
  PostOrdersave = async () => {
    var url =
      "abi/post/AddOrder.ashx?ArticelId=" +
      this.state.ActiveArticel +
      "&ProductType=" +
      this.state.ProductTypeId +
      "&Dimensions=" +
      this.state.Dimensions +
      "&CorpId=" +
      this.state.CorpId +
      "&Color=" +
      this.state.Color +
      "&Piece=" +
      this.state.Piece +
      "&SaleType=1&Articel=test";
    await this.UpdateOrAddOrder(url);
  };
  OpenEdit = (Order) => {
    this.setState({ ShowProductEdit: !this.state.ShowProductEdit });
    try {
      this.setState({
        Order: Order,
        ProductTypeId: Order.Typeid,
        Color: Order.Color,
        Piece: Order.Piece,
        Dimensions: Order.Dimensions,
        OrderId: Order.id,
      });
    } catch (e) {
      console.log(e);
    }
  };
  SaveArticel = async () => {
    this.setState({ CreateArticelShow: true });
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
      NewProductShow: true,
      CreateArticelShow: false,
    });
  };
  PostProductOutSave = async () => {
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
      this.state.ActiveArticel;
    await FetchFunc(url);
  };
  UpdateOrAddOrder = async (url) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        this.GetOrders(this.state.Articel);
        this.setState({
          ShowProductEdit: false,
          NewProductShow: false,
          Loading: false,
        });

        return true;
      })
      .catch((err) => {
        this.setState({ isError: true, Error: err });
      });
  };
  GetOrders = async (Articel) => {
    this.setState({
      Loading: true,
      Orders: [],
      Files: [],
      Waybill: [],
      CorpId: Articel.CorpId,
      ArticelName: Articel.ArticelName,
      CorpName: Articel.CustomerName,
      Articel: Articel,
    });

    if (this.state.ActiveArticel === 0) {
      this.setState({ ActiveArticel: Articel.id });
      try {
        var FirstClicked = "Articel" + Articel.id;
        document.getElementById(FirstClicked).classList.add("ActiveArticelRow");
      } catch (error) {}
    } else {
      try {
        var PrevClicked = "Articel" + this.state.ActiveArticel;
        document
          .getElementById(PrevClicked)
          .classList.remove("ActiveArticelRow");
        this.setState({ ActiveArticel: Articel.id });

        var Clicked = "Articel" + Articel.id;
        document.getElementById(Clicked).classList.add("ActiveArticelRow");
      } catch (error) {}
    }

    var FullUrl = apiBase + "Orders&ArticelId=" + Articel.id;
    var data = await FetchFunc(FullUrl);
    if (!data.error) {
      this.setState({
        Orders: data,
        ShowTopBar: true,
        Loading: false,
        ShowLayoutNote: false,
        ShowLayoutRight: false,
        ShowCallOut: false,
        DetailActive: true,
        showOrder: true,
        CorpId: 0,
      });
      this.fetchFiles(Articel.id);
      await this.fetchWaybill(Articel.id);
      this.fetchNotes(Articel.id);
      document.getElementById("SecondScreen").classList.remove("hide");
      document.getElementById("SecondScreen").classList.add("col-md-8");
      document.getElementById("FirstScreen").classList.add("col-md-4");
      document.getElementById("FirstScreen").classList.remove("col-md-12");
    } else {
      this.closeTopBar();
      this.setState({
        isError: true,
        Loading: false,
        Error:
          "Hizmete Ulaşamıyoruz, İnternet bağlantınızın olduğundan emin olun",
      });
    }
  };
  CallOutonMouseMove = async (e) => {
    this.setState({ x: e.x, y: e.y });
    var element = "Order" + e.Order.id;
    document.getElementById(element).classList.add("OrderProccessing");
    this.setState({
      Dimensions: e.Order.Dimensions,
      OneWaybill: [],
      Color: e.Order.Color,
      ProductTypeName: e.Order.ProductTypeName,
      Loading: true,
      Order: e.Order,
    });
    if (e.Order.id !== 0) {
      var url = apiBase + "Motion&MotionType=One&OrderId=" + e.Order.id;
      var data = await FetchFunc(url);
      this.setState({ OneWaybill: data });
      var totalpiece = 0;
      var totalweight = 0;

      data.map((w) => (totalpiece += parseInt(w.Piece, 10)));
      data.map((w) => (totalweight += parseInt(w.Weight, 10)));

      this.setState({
        waybillPiece: totalpiece,
        waybillWeight: totalweight,
        LoopCount: data.length,
      });
    }
    this.setState({ Loading: false, ShowCallOut: true });
    document.getElementById(element).classList.remove("OrderProccessing");
  };
  PostOrderUpdate = async () => {
    this.setState({ Loading: true });
    var url =
      "abi/post/UpdateOrder.ashx?OrderId=" +
      this.state.Order.id +
      "&ProductType=" +
      this.state.ProductTypeId +
      "&Dimensions=" +
      this.state.Dimensions +
      "&Color=" +
      this.state.Color +
      "&Piece=" +
      this.state.Piece;
    await this.UpdateOrAddOrder(url);
  };
  updateDimensions = () => {
    this.setState({ ShowCallOut: false });
    this.CheckMobile();
  };
  closeTopBar = () => {
    this.setState({
      ShowCallOut: false,
      ShowTopBar: false,
      DetailActive: false,
    });
    document.getElementById("SecondScreen").classList.add("hide");
    document.getElementById("FirstScreen").classList.add("col-md-12");
    document.getElementById("FirstScreen").classList.remove("col-md-4");
    try {
      var selectedId = "Articel" + this.state.ActiveArticel;
      document.getElementById(selectedId).classList.remove("ActiveArticelRow");
    } catch (error) {
      this.setState({ isError: true, Error: error });
    }

    this.setState({
      ActiveArticel: 0,
    });
  };
  SaveProductOut = (orderid) => {
    this.setState({ OrderId: orderid });
    setTimeout(() => this.PostProductOutSave(), 5000);
  };
  SaveNotes = () => {
    this.setState({ Loading: true });
    var formData = new FormData();
    formData.append("ArticelId", this.state.ActiveArticel);
    formData.append("Notes", this.state.ArticelNotes);
    fetch("abi/post/AddNotes.ashx", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        setTimeout(() => {
          this.setState({
            ShowLayoutNote: false,
            Loading: false,
            isError: true,
            Error: "Güncelleme Tamamlandı",
          });
          setTimeout(() => {
            this.setState({ ShowLayoutNote: true });
          }, 1500);
        }, 2500);
      })
      .then((data) => console.log(data));
  };
  UpdateOrder = () => {
    this.PostOrderUpdate();
  };
  SaveOrder = () => {
    this.setState({ Loading: true });
    this.PostOrdersave();
  };
  RotatePicture = () => {
    this.setState({ Rotating: true });
    var formData = new FormData();
    formData.append("Rotate", "Left");
    formData.append("Path", "/dosyalar/" + this.state.RawPath);
    formData.append("PictureName", this.state.Path);
    formData.append("PictureId", 0);
    fetch("abi/post/DosyaSistem/ResimDondur.ashx", {
      method: "POST",
      processData: false,
      body: formData,
    })
      .then((response) => {
        this.setState({ Path: response });
        console.log(response);
      })
      .then((data) => console.log(data));
    this.setState({ Rotating: false });
  };
  toggleView = () => {
    this.setState({
      ShowLayoutNote: false,
      ShowLayoutRight: false,
      ShowCallOut: false,
    });
    if (this.state.showOrder) {
      if (this.state.ChangeView) {
        this.setState({ ChangeView: false });
      } else {
        this.setState({ ChangeView: true });
      }
    }
  };
  chooseFile = (type) => {
    this.setState({ FileType: type });
    var file = document.getElementById("FileNew");
    file.click();
  };
  CheckMobile = () => {
    if (window.innerWidth <= 1024) {
      this.setState({ isMobile: true });
    } else {
      this.setState({ isMobile: false });
    }
  };
  uploadFile() {
    this.setState({ Loading: true });
    var FilesCollection = document.getElementById("FileNew");
    var fileList = FilesCollection.files;
    var formData = new FormData();
    formData.append("ArticelId", this.state.ActiveArticel);
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
        this.GetOrders(this.state.Articel);
        this.setState({ Loading: false });
      })
      .catch((error) => {
        this.setState({
          Loading: false,
          isError: true,
          Error: "Bu irsaliyenin fotoğrafı eklenmemiş." + error,
        });
        this.closeError();
      });
  }
  closeError() {
    setTimeout(() => {
      this.setState({ isError: false });
    }, 2500);
  }
  componentDidMount() {
    this.setState({ Loading: true });
    if (LocalStore.check("Articels")) {
      this.setState({ Articels: LocalStore.get("Articels") });
    } else {
      this.fetchArticels();
    }
    if (LocalStore.check("ProductTypes")) {
      var types = LocalStore.get("ProductTypes");
      this.setState({ ProductTypes: types });
    } else {
      this.fetchProductTypes();
    }
    if (LocalStore.check("SalesTypes")) {
      this.setState({ SalesTypes: LocalStore.get("SalesTypes") });
    } else {
      this.fetchSalesTypes();
    }

    if (LocalStore.check("Corps")) {
      this.setState({ Corps: LocalStore.get("Corps") });
    } else {
      this.fetchCorps();
    }
    this.setState({ Loading: false });
    window.addEventListener("resize", this.updateDimensions);
    this.CheckMobile();
  }
  render() {
    return (
      <SevkContext.Provider value={this.state}>
        {this.props.children}
      </SevkContext.Provider>
    );
  }
}
const SevkConsumer = SevkContext.Consumer;
export default SevkConsumer;
