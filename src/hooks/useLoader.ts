import { toggleGlobalLoader } from "@store/slice";
import { AppDispatch } from "@store/store";
import { useDispatch } from "react-redux";


export function useLoader() {
    const dispatch = useDispatch<AppDispatch>();

    const showLoader = () => {
        dispatch(toggleGlobalLoader(true));
    }

    const hideLoader = () => {
        dispatch(toggleGlobalLoader(false));
    }

    const toggleLoader = (state: boolean) => {
        dispatch(toggleGlobalLoader(state));
    }

    return {
        showLoader,
        hideLoader,
        toggleLoader
    }

}