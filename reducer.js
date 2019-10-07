// Imports

// Actions

const START_TIMER = "START_TIMER";
const PAUSE_TIMER = "PAUSE_TIMER";
const RESUME_TIMER = "RESUME_TIMER";
const STOP_TIMER = "STOP_TIMER";
const ADD_SECOND = "ADD_SECOND";

// ActionsCreator

const startTimer = () => {
  return {
    type: START_TIMER
  };
};

const pauseTimer = () => {
  return {
    type: PAUSE_TIMER
  };
};

const resumeTimer = () => {
  return {
    type: RESUME_TIMER
  };
};

const stopTimer = () => {
  return {
    type: STOP_TIMER
  };
};

const addSecond = () => {
  return {
    type: ADD_SECOND
  };
};

// reducer

const TIMER_DURATION = 10;

const initialState = {
  isCounting: false,
  elapsedTime: 0,
  timerDuration: TIMER_DURATION
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case START_TIMER:
      return applyStartTimer(state);
    case PAUSE_TIMER:
      return applyPauseTimer(state);
    case RESUME_TIMER:
      return applyResumeTimer(state);
    case STOP_TIMER:
      return applyStopTimer(state);
    case ADD_SECOND:
      return applyAddSecond(state);
    default:
      return state;
  }
};

// Reducer Function

const applyStartTimer = (state, action) => {
  return {
    ...state,
    isCounting: true,
    elapsedTime: 0
  };
};

const applyPauseTimer = (state, action) => {
  return {
    ...state,
    isCounting: false
  };
};

const applyResumeTimer = (state, action) => {
  return {
    ...state,
    isPlaying: true
  };
};

const applyStopTimer = (state, action) => {
  return {
    ...state,
    isCounting: false,
    elapsedTime: 0
  };
};

const applyAddSecond = (state, action) => {
  const { elapsedTime } = state;
  if (elapsedTime < TIMER_DURATION) {
    return {
      ...state,
      elapsedTime: elapsedTime + 1
    };
  } else {
    return {
      ...state,
      isCounting: false,
      elapsedTime: 0
    };
  }
};

// Export

export const actionCreators = {
  startTimer,
  pauseTimer,
  resumeTimer,
  stopTimer,
  addSecond
};

// Default

export default reducer;
