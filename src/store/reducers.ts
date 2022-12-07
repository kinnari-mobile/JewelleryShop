import { combineReducers } from "redux"
import { loaderReducer, userReducer } from "./slice"
import { toastReducer } from "./slice/toast";
import { productReducer,deleteModalReducer,searchModalReducer,searchReducer,addSelectedItems } from "./slice/product";


const rootReducer = combineReducers({
    user: userReducer,
    loader: loaderReducer,
    toast: toastReducer,
    product: productReducer,
    deletemodel: deleteModalReducer,
    searchmodal: searchModalReducer,
    search: searchReducer,
    addsearch: addSelectedItems,
})


export type RootState = ReturnType<typeof rootReducer>
export { rootReducer };
