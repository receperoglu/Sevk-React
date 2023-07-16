import React from "react";
import { Url } from "./../../components/Tools/Urls";
export default function Download({ File }) {

  const download = async () => {
    try {
      const response = await fetch(Url + File.Path, { mode: 'no-cors' });
      const blob = await response.blob();

      // Dosyayı indirmek için bir URL nesnesi oluşturun
      const downloadUrl = URL.createObjectURL(blob);

      // Dosyayı indirme bağlantısını oluşturun
      const link = document.createElement("a");
      link.href = downloadUrl;
      link.download = File.FileName + "." + File.ext;
      link.click();

      // Kullanılmayan URL nesnesini temizleyin
      URL.revokeObjectURL(downloadUrl);
    } catch (error) {
      console.error("Dosya indirilemedi: ", error);
    }
  };
  return (
    <span onClick={() => download()} target="blank">
      <i data-icon-name="Download" className="FabricMDL2Icons">
        
      </i>
    </span>
  );
}