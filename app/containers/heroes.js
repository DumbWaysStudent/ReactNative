import { connect } from 'react-redux';
import Heroes from '../screens/Heroes';

const mapStateToProps = () => (
  {
    data: "hello world"
  }
);

export default connect(
  mapStateToProps
)(Heroes);
