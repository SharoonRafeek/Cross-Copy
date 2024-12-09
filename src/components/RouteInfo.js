import React from "react";
import { useLocation } from "react-router-dom";
import QRCode from "qrcode.react";

const RouteInfo = () => {
  const location = useLocation();
  const url = "https://crosscopy.xyz" + location.pathname;
  return (
    <div className="text-xl text-center space-y-14 lg:pt-0 pt-10">
      <h3>
        Go to{" "}
        <a href={location.pathname} className="bg-cyan-600">
          {url}
        </a>
      </h3>
      <h3>Or scan</h3>
      <div className="flex flex-col items-center gap-5">
        <QRCode value={url} />
        <a href="https://www.buymeacoffee.com/SharoonRafeek" target="_blank"><img className="w-[150px]" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="" /></a>

      </div>
    </div>
  );
};

export default RouteInfo;
