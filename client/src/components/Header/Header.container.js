import { connect } from "react-redux";

import { actions } from "../../store/User";
import Header from "./Header";

const mapStateToProps = state => {
  return {};
};
export default connect(mapStateToProps, { fetchUser: actions.fetchUser })(
  Header
);
