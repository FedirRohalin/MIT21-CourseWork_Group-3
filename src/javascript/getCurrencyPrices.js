const getCurrencyPrices = async (cryptoSymbols) => {
  const apiKey = '15&26AlcO2213wZpS642V88$';
  const apiUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoSymbols.join(',')}&tsyms=USDT&api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    const currencyDetails = {
      "BTC": { title: "Bitcoin" },
      "ETH": { title: "Ethereum" },
      "USDT": { title: "Tether" },
      "ADA": { title: "Cardano" },
      "BNB": { title: "Binance Coin" },
      "XRP": { title: "XRP" },
      "SOL": { title: "Solana" },
      "DOT": { title: "Polkadot" },
      "LTC": { title: "Litecoin" },
      "DOGE": { title: "Dogecoin" },
      "MATIC": { title: "Polygon" },
      "TRX": { title: "TRON" },
      "SHIB": { title: "Shiba Inu" },
      "LINK": { title: "Chainlink" },
      "BCH": { title: "Bitcoin Cash" },
    };

    const currencies = {};
    for (const [crypto, values] of Object.entries(data)) {
      currencies[crypto] = {
        title: currencyDetails[crypto]?.title || crypto,
        price: values.USDT,
      };
    }

    return { currencies };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    throw error;
  }
};

export default getCurrencyPrices;
