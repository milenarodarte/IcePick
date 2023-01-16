import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { iLoginError } from "../../contexts/userContext/userContext";

type tTypeNotify = "sucess" | "error";

export const Toast = (message: string | iLoginError, type: tTypeNotify) => {
  const mobile = window.matchMedia("(max-width:600px)");
  if (type === "sucess") {
    toast.success(`${message}`, {
      position: mobile.matches
        ? toast.POSITION.BOTTOM_RIGHT
        : toast.POSITION.TOP_RIGHT,
      theme: "light",
      autoClose: 5000,
      icon: "🧊",
      className: "black-background",
    });
  } else if (type === "error") {
    toast.error(`${message}`, {
      position: mobile.matches
        ? toast.POSITION.BOTTOM_RIGHT
        : toast.POSITION.TOP_RIGHT,
      theme: "light",
      autoClose: 5000,
      icon: "💧",
    });
  }
};
