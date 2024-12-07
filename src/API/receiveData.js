async function fetchShopifyData() {
  try {
    const response = await fetch('http://localhost:1337/shopify-admin', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Shopify Data:', data);

    return data; // Use the data in your app (e.g., store it in a variable or state)
  } catch (error) {
    console.error('Failed to fetch data from the server:', error);
  }
}
export default fetchShopifyData