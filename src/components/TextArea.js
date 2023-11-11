import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { onValue, ref, set } from "firebase/database";
import Alert from "./Alert";

const TextArea = () => {
  const { route: routeId } = useParams();
  const [text, setText] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const routeRef = ref(db, routeId);
    onValue(routeRef, (snapshot) => {
      setText(snapshot.val().text);
    });
  }, [routeId]);

  const handleChange = (e) => {
    setText(e.target.value);
    set(ref(db, routeId), {
      text: e.target.value,
    });
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    copy(text);
    setShowAlert(false);
    setTimeout(() => setShowAlert(true), 100);
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
      {showAlert && <Alert onClose={() => setShowAlert(false)} />}
    </div>
  );
};

export default TextArea;
