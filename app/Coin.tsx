import Image from "next/image";
import React from "react";
import './coin.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";

const Coin = ({
  key,
  name,
  current_price,
  symbol,
  market_cap,
  volume,
  image,
  price_change_percentage_24h,
}: CoinProps) => {
  return (
    <div className="cryptoCoin" key={key}>
      <div className="cryptoImageCont">
        <Image src={image} alt={`${name}`} className="CoinLogo" fill />
      </div>
      <div className="coinNameWrap">
        <h1 className="coinName">{name}</h1>
        <p className="coinSymbol">{symbol}</p>
      </div>
      <p className="coinPrice">${current_price.toPrecision(5)}</p>
      <p className="coinMarketcap">
        Market Cap: ${market_cap.toLocaleString()}
      </p>
      <p className="coinVolume">Volume (24H): ${volume.toLocaleString()}</p>

      {price_change_percentage_24h < 0 ? (
        <div className="priceContainerDown">
          <FontAwesomeIcon icon={faArrowTrendDown} size="2xs" />
          <p className="priceChange">
            {price_change_percentage_24h?.toFixed(2)}%
          </p>
        </div>
      ) : (
        <div className="priceContainerUp">
          <FontAwesomeIcon icon={faArrowTrendUp} size="2xs" />
          <p className="priceChange">
            {price_change_percentage_24h?.toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  );
};

export default Coin;
