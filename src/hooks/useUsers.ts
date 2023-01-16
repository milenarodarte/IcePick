import { useContext } from "react";
import { userContext } from "../contexts/userContext/userContext";

export const useUsers = () => useContext(userContext);
