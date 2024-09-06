import React, { useState } from "react";
import ReactDOM from "react-dom";
import SignatureCanvas from "react-signature-canvas";
import "./App.css";

function App() {
  const [signature, setSignature] = useState();
  const [result, setResult] = useState(null);
  const [penColor, setPenColor] = useState("green");
  const handleSave = () => {
    const res = signature.getTrimmedCanvas().toDataURL("image/jpeg");
    setResult(res);
  };
  const handleClear = () => {
    signature.clear();
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          width: "100%",
        }}
      >
        <h1>Generate Digital Signature in React JS</h1>
        <div style={{ margin: "10px" }}>
          <label>Choose Color: </label>
          <select
            id="penColor"
            value={penColor}
            onChange={(e) => setPenColor(e.target.value)}
          >
            <option value="green">Green</option>
            <option value="black">Black</option>
            <option value="red">Red</option>
          </select>
          <div
            style={{
              height: "20px",
              width: "20px",
              borderRadius: "50%",
              backgroundColor: `${penColor}`,
            }}
          ></div>
        </div>
        <div
          style={{
            width: 500,
            height: 200,
            border: `2px solid ${penColor}`,
          }}
        >
          <SignatureCanvas
            ref={(ref) => {
              setSignature(ref);
            }}
            penColor={penColor}
            backgroundColor="rgba(255,255,255,1)"
            canvasProps={{ width: 500, height: 200, className: "sigCanvas" }}
          />
        </div>
        <div>
          <button style={{ margin: "5px" }} onClick={handleClear}>
            Clear
          </button>
          <button onClick={handleSave}>Save</button>
        </div>
        {result && (
          <div style={{ margin: "20px" }}>
            <img src={result} alt="Result" />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
