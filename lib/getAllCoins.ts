async function getAllCoins() {
  const res = await fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en"
  );


  if(!res.ok) throw new Error ('failed to get coins')
  return res.json();
}

export default getAllCoins;
