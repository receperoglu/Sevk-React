import React, { useState, useEffect } from "react";
import CreateArticelModal from "./components/CreateArticelModal";
import DocumentPreview from "./components/Layout/DocumentPreview";
import PicturePreview from "./components/Layout/PicturePreview";
import FilesComponent from "./components/FilesComponent";
import ProgressBar from "./components/Tools/ProgressBar";
import ArticelsTable from "./components/ArticelsTable";
import EditModal from "./components/ProductModal/Edit";
import NewModal from "./components/ProductModal/New";
import OutModal from "./components/ProductModal/Out";
import LayoutRight from "./components/LayoutRight";
import OrdersTable from "./components/OrdersTable";
import WayBillList from "./components/WayBillList";
import LayoutNote from "./components/LayoutNotes";
import CallOut from "./components/Layout/CallOut";
import TopBar from "./components/Layout/TopBar";
import Error from "./components/Layout/Error";
import LocalStore from "./components/Tools/LocalStore";

const USER_SERVICE_URL = "StartApi.ashx?Platform=Android&ProcessType=";
export default function MainPage() {
  const [Url, setUrl] = useState([]);
  const [Vtype, setVtype] = useState(false);
  const [Files, setFiles] = useState([]);
  const [Orders, setOrders] = useState([]);
  const [Waybill, setWaybill] = useState([]);
  const [Articels, setArticels] = useState([]);
  const [SalesTypes, setSalesTypes] = useState([]);
  const [OneWayBill, setOneWayBill] = useState([]);
  const [ProductTypes, setProductTypes] = useState([]);

  const [Path, setPath] = useState("");
  const [Color, setColor] = useState("");
  const [RawPath, setRawPath] = useState("");
  const [CorpName, setCorpName] = useState("");
  const [FileType, setFileType] = useState("");
  const [Dimensions, setDimensions] = useState("");
  const [ArticelName, setArticelName] = useState("");
  const [ArticelNotes, setArticelNotes] = useState("");
  const [ProductTypeName, setProductTypeName] = useState("");
  const [isError, setisError] = useState(false);
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [Piece, setPiece] = useState(0);
  const [Weight, setWeight] = useState(0);
  const [TypeId, setTypeId] = useState(0);
  const [CorpId, setCorpId] = useState(0);
  const [OrderId, setOrderId] = useState(0);
  const [ArticelId, setArticelId] = useState(0);
  const [WayBillId, setWayBillId] = useState(0);
  const [SaleTypeId, setSaleTypeId] = useState(0);
  const [ActiveArticel, setActiveArticel] = useState(0);

  const [isShow, setisShow] = useState(true);
  const [isMobile, setisMobile] = useState(false);
  const [isRotating, setisRotating] = useState(false);
  const [ChangeView, setChangeView] = useState(false);
  const [isshowOrder, setisshowOrder] = useState(false);
  const [isShowTopBar, setisShowTopBar] = useState(false);
  const [isShowCallOut, setisShowCallOut] = useState(false);
  const [isDetailActive, setisDetailActive] = useState(false);
  const [IsNewProductShow, setIsNewProductShow] = useState(false);
  const [isShowLayoutNote, setisShowLayoutNote] = useState(false);
  const [isShowProductOut, setisShowProductOut] = useState(false);
  const [isShowProductEdit, setisShowProductEdit] = useState(false);
  const [isShowLayoutRight, setisShowLayoutRight] = useState(false);
  const [ProductNewLoading, setProductNewLoading] = useState(false);
  const [IsCreateArticelShow, setIsCreateArticelShow] = useState(false);
  const [isShowCreateArticel, setisShowCreateArticel] = useState(false);
  const [isShowPicturePreview, setisShowPicturePreview] = useState(false);
  const [isShowDocumentPreview, setisShowDocumentPreview] = useState(false);

  useEffect(() => {
    if (LocalStore.check("Articels")) {
      setArticels(LocalStore.get("Articels"));
      setisShow(false);
    } else {
      async function fetchArticels() {
        var data = await FetchJson(USER_SERVICE_URL + "Articels");
        localStorage.setItem("Articels", JSON.stringify(data));
        setArticels(data);
        setisShow(false);
        getProductType();
      }
      fetchArticels();
    }
    CheckMobile();
    window.addEventListener("resize", updateDimensions);
  }, []);
  const CheckMobile = () => {
    if (window.innerWidth <= 1024) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };
  const GetWaybillAsync = async (ArticelId) => {
    setWaybill([]);
    setisShow(true);
    setWaybill(
      await FetchJson(
        USER_SERVICE_URL + "Motion&MotionType=Multi&OrderId=" + ArticelId
      )
    );
    setisShow(false);
  };
  const toggleVtype = () => {
    setVtype(!Vtype);
  };
  const ChangeProductType = (typeid) => {
    setTypeId(typeid);
  };
  const ChangeArticelName = (name) => {
    setArticelName(name);
  };
  const ChangeCorpId = (id) => {
    setCorpId(id);
  };
  const ChangePiece = (piece) => {
    setPiece(piece);
  };
  const ChangeWeight = (weight) => {
    setWeight(weight);
  };
  const ChangeDimensions = (dimensions) => {
    setDimensions(dimensions);
  };
  const ChangeWayBillId = (id) => {
    setWayBillId(id);
  };
  const ChangeColor = (color) => {
    setColor(color);
  };
  const ChangeSalesType = (id) => {
    setSaleTypeId(id);
  };
  const CallOutonMouseMove = (e) => {
    setx(e.pageX + "px");
    sety(e.pageY + "px");
  };
  const GetWaybillforOrder = async (
    OrderId,
    dimensions,
    color,
    producttypename
  ) => {
    var element = "Order" + OrderId;
    document.getElementById(element).classList.add("OrderProccessing");
    setDimensions(dimensions);
    setOneWayBill([]);
    setColor(color);
    setProductTypeName(producttypename);
    setisShow(true);
    if (OrderId === 0) {
      setOneWayBill([]);
    } else {
      setOneWayBill(
        await FetchJson(
          USER_SERVICE_URL + "Motion&MotionType=One&OrderId=" + OrderId
        )
      );
    }

    setisShow(false);
    setisShowCallOut(true);
    document.getElementById(element).classList.remove("OrderProccessing");
  };
  const GetWayBillPhoto = async (WayBillId) => {
    var PhotoUrl = "abi/post/WayBillPhoto.ashx?WayBillId=" + WayBillId;
    fetch(PhotoUrl)
      .then((res) => res.json())
      .then(
        (response) => {
          try {
            var url = "https://recep.space/abi/dosyalar/" + response[0].Path;
            console.log(url);
            showPicturePreview(url, url);
          } catch (error) {
            setisError(true);
          }
        },
        (error) => {
          setisError(true);
        }
      );
  };
  const updateDimensions = () => {
    setisShowCallOut(false);
    CheckMobile();
  };
  const FetchJson = async (Url) => {
    var response = "";
    try {
      response = await fetch(Url, {
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
    } catch (error) {
      setisError(true);
    }
    return response.json();
  };
  const UpdateArticelNote = (note) => {
    setArticelNotes(note);
  };
  const SaveNotes = () => {
    setisShow(true);
    var formData = new FormData();
    formData.append("ArticelId", ActiveArticel);
    formData.append("Notes", ArticelNotes);
    fetch("abi/post/AddNotes.ashx", {
      method: "POST",
      body: formData,
    })
      .then((response) => setisShow(false))
      .then((data) => console.log(data));
  };
  const toggleView = () => {
    if (isshowOrder) {
      setChangeView(!ChangeView);
    }
  };
  const chooseFile = () => {
    setFileType("File");
    var file = document.getElementById("FileNew");
    file.click();
  };
  const choosePicture = () => {
    setFileType("Picture");
    var file = document.getElementById("FileNew");
    file.click();
  };
  const uploadPicture = () => {
    setisShow(true);
    var FilesCollection = document.getElementById("FileNew");
    var fileList = FilesCollection.files;
    var formData = new FormData();
    formData.append("ArticelId", ActiveArticel);
    formData.append("FileType", FileType);
    formData.append("UploadArea[0]", fileList[0], fileList[0].name);
    fetch("abi/post/UploadWayBillOrder.ashx", {
      method: "POST",
      contentType: "application/json",
      processData: false,
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setisShow(false);
        GetOrders(ActiveArticel, CorpId, ArticelName, CorpName);
      })
      .catch((error) => {
        setisError(true);
      });
  };
  const NewProductShow = () => {
    setIsNewProductShow(true);
  };
  const CreateArticelShow = () => {
    setIsCreateArticelShow(true);
    setIsNewProductShow(false);
    setisShowTopBar(false);
    setisshowOrder(false);
    document.getElementById("SecondScreen").classList.add("hide");
    document.getElementById("FirstScreen").classList.add("col-md-12");
    document.getElementById("FirstScreen").classList.remove("col-md-4");
    try {
      var selectedId = "Articel" + ActiveArticel;
      document.getElementById(selectedId).classList.remove("ActiveArticelRow");
    } catch (error) {
      setisError(true);
      console.log(error);
    }
  };
  const SaveProductOut = (orderid) => {
    setOrderId(orderid);
    setTimeout(() => PostProductOutSave(), 5000);
  };
  const UpdateOrder = () => {
    PostOrderUpdate();
  };
  const SaveOrder = (a) => {
    setProductNewLoading(true);
    PostOrdersave();
  };
  const SaveArticel = () => {
    setisShowCreateArticel(true);
    PostArticelsave();
  };
  const LayoutRightShow = () => {
    setisShowLayoutRight(true);
    setisShowTopBar(false);
  };
  const LayoutNoteShow = () => {
    setisShowLayoutNote(true);
    setisShowLayoutRight(false);
    setisShowTopBar(false);
  };
  const productOutShow = () => {
    setisShowProductOut(true);
  };
  const CancelCallOut = () => {
    setisShowCallOut(false);
  };
  const CancelArticel = () => {
    setIsCreateArticelShow(false);
  };
  const CancelProduct = () => {
    setisShowProductOut(false);
  };
  const CancelNewProduct = () => {
    setIsNewProductShow(false);
  };
  const CancelEdit = () => {
    setisShowProductEdit(false);
  };
  const CancelCreateArticel = () => {
    setIsCreateArticelShow(false);
  };
  const CancelShare = () => {
    setisShowLayoutRight(false);
    setisShowTopBar(true);
  };
  const CancelNote = () => {
    setisShowLayoutRight(false);
    setisShowLayoutNote(false);
    setisShowTopBar(true);
  };
  const closeTopBar = () => {
    setisShowTopBar(false);
    setisShowCallOut(false);
    setisDetailActive(false);
    document.getElementById("SecondScreen").classList.add("hide");
    document.getElementById("FirstScreen").classList.add("col-md-12");
    document.getElementById("FirstScreen").classList.remove("col-md-4");
    var selectedId = "Articel" + ActiveArticel;
    document.getElementById(selectedId).classList.remove("ActiveArticelRow");
    setActiveArticel(0);
  };
  const RotatePicture = () => {
    setisRotating(true);
    var formData = new FormData();
    formData.append("Rotate", "Left");
    formData.append("Path", "/dosyalar/" + RawPath);
    formData.append("PictureName", Path);
    formData.append("PictureId", 0);
    fetch("abi/post/DosyaSistem/ResimDondur.ashx", {
      method: "POST",
      processData: false,
      body: formData,
    })
      .then((response) => {
        setPath(Path);
        console.log(response);
      })
      .then((data) => console.log(data));
    setisRotating(false);
  };
  const filterCorp = (id) => {
    var filterCorp = Articels.filter((articel) => articel.id === id);
    setArticels(filterCorp);
  };
  const hidePicturePreview = () => {
    setisShowPicturePreview(false);
  };
  const hideDocumentPreview = () => {
    setUrl([]);
    setisShowDocumentPreview(false);
  };
  const showPicturePreview = (path, RawPath) => {
    setPath(path);
    setRawPath(RawPath);
    setisShowPicturePreview(true);
  };
  const showDocumentPreview = (url) => {
    setUrl(url);
    setisShowDocumentPreview(true);
  };
  const getProductType = async () => {
    if (LocalStore.check("ProductTypes")) {
      setProductTypes(LocalStore.get("ProductTypes"));
      setisShow(false);
    } else {
      var ProductTypes = await FetchJson("abi/post/ProductType.ashx");
      setProductTypes(ProductTypes);
      localStorage.setItem("ProductTypes", JSON.stringify(ProductTypes));
    }
    getSalesTypes();
  };
  const getSalesTypes = async () => {
    if (LocalStore.check("SalesTypes")) {
      setSalesTypes(LocalStore.get("SalesTypes"));
      setisShow(false);
    } else {
      var saletypes = await FetchJson("abi/post/SaleType.ashx");
      setSalesTypes(saletypes);
      localStorage.setItem("SalesTypes", JSON.stringify(saletypes));
    }
  };
  const ArticelDetatil = () => {
    setisShow(true);
    setisShowTopBar(true);
    setisShowLayoutNote(false);
    setisShowLayoutRight(false);
    setisShowCallOut(false);
    setisDetailActive(true);
    setisshowOrder(true);
    document.getElementById("SecondScreen").classList.remove("hide");
    document.getElementById("SecondScreen").classList.add("col-md-8");
    document.getElementById("FirstScreen").classList.add("col-md-4");
    document.getElementById("FirstScreen").classList.remove("col-md-12");
  };
  const getNotes = async (ArticelId) => {
    fetch("abi/post/ArticelNotes.ashx?ArticelId=" + ArticelId)
      .then((response) => response.text())
      .then((response) => {
        setArticelNotes(response);
      })
      .catch((err) => console.log(err));
  };
  const GetOrders = async (articelid, CorpId, ArticelName, CorpName) => {
    setOrders([]);
    setCorpId(CorpId);
    await GetWaybillAsync(articelid);
    getNotes(articelid);
    GetFilesAsync(articelid);
    ArticelDetatil();
    setArticelName(ArticelName);
    setCorpName(CorpName);
    if (ActiveArticel === 0) {
      setActiveArticel(articelid);
      try {
        var FirstClicked = "Articel" + articelid;
        document.getElementById(FirstClicked).classList.add("ActiveArticelRow");
      } catch (error) {}
    } else {
      try {
        var PrevClicked = "Articel" + ActiveArticel;
        document
          .getElementById(PrevClicked)
          .classList.remove("ActiveArticelRow");
        setActiveArticel(articelid);
        var Clicked = "Articel" + articelid;
        document.getElementById(Clicked).classList.add("ActiveArticelRow");
      } catch (error) {}
    }

    var FullUrl = USER_SERVICE_URL + "Orders&ArticelId=" + articelid;
    setOrders(await FetchJson(FullUrl));
    setisShow(false);
    setisshowOrder(true);
  };

  const GetFilesAsync = async (ArticelId) => {
    setFiles([]);
    var url = "/abi/post/OrderPictures.ashx?ArticelId=" + ArticelId;
    var data = await FetchJson(url);
    setFiles(data);
  };
  const GetOrderEdit = (id, dimensions, color, piece, typeName, TypeId) => {
    setPiece(piece);
    setTypeId(TypeId);
    setDimensions(dimensions);
    setColor(color);
    setOrderId(id);
    setProductTypeName(typeName);
    setisShowProductEdit(true);
  };
  const PostProductOutSave = async () => {
    var url =
      "abi/post/AddWayBill.ashx?CorpId=" +
      CorpId +
      "&Piece=" +
      Piece +
      "&OrderId=" +
      OrderId +
      "&Weight=" +
      Weight +
      "&SaleType=1&Comment=9&WayBillId=" +
      WayBillId +
      "&ArticelId=" +
      ArticelId;

    await FetchJson(url);
  };
  const PostArticelsave = async () => {
    var url =
      "abi/post/AddArticel.ashx?CorpId=" +
      CorpId +
      "&Articel=" +
      ArticelName +
      "&SaleType=" +
      SaleTypeId;
    const response = await fetch(url, {
      method: "POST",
      cache: "no-cache",
      mode: "cors",
    });
    let articelid = response.json();
    setArticelId(articelid);
    setIsNewProductShow(true);
    setisShowCreateArticel(false);
  };
  const PostOrdersave = async () => {
    var url =
      "abi/post/AddOrder.ashx?ArticelId=" +
      ActiveArticel +
      "&ProductType=" +
      TypeId +
      "&Dimensions=" +
      Dimensions +
      "&CorpId=" +
      CorpId +
      "&Color=" +
      Color +
      "&Piece=" +
      Piece +
      "&SaleType=1&Articel=test";
    await UpdateOrAddOrder(url);
    GetOrders(ArticelId, ArticelName, CorpName);
  };
  const PostOrderUpdate = async () => {
    setisShow(true);
    var url =
      "abi/post/UpdateOrder.ashx?OrderId=" +
      OrderId +
      "&ProductType=" +
      TypeId +
      "&Dimensions=" +
      Dimensions +
      "&Color=" +
      Color +
      "&Piece=" +
      Piece;

    await UpdateOrAddOrder(url);
  };
  const UpdateOrAddOrder = async (url) => {
    fetch(url, {
      method: "GET",
    })
      .then((response) => {
        GetOrders(ActiveArticel, CorpId, ArticelName, CorpName);
        setisShowProductEdit(false);
        setisShow(false);
        return true;
      })
      .catch((err) => {});
  };
  return (
    <div className="padd0 col-md-12">
      <TopBar
        isMobile={isMobile}
        CorpName={CorpName}
        ArticelId={ArticelId}
        chooseFile={chooseFile}
        toggleView={toggleView}
        filterCorp={filterCorp}
        closeTopBar={closeTopBar}
        isShowTopBar={isShowTopBar}
        choosePicture={choosePicture}
        LayoutNoteShow={LayoutNoteShow}
        productOutShow={productOutShow}
        NewProductShow={NewProductShow}
        LayoutRightShow={LayoutRightShow}
        CreateArticelShow={CreateArticelShow}
      />
      <ProgressBar isVisible={isShow} />
      <div className={isMobile && isDetailActive ? "hide" : ""}>
        <div
          id="FirstScreen"
          className={ChangeView ? "hide" : "WizardArea padd0 col-md-12"}
        >
          <ArticelsTable
            Articels={Articels}
            isMobile={isMobile}
            GetOrders={GetOrders}
          />
        </div>
      </div>
      <div
        id="SecondScreen"
        className={
          isMobile
            ? "col-xs-12 padd0"
            : ChangeView
            ? "WizardArea padd0 col-md-12"
            : "WizardArea padd0 col-md-8"
        }
      >
        <OrdersTable
          isVisible={isShow}
          Orders={Orders}
          isMobile={isMobile}
          ArticelName={ArticelName}
          GetOrderEdit={GetOrderEdit}
          isDetailActive={isDetailActive}
          CallOutonMouseMove={CallOutonMouseMove}
          GetWaybillforOrder={GetWaybillforOrder}
        />
        <FilesComponent
          Files={Files}
          showPicturePreview={showPicturePreview}
          showDocumentPreview={showDocumentPreview}
          toggleVtype={toggleVtype}
          Vtype={Vtype}
        />
        <WayBillList
          Waybill={Waybill}
          GetWayBillPhoto={GetWayBillPhoto}
          isMobile={isMobile}
        />
      </div>
      <LayoutRight
        CancelShare={CancelShare}
        isShowLayoutRight={isShowLayoutRight}
      />
      <LayoutNote
        SaveNotes={SaveNotes}
        CancelNote={CancelNote}
        UpdateArticelNote={UpdateArticelNote}
        ArticelNotes={ArticelNotes}
        isShowLayoutNote={isShowLayoutNote}
      />
      <CreateArticelModal
        Piece={Piece}
        Color={Color}
        Typeid={TypeId}
        SalesTypes={SalesTypes}
        Dimensions={Dimensions}
        SaveArticel={SaveArticel}
        ProductTypes={ProductTypes}
        ChangeCorpId={ChangeCorpId}
        CancelArticel={CancelArticel}
        ChangeSalesType={ChangeSalesType}
        ProductTypeName={ProductTypeName}
        ChangeArticelName={ChangeArticelName}
        isShowCreateArticel={isShowCreateArticel}
        IsCreateArticelShow={IsCreateArticelShow}
        CancelCreateArticel={CancelCreateArticel}
      />
      <NewModal
        SaveOrder={SaveOrder}
        ChangePiece={ChangePiece}
        ChangeColor={ChangeColor}
        ProductTypes={ProductTypes}
        IsNewProductShow={IsNewProductShow}
        CancelNewProduct={CancelNewProduct}
        ChangeDimensions={ChangeDimensions}
        ChangeProductType={ChangeProductType}
        ProductNewLoading={ProductNewLoading}
      />
      <EditModal
        Color={Color}
        Piece={Piece}
        Typeid={TypeId}
        isShow={isShow}
        OrderId={OrderId}
        CancelEdit={CancelEdit}
        Dimensions={Dimensions}
        ChangeColor={ChangeColor}
        ChangePiece={ChangePiece}
        UpdateOrder={UpdateOrder}
        ProductTypes={ProductTypes}
        ProductTypeName={ProductTypeName}
        isShowProductEdit={isShowProductEdit}
        ChangeProductType={ChangeProductType}
        ChangeDimensions={ChangeDimensions}
      />
      <OutModal
        OrderList={Orders}
        ChangePiece={ChangePiece}
        ArticelName={ArticelName}
        ChangeWeight={ChangeWeight}
        CancelProduct={CancelProduct}
        SaveProductOut={SaveProductOut}
        ChangeWayBillId={ChangeWayBillId}
        isShowProductOut={isShowProductOut}
      />
      <CallOut
        top={y}
        left={x}
        Color={Color}
        Dimensions={Dimensions}
        OneWayBill={OneWayBill}
        CancelCallOut={CancelCallOut}
        isShowCallOut={isShowCallOut}
        ProductTypeName={ProductTypeName}
        GetWayBillPhoto={GetWayBillPhoto}
      />
      <Error setisError={setisError} isError={isError} />
      <PicturePreview
        Path={Path}
        Articel={ArticelName}
        isRotating={isRotating}
        RotatePicture={RotatePicture}
        hidePicturePreview={hidePicturePreview}
        isShowPicturePreview={isShowPicturePreview}
      />
      <DocumentPreview
        File={Url}
        hideDocumentPreview={hideDocumentPreview}
        isShowDocumentPreview={isShowDocumentPreview}
      />
      <input
        type="file"
        id="FileNew"
        name="UploadArea[]"
        onChange={() => {
          uploadPicture();
        }}
        className="MultipleNew hide"
        multiple
      ></input>
    </div>
  );
}
