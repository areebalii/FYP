import dotenv from 'dotenv';
import connectDb from './database/connectDb.js';
import { app } from './app.js';

dotenv.config();


connectDb()
.then(() => {
  app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || 5000}`);
  });
})
.catch((error) => {
  console.error("Failed to connect to the database:", error);
  process.exit(1);
});

