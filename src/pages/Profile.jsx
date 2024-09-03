import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/context/Authentication";

const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.Logout();
    navigate("/");
  };

  return (
    <>
      <h4 className="header">Welcome {auth.user.username}!</h4>
      <div className="dataTable">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Role</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{auth.user.username}</td>
              <td>{auth.user.password}</td>
              <td>{auth.user.role}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="toHome">
        <button onClick={handleLogout} className="logout">
          Logout
        </button>
      </div>
    </>
  );
};

export default Profile;
