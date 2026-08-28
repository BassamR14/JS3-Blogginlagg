import { useState, useEffect } from "react";

function UserInfo({userId}) {

    const [userData, setUserData] = useState(null);

    useEffect(() => {

        let getUser = async () => {
            let response = await fetch("https://dummyjson.com/users/{user.id}");
            let data = await response.json();
            setUserData(data);
        };

        getUser();

    }

)

    return (

        <div className = "user-info">
            <p>@{userData.username}</p>
            <p>{userData.email}</p>
            <p>{userData.city}</p>
        </div>


    )

}

export default UserInfo