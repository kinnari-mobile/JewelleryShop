import { toastError, toastInfo, toastSuccess } from "@store/slice";
import { AppDispatch } from "@store/store";
import { useDispatch } from "react-redux";


export function useToast() {
    const dispatch = useDispatch<AppDispatch>();
    const showSuccessToast = (message: string) => {
        dispatch(toastSuccess(message));
    }

    const showInfoToast = (message: string) => {
        dispatch(toastInfo(message));
    }

    const showErrorToast = (message: string) => {
        dispatch(toastError(message));
    }

    return {
        showSuccessToast,
        showErrorToast,
        showInfoToast
    }
}
