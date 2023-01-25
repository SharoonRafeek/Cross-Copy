const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000  ",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  socket.on("join-room", (id) => {
    socket.join(id);
  });
  socket.on("send-changes", (text, id) => {
    socket.to(id).emit("receive-changes", text);
  });
});
