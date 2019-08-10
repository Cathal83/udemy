import React from "react";

export default function Buttonha({ handleDelete }) {
  return (
    <button
      type="button"
      style={{ background: "red", color: "white", fontSize: "2rem" }}
      onClick={handleDelete}
    >
      Delete
    </button>
  );
}
