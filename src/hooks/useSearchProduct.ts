import { RootState } from "@store/reducers";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const searchSelector = createSelector((state: RootState) => state.search, (data) => data);

export function useSearchProduct() {
    const searchData = useSelector(searchSelector);
    return searchData;
}
