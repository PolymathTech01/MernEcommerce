import express from 'express';
import { config } from 'dotenv';
import colors from 'colors';
import connectDB from './Config/db.js';
import productRoutes from './Routes/product.routes.js';
import { notFound, errorHandler } from './Middleware/error.middleware.js';
config();
connectDB();
const app = express();
const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;
app.listen(PORT, () =>
  console.log(`Server Listening on port ${PORT} in ${MODE} mode`.yellow.bold)
);
app.get('/', (req, res) => {
  res.send('Details fetched successfully');
});
app.use('/api/products', productRoutes);
app.use(notFound);
app.use(errorHandler);
