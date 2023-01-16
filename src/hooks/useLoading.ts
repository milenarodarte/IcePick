import { useContext } from "react";
import { loadingContext } from "../contexts/loadingContext/loadingContext";

export const useLoading = () => useContext(loadingContext);
