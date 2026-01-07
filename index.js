import express from "express"
import { connectDB } from "./utils/db.js";
import studentRoutes from "./routes/student.routes.js"
import cors from 'cors'
const app = express();
const port = 3000;



app.use(express.json());
app.use(cors())


connectDB();

app.get('/', (req, res) => {
  res.send('Hello World! Your Express server is running.');
});

app.use("/api/students", studentRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});