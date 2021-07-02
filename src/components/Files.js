import React from "react";

export default function Files(props) {
  return (
   <div  >
   {props.Files.map((f) => ( 
 
       <div key={f.id}  
       data-url={f.Path}
       data-ext=".ini" className="col-md-12 ini padd0 File">

 

           <div style= {{ backgroundImage: `url(${"https://statu.space/abi/thumbs/"+f.Path})` }}

className="col-md-1 padd0 FileIco filepreview col-xs-2" > 
           </div>



           <div className="col-md-6 col-xs-10 text-left">
               <a  className="FileLink" 
               href="/dosyalar/47661c3b-382c-4108-a047-d3f1fcc9f4ab.ini">{f.FileName}</a></div> 


               </div>


      ))}
 </div>
  );
}
