import React from "react";
import { useLocation } from "react-router-dom";

const RouteInfo = () => {
    const location = useLocation();
    return (
        <div className="text-xl text-center space-y-14">
            <h3>
                Go to <a className="bg-cyan-600">www.crosscopy.com{location.pathname}</a>
            </h3>
            <h3 className="">
                Or scan
            </h3>
        </div>
    )
};

export default RouteInfo;
