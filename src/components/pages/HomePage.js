import React from "react";
import { connect, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions";

function HomePage({ logout }) {
  const { userId, isAuthentication } = useSelector((state) => state.user);
  const history = useHistory();
  const handleLogout = () => {
    logout({ history });
  };

  if (!isAuthentication) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="text-center">
      <h1 className="main-title home-page-title">welcome to our app</h1>

      <button className="primary-button" onClick={handleLogout}>
        Log out
      </button>

      {userId && (
        <Link to={`/get-file/${userId}`}>
          <button className="primary-button">See my data in pdf</button>
        </Link>
      )}
    </div>
  );
}

export default connect(null, { logout })(HomePage);
