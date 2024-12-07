import express from 'express';
import env from '../env.js';


const router = express.Router();

const SHOPIFY_ADMIN_API_KEY = env.SHOPIFY_ADMIN_API_KEY;
const url = 'https://course-work-mit-21-g3.myshopify.com/admin/api/2024-10/products.json'

router.get('/', async (req, res) => {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'X-Shopify-Access-Token': SHOPIFY_ADMIN_API_KEY,
            },
        });

        if (!response.ok) {
            return res.status(response.status).json({ error: 'Failed to fetch data from Shopify' });
        }

        const data = await response.json();

        res.status(200).json(data); // Send data back to the client

    } catch (error) {
        console.error('Error fetching data from Shopify:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

export default router;
