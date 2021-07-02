import React from "react";

export default function CreateArticelModal(props) {
  return (
    <div id="ProductModal" className="ms-Layer ms-Layer--fixed layer-351">
      <div className="ms-Fabric ms-Layer-content content-120">
        <div role="dialog">
          <div className="ms-Modal is-open root-345">
            <div className="ms-Overlay ms-Overlay--dark root-414"></div>
            <div className="ms-Dialog-main HudldIlvnIFz-AVg_Bopj main-412">
              <div className="ms-Modal-scrollableContent scrollableContent-413">
                <div>
                  <i
                    data-icon-name="Cancel"
                    onClick={() => props.CancelCreateArticel()}
                    role="presentation"
                    className="pointer ms-Button-icon icon-73"
                  >
                    
                  </i>
                </div>
                <div className="ProductModalSub ProductOut">
                  <div>
                    <h4>Yeni Artikel Oluştur</h4>

                    <br />
                  </div>
                  <hr />
                  <div className="col-md-12 ">
                    <div className="col-md-2 ">
                      <span>Firma</span>
                    </div>
                    <div className="col-md-10 ">
                      <select
                        className="OneDriveInput form-control"
                        onChange={(e) => props.ChangeCorpId(e.target.value)}
                      >
                        {props.Corps.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.Name}
                          </option>
                        ))}
                      </select>
                    </div>{" "}
                  </div>
                  <div className="col-md-12">
                    <div className="col-md-2 fleft">
                      <span>Satış Tipi</span>
                    </div>
                    <div className="col-md-10 fleft">
                      <select
                        className="OneDriveInput form-control"
                        onChange={(e) => props.ChangeSalesType(e.target.value)}
                      >
                        {props.SalesTypes.map((p) => (
                          <option key={p.id} value={p.id}>
                            {p.Name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-2 fleft">
                      <span>Artikel Adı</span>
                    </div>
                    <div className="col-md-10 fleft">
                      <input
                        type="text"
                        onChange={(e) =>
                          props.ChangeArticelName(e.target.value)
                        }
                        className=" form-control"
                      />
                    </div>
                  </div>

                  <div className="col-md-12 text-right fleft">
                    <div
                      className={
                        props.CreateArticelLoading
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

                    <span
                      className={
                        props.CreateArticelLoading
                          ? "hide"
                          : "Transfer TransferBTN ms-Button ms-Button--primary"
                      }
                    >
                      <span
                        onClick={() => props.SaveArticel()}
                        className="transfersavetext"
                      >
                        {" "}
                        Kaydet{" "}
                      </span>
                    </span>
                  </div>

                  <hr />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}