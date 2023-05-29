type DataResponse = {
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  circulating_supply: number;
  current_price: number;
  fully_diluted_valuation: number;
  high_24h: number;
  id: string;
  image: string;
  last_updated: string;
  low_24h: number;
  market_cap: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  market_cap_rank: number;
  max_supply: number;
  name: string;
  price_change_24h: number;
  price_change_percentage_24h: number;
  roi: null;
  symbol: string;
  total_supply: number;
  total_volume: number;
};

type CoinProps = {
    key: string
    name: string
    current_price: number
    symbol: string
    market_cap: number
    volume: number
    image: string
    price_change_percentage_24h: number
    map?: function
    
    
    }

    type KeypressProps = {
      handleChange: () => void
    }


    type filteredCoinsType = ['string',DataResponse]


    