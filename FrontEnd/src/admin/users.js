import React, { useState } from 'react';
// reactstrap components
import {
    Table,
    Container
} from "reactstrap";
// core components
import instance from 'services/api';
import { useEffect } from 'react';
import { RiDeleteBin5Line } from 'react-icons/ri';

const Users = () => {

    const [usersList, setUsersList] = useState(null)

    const fetchData = async () => {

        const response = await instance.get("http://localhost:8082/SpringMVC/user")
        // console.log(response.data);
        return response.data

    }

    useEffect(async () => {
        const data = async () => {
            const d = await fetchData()
            setUsersList(d)
        }
        if (localStorage.getItem("email")) {
            data()
        } else {
            console.log("error");
        }
    }, [])

    return (
        <>
            <div className="header pb-8 pt-5 pt-md-8" style={{ background: "linear-gradient(87deg, #11cdef 0, #00264d 100%)" }}>
                <Container style={{ marginTop: "-2%" }}>
                    <div className="header-body">
                        <h1>List of Users</h1>
                        <Table className="align-items-center table-flush" responsive>
                            <thead className="thead-light">
                                <tr style={{ textAlign: "center" }}>
                                    <th scope="col">Fisrt Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Gender</th>
                                    <th scope="col">Profile Picture</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody style={{ backgroundColor: "white" }}>
                                {usersList && usersList.map((u, i) => {
                                    return <tr key={i}>
                                        <td style={{ textAlign: "center", fontWeight: "bold" }}>
                                            {u.firstName}
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            {u.lastName}
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            {u.email}
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            {u.gender}
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            {u.profilePicture}
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            {u.role}
                                        </td>
                                        <td style={{ textAlign: "center" }}>
                                            <RiDeleteBin5Line size={20} color="red" />
                                        </td>
                                    </tr>
                                }
                                )}
                            </tbody>
                        </Table>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default Users;
