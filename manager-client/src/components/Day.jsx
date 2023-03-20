import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import data from "../tmp";
import { useEffect } from "react";

function Day(props) {
  const days = data.days;
  const daysData = days[props.day];
  const [isEdit, setIsEdit] = useState(true);
  const [isInput, setIsInput] = useState(false);
  const [isTitle, setIsTitle] = useState(true);
  const [card, setCard] = useState({ title: "" });
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    function returnCardTitle(title) {
      return (
        <ul className="title" key={title}>
          <li>
            <h4 style={{ fontSize: "22px" }} className="titleText">
              {title}
            </h4>
            <DeleteIcon
              value={title}
              onClick={() => handleDeleteClick(title)}
              className="deleteButton"
            />
          </li>
        </ul>
      );
    }
    console.log("useEffect");
  },[deleted]);

  function handleDeleteClick(title) {
    console.log(daysData);
    const index = daysData.indexOf(title);
    console.log(index);
    if (index > -1) {
      // only splice array when item is found
      daysData.splice(index, 1); // 2nd parameter means remove one item only
    }
    setDeleted(!deleted);
    console.log(daysData,"deleted");
  }

  function returnCardTitle(title) {
    return (
      <ul className="title" key={title}>
        <li>
          <h4 style={{ fontSize: "22px" }} className="titleText">
            {title}
          </h4>
          <DeleteIcon
            value={title}
            onClick={() => handleDeleteClick(title)}
            className="deleteButton"
          />
        </li>
      </ul>
    );
  }
  function handleClickAddButton() {
    setIsInput(true);
    setIsEdit(false);
  }
  function handleTitleChange(event) {
    const { name, value } = event.target;

    setCard((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function handleClickSubmitButton(event) {
    // added to the database
    //
    // daysData
    daysData.push(card.title);
    console.log(card.title);
    setCard({ title: "" });
    setIsEdit(true);
    setIsInput(false);
    setIsTitle(true);
    event.preventDefault();
  }

  return (
    <>
      <div className="day">
        <h3>{props.day}</h3>
        {isTitle && daysData.map(returnCardTitle)}
        {isEdit && (
          <AddIcon
            color="primary"
            className="add-button"
            onClick={handleClickAddButton}
          />
        )}
        {isInput && (
          <form className="title">
            <input
              name="title"
              placeholder="Title..."
              onChange={handleTitleChange}
              value={card.title}
            />
            <SendIcon
              className="send-button"
              onClick={handleClickSubmitButton}
            />
          </form>
        )}
      </div>
    </>
  );
}

export default Day;
