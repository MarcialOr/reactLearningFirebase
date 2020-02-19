import { authReducer } from "./authReducer";
import { projectReducer } from "./projectReducer";
import { videoReducer } from "./videoReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    video: videoReducer 
})

export default rootReducer;
