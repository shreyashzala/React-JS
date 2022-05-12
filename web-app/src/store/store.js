import { rootReducer } from "../reducer/rootReducer";
import { createStore } from "redux";

let store = createStore(rootReducer);

export {store};
