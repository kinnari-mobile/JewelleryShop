import { IUser } from "@common";
import { RootState } from "@store/reducers";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const userSelector = createSelector((state: RootState) => state.user, (data: IUser) => data);

export function useUserInfo() {
    const userData = useSelector(userSelector);
//    addUserToStorage(userData);
    //console.log(JSON.stringify(userData, null, 2));
    return userData;
}
