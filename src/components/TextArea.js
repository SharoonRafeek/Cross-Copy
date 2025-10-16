import React, { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { onValue, ref, set } from "firebase/database";
import Alert from "./Alert";
import { IoCopyOutline, IoCheckmarkDone } from "react-icons/io5";
import { MdClear } from "react-icons/md";

const TextArea = () => {
  const { route: routeId } = useParams();
  const [text, setText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const routeRef = ref(db, routeId);
    onValue(routeRef, (snapshot) => {
      const data = snapshot.val();
      if (data && data.text !== undefined) {
        setText(data.text);
      }
    });
  }, [routeId]);

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    set(ref(db, routeId), {
      text: newText,
    });
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    copy(text);
    setCopied(true);
    setShowAlert(false);
    setTimeout(() => setShowAlert(true), 100);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = (e) => {
    e.preventDefault();
    setText("");
    set(ref(db, routeId), {
      text: "",
    });
  };

  return (
    <section className="w-full" aria-labelledby="text-sharing-section">
      <h2 id="text-sharing-section" className="sr-only">Text Sharing Area</h2>

      <form>
        <label htmlFor="shared-text" className="sr-only">Shared Text</label>
        <textarea
          id="shared-text"
          onChange={handleChange}
          value={text}
          className="w-full text-gray-900 bg-white border-2 border-gray-600 focus:border-cyan-500 outline-none p-4 rounded-md resize-none transition-colors duration-200"
          rows="14"
          placeholder="Paste your text here..."
          aria-label="Shared text content"
        ></textarea>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            className={`flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-white text-base shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${copied
              ? 'bg-green-600 hover:bg-green-500'
              : 'bg-cyan-600 hover:bg-cyan-500'
              }`}
            onClick={copyToClipboard}
            aria-label="Copy text to clipboard"
            disabled={!text}
          >
            {copied ? (
              <>
                <IoCheckmarkDone size={20} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <IoCopyOutline size={20} />
                <span>Copy</span>
              </>
            )}
          </button>

          <button
            type="button"
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 transition-all duration-300 transform hover:scale-105 active:scale-95 px-6 py-3 rounded-md font-semibold text-white text-base shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            onClick={handleClear}
            aria-label="Clear text"
            disabled={!text}
          >
            <MdClear size={20} />
            <span>Clear</span>
          </button>
        </div>
      </form>

      {showAlert && <Alert onClose={() => setShowAlert(false)} />}
    </section>
  );
};

export default TextArea;
