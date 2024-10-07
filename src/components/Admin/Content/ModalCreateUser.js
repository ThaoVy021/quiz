import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import axios from "axios";

export default function ModalCreateUser(props) {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUserName("");
    setRole("USER");
    setImage("");
    setPreViewImage("");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [preViewImage, setPreViewImage] = useState("");

  const handleUploadImage = (event) => {
    if (!event.target.files[0]) return;
    setPreViewImage(URL.createObjectURL(event.target.files[0]));
    setImage(event.target.files[0]);
  };

  const handleSubmitCreateUser = async () => {
    let data = {
      email: email,
      password: password,
      username: userName,
      role: role,
      userImage: image,
    };

    const form = new FormData();
    form.append("email", email);
    form.append("password", password);
    form.append("username", userName);
    form.append("role", role);
    form.append("userImage", image);

    const res = await axios.post(
      "http://localhost:8081/api/v1/participant",
      form
    );
    console.log("res", res);
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
                value={role}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labelUpload">
                <FcPlus /> Upload File Image
              </label>
              <input
                type="file"
                id="labelUpload"
                hidden
                onChange={(event) => handleUploadImage(event)}
              />
            </div>

            <div className="col-md-12 img-preview">
              {preViewImage ? (
                <img src={preViewImage} alt="User Of Quiz" />
              ) : (
                <span>Preview Image</span>
              )}

              {/* <span>Preview Image</span>   */}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="btn btn-primary"
            onClick={() => handleSubmitCreateUser()}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
