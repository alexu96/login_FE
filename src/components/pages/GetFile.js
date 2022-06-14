import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

const GetFile = () => {
  const { isAuthentication } = useSelector((state) => state.user);
  const { userId } = useParams();
  console.log(isAuthentication);
  const [data, setData] = useState();

  useEffect(() => {
    const getFile = async () => {
      try {
        await axios({
          method: "POST",
          withCredentials: true,
          data: { userId },
          url: `http://localhost:4000/getfile`,
        }).then((response) => {
          console.log(response);
          setData(response.data);
        });
      } catch (err) {
        console.log(err);
      }
    };
    if (isAuthentication && userId) {
      getFile();
    }
  }, [isAuthentication, userId]);
  if (!isAuthentication) return <div>You're not login</div>;
  if (!data) return <></>;
  return (
    <>
      <p>Your username: {data.user.username}</p>
      <p>Your id: {data.user.userId}</p>
      <p>
        Your data updated at: {new Date(data.user.dataUpdateAt).toISOString()}
      </p>
    </>
  );
};

export default GetFile;
