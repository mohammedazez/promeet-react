import { combineReducers } from "redux";
import professional from "./Professional.reducers";
import user from "./User.reducers";
import profesi from "./Profesi.reducers";
import location from "./Location.reducers";
import service from "./Service.reducers";
import bookingReducers from "./BookingReducers";
import transfer from "./Transfer.reducers";
import semuaprofile from "./Allprofile.reducers";

const rootReducers = combineReducers({
  professional,
  user,
  profesi,
  location,
  service,
  bookingReducers,
  transfer,
  semuaprofile,
});

export default rootReducers;
