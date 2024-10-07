import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import "./ManageUsers.scss";

export default function ManageUsers(props) {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  return (
    <div className="manage-users-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div className="btn-add-new">
          <Button
            type="button"
            variant="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus /> Add new Users
          </Button>
        </div>
        <div className="table-users-container">Table users</div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
}
