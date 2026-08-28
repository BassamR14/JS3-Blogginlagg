import { useState, useEffect } from "react";

function UserInfo({ props }) {
  const [userData, setUserData] = useState(null);

  useEffect(
    () => {
      let getUser = async () => {
        //use template literals to get variable inside the link
        let response = await fetch(`https://dummyjson.com/users/${props}`);
        let data = await response.json();
        setUserData(data);
      };

      getUser();
    },
    //add dependency array with variable/value that changes
    [props],
  );

  //guard against user being null, can crash the app
  if (!userData) return <p>Loading...</p>;

  return (
    <div className="user-info">
      <p>@{userData.username}</p>
      <p>{userData.email}</p>
      {/* userdata doesn't have city directly, need to access address first */}
      <p>{userData.address.city}</p>
    </div>
  );
}

export default UserInfo;
