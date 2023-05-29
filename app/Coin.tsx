import Image from "next/image";
import React from "react";



const Coin = ({name, symbol}:CoinProps) => {
  return (
    <div className="cryptoCoin">
      <div className="cryptoImageCont">
        <Image
          src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
          alt=""
          className="CoinLogo"
          fill
        />
      </div>
      <div className="coinNameWrap">
        <h1 className="coinName">{name}</h1>
        <p className="coinSymbol">{symbol}</p>
      </div>
      <p className="coinPrice">$26k</p>
      <p className="coinMarketcap">MArket CAp: $1 T</p>
      <p className="coinVolume">Volume (24H): $69, 024, 951, 198</p>
    </div>
  );
};

export default Coin;
