const app = require("express")();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

let data = "";

const groupData = {};

io.on("connection", (socket) => {
  socket.on("send-changes", (text, id) => {
    groupData[id] = text;
    io.emit(`receive-changes-${id}`, text);
  });
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  if (!(id in groupData)) {
    groupData[id] = data;
  }
  res.send({ data: groupData[id] });
});

server.listen(3001, () => {
  console.log("listening on *:3001");
});
