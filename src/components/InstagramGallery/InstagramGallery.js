import React, { useEffect, useState } from "react";
//import fetch from "isomorphic-fetch";
import "./css/instagramGallery.css";

function InstagramGallery() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const [instagramGalleryObj, setinstagramGalleryObj] = useState([]);
  const url =
    "https://graph.instagram.com/me/media?fields=id,media_url,media_type&access_token=IGQVJXTHMtR1BmaHVMalp1ZAWg1aFVMYUNiSTRWNmpKYUV6TDRNMWFwR21TV2trLVhnSzJSMmt0emdFZAktwMTVyWXE2T1ZAkWTFQZAmtOVDVleXBpek9lZAk5nRm44MVJPYlFncG9pVk1n";

  const getInstagramGallery = async () => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setinstagramGalleryObj(json.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getInstagramGallery();

    // const interval = setInterval(() => {
    //   getInstagramGallery();
    // }, 10000);

    // return () => clearInterval(interval);
  }, []);
  return (
    <div className="igGalleryContainer">
      <div className="igImgDivWrapper">
        {instagramGalleryObj
          ? instagramGalleryObj.map((jsons, i) => {
              if (
                jsons.media_type === "IMAGE" ||
                jsons.media_type === "CAROUSEL_ALBUM"
              ) {
                if (i <= 11) {
                  return (
                    <img
                      className={`igImg image-${
                        imageLoaded ? "visible" : "hidden"
                      }`}
                      key={jsons.id}
                      src={jsons.media_url}
                      onLoad={() => setImageLoaded(true)}
                      alt=""
                    />
                  );
                }
              }
            })
          : console.log("Not Available")}
      </div>
    </div>
  );
}
export default InstagramGallery;
