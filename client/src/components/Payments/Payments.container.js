import { connect } from "react-redux";

import * as actions from "../../store/User/actions";
import Payments from "./Payments";

export default connect(null, { addCredits: actions.addCredits })(Payments);
