import { useState } from "react";
import GoogleLogin from "react-google-login";

export const Auth = () => {
  const [avatar, setAvatar] = useState("");
  const handleSuccess = ({ profileObj }) => {
    setAvatar(profileObj.imageUrl);
  };

  const handleFailure = (...params) => {
    console.log("failure", params);
  };

  return (
    <div>
      {avatar && (
        <div>
          <img src={avatar} alt="User avatar" />
        </div>
      )}
      <div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="Welcome React #28"
          onSuccess={handleSuccess}
          onFailure={handleFailure}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </div>
  );
};
