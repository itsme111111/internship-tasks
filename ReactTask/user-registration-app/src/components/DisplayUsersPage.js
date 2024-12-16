import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const DisplayUsersPage = ({ users }) => {
    return ( <
        div className = "container" >
        <
        h1 > Registered Users < /h1>

        {
            users.length === 0 ? ( <
                p > No users registered yet. < /p>
            ) : ( <
                table className = "table" >
                <
                thead >
                <
                tr >
                <
                th > # < /th> <
                th > Name < /th> <
                th > Date of Birth < /th> <
                th > Gender < /th> <
                th > Education < /th> <
                /tr> <
                /thead> <
                tbody > {
                    users.map((user, index) => ( <
                        tr key = { index } >
                        <
                        td > { index + 1 } < /td> <
                        td > { user.name } < /td> <
                        td > { user.dob } < /td> <
                        td > { user.gender } < /td> <
                        td > { user.education } < /td> <
                        /tr>
                    ))
                } <
                /tbody> <
                /table>
            )
        }

        <
        Link to = "/"
        className = "back-link" >
        Register Another User <
        /Link> <
        /div>
    );
};

export default DisplayUsersPage;