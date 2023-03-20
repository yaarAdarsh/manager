import React from "react";

function HomePage() {
    const myStyle = {
        backgroundColor: "#256D85",
    }
  return (
    <>
      <div style={myStyle}>
        <div className="mainHeading">
          <h1 style={{ fontSize: "75px" }}>Manage yourself here...</h1>
        </div>
        <div className="mainHeadingContent">
          Believe or not but a managed <br />
          day is more productive than <br />
          unmanaged. Manage your day <br />
          and track your performance <br />
          here
        </div>
        <div className="mainPageLists">
          <ul>
            <li>Relax</li>
            <li>Keep Calm</li>
            <li>Be Productive</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default HomePage;
