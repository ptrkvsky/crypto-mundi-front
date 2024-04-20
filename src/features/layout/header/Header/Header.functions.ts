export async function updateBitcoinPrice(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://api.coinbase.com/v2/prices/spot?currency=USD",
    );

    if (!response.ok) {
      console.error(`Error fetching Bitcoin price: ${response.statusText}`);
      return null;
    }

    const data = await response.json();
    const price = data?.data?.amount;

    if (price === undefined) {
      console.error("Bitcoin price not found in response");
      return null;
    }

    return price;
  } catch (error) {
    console.error(`Error fetching Bitcoin price: ${error}`);
    return null;
  }
}
