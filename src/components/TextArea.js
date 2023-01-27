import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";
import axios from "axios";

const socket = io("http://localhost:3001");

const TextArea = () => {
  const { route: routeId } = useParams();
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/${routeId}`)
      .then((x) => x.json())
      .then((content) => {
        setText(content.data);
      });

    const eventName = `receive-changes-${routeId}`;
    socket.on(eventName, (data) => {
      setText(data);
    });

    return () => {
      socket.off(eventName);
    };
  });

  useEffect(() => {
    const handleTabClose = (e) => {
      console.log("beforeunload event triggered");
      const data = { id: routeId };

      axios
        .post("http://localhost:3001", data)
        .catch((err) => console.log(err));
    };

    window.addEventListener("onunload", handleTabClose);

    return () => {
      window.removeEventListener("onunload", handleTabClose);
    };
  }, [routeId]);

  const handleChange = (e) => {
    setText(e.target.value);
    socket.emit("send-changes", e.target.value, routeId);
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
            <h4 className="px-3 pt-1 text-white text-xl font-bold">Copy</h4>
          </button>
        </div>
      </form>
    </div>
  );
};

export default TextArea;
