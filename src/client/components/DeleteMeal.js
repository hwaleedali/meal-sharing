import React from "react";
import { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

export function DeleteMeal() {
  const { id } = useParams();
  const ID = Number(id);

  const [deleteNotDEleteMessage, setDeleteNotDEleteMessage] = useState("");
  const handleClickdeleteMealbyID = async (ID) => {
    const deleteMealbyID = await fetch(
      `http://localhost:3000/api/meals/${ID}`,
      {
        method: "DELETE",
      }
    );
    const resJson = await deleteMealbyID.json();
    console.log(resJson);
    if (deleteMealbyID.status === 200) {
      //   alert(`Meal ${ID} deleted successfully`);
      setDeleteNotDEleteMessage(`Meal ${ID} deleted successfully`);
    } else {
      setDeleteNotDEleteMessage(`Some  error occured in meal id: ${ID}`);
    }
  };
  return (
    <div className="deleteButton">
      <h1>Delete Meal</h1>
      {deleteNotDEleteMessage}
      <button onClick={() => handleClickdeleteMealbyID(ID)}>Delete Meal</button>
    </div>
  );
}
