import axios from "axios";
import React, { useEffect, useState } from "react";
import { detailOptions } from "../helpers/constants";

const SideDetail = ({ detailId, setShowDetail }) => {
  console.log("detay sayfası", detailId);
  const [detailInfo, setDetailInfo] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        detailOptions
      )
      .then((res) => {
        console.log("res", res);
        setDetailInfo(res.data);
      })
      .catch((err) => console.log(err));
  }, [detailId]);
  console.log(detailInfo);
  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <p className="close">
          <span onClick={() => setShowDetail(false)}>X</span>
        </p>
        {!detailInfo ? (
          <p>Loading...</p>
        ) : (
          <>
            <h2>{detailInfo.aircraft.model.text}</h2>
            <h2>{detailInfo.aircraft.model.code}</h2>
            <p>Tail Number:{detailInfo.aircraft.registration}</p>
            <img src={detailInfo.aircraft.images.large[0].src} alt="" />
            <p>Company:{detailInfo.airline.name}</p>
            <p>
              <span>Departure:</span>
              <a href={detailInfo.airport.origin.website}>
                {detailInfo.airport.origin.name}
              </a>
            </p>
            <p>
              <span>Destination:</span>
              <a href={detailInfo.airport.destination.website}>
                {detailInfo.airport.destination.name}
              </a>
            </p>
            <p>
              <span>Condition:</span>
              <span className="status">{detailInfo.status.text}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default SideDetail;
