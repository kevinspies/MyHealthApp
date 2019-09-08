import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    name: "",
    age: "",
    sex: "",
    weight: "",
    height: "",
    pic: "",
    username: "",
    password: ""
  };
  componentDidMount() {
    axios.get("/api/user").then(response => {
      this.setState({ users: response.data });
    });
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  handleClick = () => {
    axios
      .post("/api/user", {
        username: this.state.username,
        password: this.state.password,
        name: this.state.name,
        age: this.state.age,
        sex: this.state.sex,
        weight: this.state.weight,
        height: this.state.height,
        pic: this.state.pic
      })
      .then(response => {
        const user = response.data;
        const updatedUsers = this.state.users;
        updatedUsers.push(user);
        this.setState({
          users: updatedUsers
        });
      });
  };

  render() {
    return (
      <div>
        <nav className="nav bg-dark">
          <a className="nav-link active" href="#">
            Active
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
          <a className="nav-link" href="#">
            Link
          </a>
        </nav>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="jumbotron">
                <h1>B Healthy 🥗</h1>
              </div>

              <div className="row">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  name="age"
                  placeholder="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  name="sex"
                  placeholder="sex"
                  value={this.state.sex}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  name="weight"
                  placeholder="weight"
                  value={this.state.weight}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  name="height"
                  placeholder="height"
                  value={this.state.height}
                  onChange={this.handleChange}
                />
                <input
                  type="text"
                  className="form-control"
                  name="pic"
                  placeholder="pic"
                  value={this.state.pic}
                  onChange={this.handleChange}
                />
                <button className="btn btn-success" onClick={this.handleClick}>
                  Add User
                </button>
              </div>

              <div>
                {this.state.users.map((user, i) => (
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={user.pic} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{user.username}</h5>
                      <p className="card-text">
                        {user.name + ", "}
                        age: {user.age}
                      </p>
                      <a href="#" className="btn btn-primary">
                        Details
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
