import { app, server } from "./App";

server.listen(app.get("port"), () => {
  console.log("====================================");
  console.log(`Servidor en el puerto ${app.get("port")}`);
  console.log(`http://localhost:${app.get("port")}`);
  console.log(`http://${getLocalIPAddress()}:${app.get("port")}`);
  console.log("====================================");
});

function getLocalIPAddress() {
  const interfaces = require("os").networkInterfaces();
  for (const interfaceName in interfaces) {
    const addresses = interfaces[interfaceName];
    for (const address of addresses) {
      if (address.family === "IPv4" && !address.internal) {
        return address.address;
      }
    }
  }
}
