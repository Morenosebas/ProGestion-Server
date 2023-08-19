import mongoose from "mongoose";

mongoose
  .set("strictQuery", false)
  .connect(String(process.env.URI_MONGODB))
  .then((data) =>
    console.log(
      "DB esta conectada:",
      data.connection.name,
      " en el puerto: ",
      data.connection.port
    )
  )
  .catch((err) => console.error("Error al conectar a la DB: ", err));

export default mongoose;
