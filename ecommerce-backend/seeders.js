import mongoose from 'mongoose';
import { config } from 'dotenv';
import colors from 'colors';
import users from './Data/users.js';
import products from './Data/products.js';
import User from './Models/user.model.js';
import Order from './Models/order.model.js';
import Product from './Models/products.model.js';
import connectDB from './Config/db.js';

config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);

    console.log('Data Imported'.green.inverse);
    console.log(adminUser);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.inverse);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await Product.deleteMany();
    await Order.deleteMany();
    await User.deleteMany();

    console.log('Data Destroyed'.blue.inverse);
    process.exit();
  } catch (error) {
    console.log(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') destroyData();
else importData();
