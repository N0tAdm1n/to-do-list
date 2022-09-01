console.log("Hello world!!!");

import "./style.css";
import { homepage } from "./home-page";
import { todoItem } from "./functions";

homepage();
todoItem();

const item = todoItem();
item.initTodoItem("title123", "qwe", "12", "asdw");
console.log(item.getTitle());
