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

  const handleClick = (e) => {
    e.preventDefault();
    setText("");
    set(ref(db, routeId), {
      text: "",
    });
  };

  return (
    <section className="w-auto lg:w-500" aria-labelledby="text-sharing-section">
      <h2 id="text-sharing-section" className="sr-only">Text Sharing Area</h2>
      <form>
        <label htmlFor="shared-text" className="sr-only">Shared Text</label>
        <textarea
          id="shared-text"
          onChange={handleChange}
          value={text}
          className="w-full text-black bg-gray-100 ring-cyan-600 border-4 outline-none p-3 border-cyan-600"
          rows="12"
          placeholder="Paste your text here..."
          aria-label="Shared text content"
        ></textarea>
        <div className="mt-3">
          <button
            type="button"
            className="bg-cyan-600 hover:bg-cyan-500 transition-colors duration-200"
            onClick={copyToClipboard}
            aria-label="Copy text to clipboard"
          >
            <span className="px-3 pt-1 text-white text-xl font-bold">Copy</span>
          </button>
          <button
            type="button"
            className="ml-5 bg-cyan-600 hover:bg-cyan-500 transition-colors duration-200"
            onClick={handleClick}
            aria-label="Clear text"
          >
            <span className="px-3 pt-1 text-white text-xl font-bold">Clear</span>
          </button>
        </div>
      </form>
      {showAlert && <Alert onClose={() => setShowAlert(false)} />}
    </section>
  );
};

export default TextArea;
