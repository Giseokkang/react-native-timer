import TimerPresenter from "./TimerPresenter";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../reducer";

const mapStateToProps = state => {
  const { elapsedTime, isCounting, timerDuration } = state;
  return { elapsedTime, isCounting, timerDuration };
};

const mapDispatchToProps = dispatch => {
  return {
    startTimer: bindActionCreators(actionCreators.startTimer, dispatch),
    pauseTimer: bindActionCreators(actionCreators.pauseTimer, dispatch),
    resumeTimer: bindActionCreators(actionCreators.resumeTimer, dispatch),
    stopTimer: bindActionCreators(actionCreators.stopTimer, dispatch),
    addSecond: bindActionCreators(actionCreators.addSecond, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerPresenter);
