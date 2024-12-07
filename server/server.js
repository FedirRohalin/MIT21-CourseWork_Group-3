import express from 'express';
import env from './env.js';
import router from './routes/shopifyAPI.js';
import cors from 'cors';

const app = express();

app.use(cors());

const PORT = env.PORT;

app.use(express.json());

app.use('/shopify-admin', router);

app.listen(PORT, () => {
    console.log(`APP listening on port #${PORT}`);
});