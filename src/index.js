import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import ToDoList from "./ToDoList";

var destination = document.querySelector("#container");
ReactDOM.render(<ToDoList />, destination);
