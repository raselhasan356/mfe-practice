import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { getAuth, isAuthenticated, removeAuth } from "./utils/functions";

export default function NavBar() {
  const [authStatus, setAuthStatus] = useState(null);
  const [userName, setUserName] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    isAuthenticated().then((status) => {
      setAuthStatus(status);
      if (status) {
        setUserName(getAuth().username);
      }
    });
  }, [authStatus]);

  function handleLogoutClick() {
    removeAuth();
    setAuthStatus(false);
  }

  function handleLoginClick() {
    navigate("/login");
  }

  return (
    <div className="flex  p-2 justify-between items-center bg-indigo-900">
      {authStatus === null ? (
        <p>Loading...</p>
      ) : authStatus === true ? (
        <>
          <p className="space-x-2">You are logged-in!</p>
          <div className="flex justify-center space-x-2 items-center">
            <p>
              Hi <strong>{userName}</strong>
            </p>
            <button onClick={() => handleLogoutClick()}>Logout</button>
          </div>
        </>
      ) : (
        <>
          <p>You are not logged in!</p>
          <button onClick={handleLoginClick}>Goto login</button>
        </>
      )}
    </div>
  );
}
