import React from "react";

export default function CallOut(props) {
  return (
    <div className="ms-ContextualHost-main">
      
      <div className="ms-Callout ms-Callout--arrowLeft ms-Callout--OOBE">
      
        <div className="ms-Callout-main">
        <i data-icon-name="Cancel" onClick={() => props.CancelCallOut()}  
                 aria-hidden="true" className="pointer ms-Button-icon icon-73 fright cwhite"></i>
          <div className="ms-Callout-header">
          
            <p className="ms-Callout-title">
              {props.TotalOutPiece} Adet.
              {props.LoopCount} Kez Sevk Edildi.
              <br />
              {props.Dimensions} {props.Color} <br />
              {props.ProductTypeName}
            </p>
          </div>
          <div className="ms-Callout-inner">
            <div className="ms-Callout-content">
              <div className="ms-Callout-subText">
                <div className={props.calloutloading
                      ? ''
                      : 'opaq0 hide'}>
                        <br/> <br/> <br/> <br/>
              <div  
                    className={props.calloutloading
                      ? 'prf ProgressSpinnerFlat'
                      : 'opaq0 hide'}
                   role="progressbar">
                   <div aria-hidden="true">•</div>
                   <div aria-hidden="true">•</div>
                   <div aria-hidden="true">•</div>
                   <div aria-hidden="true">•</div>
                  
                    
               </div>
               <br/> <br/> <br/><br/>
               </div>
                <table  className={props.calloutloading
                      ? 'opaq0 hide'
                      : 'table padd0  table-hover alert alert-primary'} >
                  <thead>
                    <tr className="alert alert-success">
                      <td>Adet</td>
                      <td>Ağırlık</td>
                      <td>Tarih</td>
                      <td>İrsaliye</td>
                    </tr>
                  </thead>
                  <tbody>
                    {props.OneWayBill.map((w) => (
                      <tr key={w.id}>
                        <td>
                          <b> </b> {w.Piece} 
                        </td>
                        <td>{w.Weight} KG </td>
                        <td> {w.CreatedDate} </td>
                        <td>
                          <span
                            onClick={() => this.GetWayBillPhoto(w.WayBillId)}
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
  );
}
