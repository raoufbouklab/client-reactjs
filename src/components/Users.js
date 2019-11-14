import React, {Component} from 'react';
import {Button} from "react-bootstrap";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false
        };
    }


    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:8082//api/v1/users/')
            .then(response => response.json())
            .then(data => this.setState({users: data, isLoading: false}));
    }

    render() {
        const {users, isLoading} = this.state;
        console.log(users);

        if (isLoading) {
            return <p>Loading...</p>;
        }

        return (
            <div className="content">
                <div className="col-md-offset-1 col-md-10">
                    <h1>Page</h1>
                    <table>
                        <thead>
                        <tr>
                            <th>Users : </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map(function(item, key) {
                                return (
                                    <tr key = {key}>
                                        <td>{item.id}</td>
                                        <td>{item.userName}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                    </tr>
                                )
                            }.bind(this))
                        }
                        </tbody>
                    </table>
                    <br>
                    </br>
                    <Button variant="success">Add user</Button>
                </div>
            </div>
        );
    }
}


export default Users;