import { extractProductDetails } from "../helper/miscellaneous";

async function fetchShopifyData() {
  try {
    const response = await fetch('http://localhost:1337/shopify-admin', {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();

    return extractProductDetails(data);
  } catch (error) {
    console.error('Failed to fetch data from the server:', error);
  }
}
export default fetchShopifyData