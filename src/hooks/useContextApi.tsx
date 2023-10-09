import { Context } from "@/contexts/ContextApi";
import { useContext } from "react";

export const useContextApi = () => {
    return useContext(Context);
}