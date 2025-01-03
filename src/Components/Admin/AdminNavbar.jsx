import React from "react";
import "./Admin.css";
import { Avatar, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function AdminNavbar() {
  return (
    <div className="AdminNavbar">
      <h1>
        <Link to="/">
          <img
            src="data:image/png;base64,..."
            alt="Logo"
          />
        </Link>
      </h1>
      <h1>Admin's Page</h1>
      <Stack direction="row">
        <Avatar
          name="Nitin Jambal"
          src="https://bit.ly/broken-link"
          cursor="pointer"
          onError={(e) => {
            e.target.src = "/default-avatar.png"; // Replace with valid fallback
          }}
        />
      </Stack>
    </div>
  );
}

export default AdminNavbar;
