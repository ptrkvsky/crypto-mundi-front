export async function updateBitcoinPrice(): Promise<string> {
  const response = await fetch(
    "https://api.coinbase.com/v2/prices/spot?currency=USD",
  );
  const data = await response.json();

  return data?.data?.amount;
}
