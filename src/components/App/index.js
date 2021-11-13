import React from "react";
import useMatchMedia from "../../customHooks/useMatchMedia";

function App() {
    const isMobile = useMatchMedia();

    return (
      <div className={`app ${isMobile ? "mobile" : "desktop"}`}>
        <h1>React Css boilerplate </h1>
      </div>
  );
}

export default App;
