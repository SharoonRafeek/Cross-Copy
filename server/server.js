const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000  ",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("send-changes", (text) => {
    console.log(text);
    socket.broadcast.emit("receive-changes", text);
  });
});
