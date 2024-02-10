import "dotenv/config";
import dbConnection from "./src/config/dbConnection.js";
import { app } from "./index.js";

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Optics-Management-System Api Successfully Worked");
});
app.listen(PORT, () => {
  dbConnection();
  console.log("Server Connected On Port: " + PORT);
});
