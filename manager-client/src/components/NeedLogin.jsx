import React from "react";
import { Link } from "react-router-dom";

function NeedLogin() {
  return (
    <>
      <div className="needLogin">
        <div>
          <h1 className="needLoginHeading">You need to Login First...</h1>
          <Link className="needLoginLink" to="/login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default NeedLogin;
