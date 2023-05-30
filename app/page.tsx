"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Coin";

export default function Home() {
  const [coins, setCoins] = useState<DataResponse[]>();
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins?.filter((coin) =>
  coin?.name.toString().toLowerCase().includes(search.toLowerCase())
);
console.log(filteredCoins)
console.log(typeof filteredCoins)

  return (
    <main className={styles.main}>
      <div className="header">
        <h1 className="headerTitle">
          <FontAwesomeIcon icon={faMoon} className="moonIcon" />
          Crypto Tracker
        </h1>

        <form action="">
          <input
            onChange={handleChange}
            type="text"
            className="searchInput"
            placeholder="Find a Coin"
          />
        </form>
      </div>

      <div className="coinsContainer">
        {filteredCoins?.map(coin => (
          <Coin
            key={coin?.id}
            name={coin?.name}
            current_price={coin?.current_price}
            symbol={coin?.symbol}
            market_cap={coin?.market_cap}
            volume={coin?.total_volume}
            image={coin?.image}
            price_change_percentage_24h={coin?.price_change_percentage_24h}
          />
        ))}
      </div>
    </main>
  );
}
