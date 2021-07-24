import React, { useState, useEffect } from "react";
import CreateArticelModal from "./components/CreateArticelModal";
import ProductOutModal from "./components/ProductOutModal";
import ProductEditModal from "./components/ProductEditModal";
import ProductNewModal from "./components/ProductNewModal";
import FilesComponent from "./components/FilesComponent";
import PicturePreview from "./components/PicturePreview";
import ArticelsTable from "./components/ArticelsTable";
import LayoutRight from "./components/LayoutRight";
import OrdersTable from "./components/OrdersTable";
import ProgressBar from "./components/ProgressBar";
import WayBillList from "./components/WayBillList";
import LayoutNote from "./components/LayoutNotes";
import FirstRun from "./components/FirstRun";
import CallOut from "./components/CallOut";
import TopBar from "./components/TopBar";

const USER_SERVICE_URL = "StartApi.ashx?Platform=Android&ProcessType=";
export default function MainPage() {
  const [Corps, setCorps] = useState([]);
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
  const [IsFirstRun, setIsFirstRun] = useState(true);
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
  useEffect(() => {
    async function fetchArticels() {
      var data = await FetchFunc(USER_SERVICE_URL + "Articels");
      setArticels(data);
      setisShow(false);
      setIsFirstRun(false);
    }
    fetchArticels();
    getProductType();
    getCorps();
    getSalesTypes();
    window.addEventListener("resize", updateDimensions);
  }, []);
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
    setDimensions(dimensions);
    setOneWayBill([]);
    setColor(color);
    setProductTypeName(producttypename);
    setisShow(true);
    setOneWayBill(
      await FetchFunc(
        USER_SERVICE_URL + "Motion&MotionType=One&OrderId=" + OrderId
      )
    );
    setisShow(false);
    setisShowCallOut(true);
  };
  const updateDimensions = () => {
    setisShowCallOut(false);
    if (window.innerWidth <= 1024) {
      setisMobile(true);
    } else {
      setisMobile(false);
    }
  };
  const FetchFunc = async (Url) => {
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
  };
  const CorpSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = Articels.filter((data) => {
      return data.ArticelName.toLowerCase().search(value) !== -1;
    });
    setArticels(result);
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
  const chooseFile = (type) => {
    setFileType(type);
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
        console.error("Error:", error);
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
    document.getElementById("LayoutRight").style.width = "300px";
  };
  const LayoutNoteShow = () => {
    setisShowLayoutNote(true);
    setisShowLayoutRight(false);
    setisShowTopBar(false);
    document.getElementById("LayoutNote").style.width = "300px";
  };
  const productOutShow = () => {
    setisShowProductOut(true);
  };
  const productEditShow = () => {
    setisShowProductEdit(true);
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

    document.getElementById("LayoutRight").style.width = "0px";
  };
  const CancelNote = () => {
    setisShowLayoutRight(false);
    setisShowLayoutNote(false);
    setisShowTopBar(true);
    document.getElementById("LayoutNote").style.width = "0px";
  };
  const closeTopBar = () => {
    setisShowTopBar(false);

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
      .then((response) => setPath(Path))
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
  const showPicturePreview = (path, RawPath) => {
    setPath(path);
    setRawPath(RawPath);
    setisShowPicturePreview(true);
  };
  const getProductType = async () => {
    setProductTypes(await FetchFunc("abi/post/ProductType.ashx"));
  };
  const getCorps = async () => {
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

    setCorps(await response.json());
  };
  const getSalesTypes = async () => {
    setSalesTypes(await FetchFunc("abi/post/SaleType.ashx"));
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
    document.getElementById("LayoutRight").style.width = "0px";
    document.getElementById("LayoutNote").style.width = "0px";
    setisShow(true);
    setCorpId(CorpId);
    GetWaybillAsync(articelid);
    getNotes(articelid);
    GetFilesAsync(articelid);
    setisShowTopBar(true);
    setArticelName(ArticelName);
    setCorpName(CorpName);
    setisShowLayoutNote(false);
    setisShowLayoutRight(false);
    setisShowCallOut(false);
    setisDetailActive(true);
    setisshowOrder(true);
    if (ActiveArticel === 0) {
      setActiveArticel(articelid);
      var FirstClicked = "Articel" + articelid;
      document.getElementById(FirstClicked).classList.add("ActiveArticelRow");
    } else {
      var PrevClicked = "Articel" + ActiveArticel;
      document.getElementById(PrevClicked).classList.remove("ActiveArticelRow");
      setActiveArticel(articelid);
      var Clicked = "Articel" + articelid;
      document.getElementById(Clicked).classList.add("ActiveArticelRow");
    }

    document.getElementById("SecondScreen").classList.remove("hide");
    document.getElementById("SecondScreen").classList.add("col-md-8");
    document.getElementById("FirstScreen").classList.add("col-md-4");
    document.getElementById("FirstScreen").classList.remove("col-md-12");
    var FullUrl = USER_SERVICE_URL + "Orders&ArticelId=" + articelid;
    setOrders(await FetchFunc(FullUrl));
    setisShow(false);
    setisshowOrder(true);
  };
  const GetWaybillAsync = async (ArticelId) => {
    setWaybill([]);
    setisShow(true);
    setWaybill(
      await FetchFunc(
        USER_SERVICE_URL + "Motion&MotionType=Multi&OrderId=" + ArticelId
      )
    );
    setisShow(false);
  };
  const GetFilesAsync = async (ArticelId) => {
    setFiles([]);
    var url = "/abi/post/OrderPictures.ashx?ArticelId=" + ArticelId;
    var data = await FetchFunc(url);
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

    await FetchFunc(url);
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
      ArticelId +
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

    FetchFunc(url);
    setProductNewLoading(false);
    GetOrders(ArticelId, ArticelName, CorpName);
  };
  const PostOrderUpdate = async () => {
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

    setisShowProductEdit(false);
    GetOrders(ArticelId, ArticelName, CorpName);
  };
  return (
    <div className="padd0 col-md-12">
      <TopBar
        Corps={Corps}
        isMobile={isMobile}
        CorpName={CorpName}
        ArticelId={ArticelId}
        chooseFile={chooseFile}
        CorpSearch={CorpSearch}
        toggleView={toggleView}
        filterCorp={filterCorp}
        closeTopBar={closeTopBar}
        isShowTopBar={isShowTopBar}
        LayoutNoteShow={LayoutNoteShow}
        productOutShow={productOutShow}
        NewProductShow={NewProductShow}
        LayoutRightShow={LayoutRightShow}
        productEditShow={productEditShow}
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
        <FilesComponent Files={Files} showPicturePreview={showPicturePreview} />
        <WayBillList Waybill={Waybill} isMobile={isMobile} />
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
      </div>
      <CreateArticelModal
        Corps={Corps}
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
      <ProductNewModal
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
      <ProductOutModal
        OrderList={Orders}
        ArticelName={ArticelName}
        ChangePiece={ChangePiece}
        ChangeWeight={ChangeWeight}
        CancelProduct={CancelProduct}
        SaveProductOut={SaveProductOut}
        ChangeWayBillId={ChangeWayBillId}
        isShowProductOut={isShowProductOut}
      />
      <ProductEditModal
        Color={Color}
        Piece={Piece}
        Typeid={TypeId}
        OrderId={OrderId}
        CancelEdit={CancelEdit}
        Dimensions={Dimensions}
        UpdateOrder={UpdateOrder}
        ProductTypes={ProductTypes}
        ProductTypeName={ProductTypeName}
        isShowProductEdit={isShowProductEdit}
        ChangeProductType={ChangeProductType}
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
      />
      <PicturePreview
        Path={Path}
        Articel={ArticelName}
        isRotating={isRotating}
        RotatePicture={RotatePicture}
        hidePicturePreview={hidePicturePreview}
        isShowPicturePreview={isShowPicturePreview}
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
