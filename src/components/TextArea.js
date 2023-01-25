import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

const socket = io("http://localhost:3001");

const TextArea = () => {
  const { route: id } = useParams();
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("receive-changes", (data) => {
      setText(data);
    });

    return () => {
      if (socket.readyState === 1) socket.disconnect();
    };
  }, [text]);

  socket.emit("join-room", id);

  const handleChange = (e) => {
    setText(e.target.value);
    socket.emit("send-changes", e.target.value, id);
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    copy(text);
    alert(`You have copied "${text}"`);
  };

  return (
    <div className="w-auto lg:w-500">
      <form>
        <textarea
          onChange={handleChange}
          value={text}
          className="w-full text-black bg-gray-100 ring-cyan-600 border-4 outline-none p-3 border-cyan-600"
          rows="12"
          placeholder="Paste your text here..."
        ></textarea>
        <div>
          <button
            className="bg-cyan-600 hover:bg-cyan-500"
            onClick={copyToClipboard}
          >
            {" "}
            <h4 className="px-3 pt-1 text-white text-xl font-bold">Copy</h4>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextArea;
