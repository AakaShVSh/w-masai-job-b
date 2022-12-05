const PORT = process.env.PORT || 3000;
const path = require("path");
const jsonserver = require("json-server");
const server = jsonserver.create();
const router = jsonserver.router(path.join(__dirname,"db.json")); 
const middlewares = jsonserver.defaults();
server.use(middlewares);
server.use(jsonserver.bodyParser);
server.use("/api",router);
server.listen(PORT, () => console.log("Running on port 3000"))

