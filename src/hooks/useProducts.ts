import { RootState } from "@store/reducers";
import { useSelector } from "react-redux";
import { createSelector } from "reselect";

const productSelector = createSelector((state: RootState) => state.product, (data) => data);

export function useProducts() {
    const productData = useSelector(productSelector);
    return productData;
}
