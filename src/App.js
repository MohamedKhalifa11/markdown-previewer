import "./App.css";
import React, { useState } from "react";
import { marked } from "marked";
import useLocalStorage from "./components/hooks/useLocalStorage";
import DocsTab from "./components/DocsTab";

const App = () => {
  const [code, setCode] = useLocalStorage("marckdown", "## Hello");
  const [compiled, setCompiled] = useState(marked.parse(code));
  const [view, setView] = useState("markdown");

  const openMD = () => {
    console.log(0);
    setView("markdown");
  };

  const openPreview = () => {
    console.log(0);
    setView("preview");
  };
  const openDocs = () => {
    console.log(0);
    setView("docs");
  };

  const handleChange = (e) => {
    setCode(e.target.value);
    setCompiled(marked.parse(e.target.value));
  };

  return (
    <>
      <h1>MarkDown Previewer React App</h1>
      <div className="container">
        <div className="btns">
          <button onClick={openMD} className={view === "markdown" && "active"}>
            MarkDown
          </button>
          <button
            onClick={openPreview}
            className={view === "preview" && "active"}
          >
            Preview
          </button>
          <button onClick={openDocs} className={view === "docs" && "active"}>
            Docs
          </button>
        </div>
        {view === "markdown" && (
          <div>
            <textarea onChange={handleChange} value={code} />
          </div>
        )}
        {view === "preview" && (
          <div>
            <textarea value={compiled} readOnly />
          </div>
        )}
        {view === "docs" && (
          <div>
            <DocsTab />
          </div>
        )}
      </div>
    </>
  );
};

export default App;
