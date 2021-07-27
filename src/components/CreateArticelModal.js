import React, { useEffect, useState } from "react";
import ProgressBar from "./Tools/ProgressBar";
import CancelBtn from "./Tools/CancelBtn";
import BlueButton from "./Tools/BlueButton";
import CreateOption from "./Tools/CreateOption";
import LocalStore from "./Tools/LocalStore";
export default function CreateArticelModal({
  IsCreateArticelShow,
  CancelCreateArticel,
  ChangeCorpId,
  ChangeSalesType,
  SalesTypes,
  ChangeArticelName,
  isShowCreateArticel,
  SaveArticel,
}) {
  const [Corps, setCorps] = useState([]);
  useEffect(() => {
    const getCorps = async () => {
      if (LocalStore.check("Corps")) {
        setCorps(LocalStore.get("Corps"));
      } else {
        var CorpUrl = "abi/post/CorpList.ashx";
        const response = await fetch(CorpUrl, {
          method: "GET",
        });
        var CorpsJson = await response.json();
        setCorps(CorpsJson);
        localStorage.setItem("Corps", JSON.stringify(CorpsJson));
      }
    };
    getCorps();
  }, []);
  return IsCreateArticelShow ? (
    <div id="ProductModal" className="ms-Layer ms-Layer--fixed layer-351">
      <div className="root-345">
        <div className="ms-Dialog-main  main-412">
          <CancelBtn click={CancelCreateArticel} />
          <div className="ProductModalSub ProductOut">
            <h4>Yeni Artikel Oluştur</h4>
            <hr />
            <CreateOption change={ChangeCorpId} Json={Corps} />
            <div className="padd0 col-xs-12 fleft">
              <span> Tipi</span>
              <CreateOption change={ChangeSalesType} Json={SalesTypes} />
            </div>
            <div className="padd0 col-xs-12 ">
              <span>Artikel </span>
              <input
                type="text"
                onChange={(e) => ChangeArticelName(e.target.value)}
                className="ms-TextField-field"
              />
            </div>
            {Proccess(isShowCreateArticel, SaveArticel)}
            <hr />
          </div>
        </div>
      </div>
    </div>
  ) : null;
}
function Proccess(isShowCreateArticel, SaveArticel) {
  return (
    <div className="padd0 col-xs-12 text-right fleft">
      <ProgressBar isVisible={isShowCreateArticel} />
      {isShowCreateArticel ? null : (
        <BlueButton click={SaveArticel} text="Kaydet" />
      )}
    </div>
  );
}
