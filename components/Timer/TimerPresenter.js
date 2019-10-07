import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "../Button";
import { getTime } from "../../utils";

const Container = styled.View`
  flex: 1;
  background-color: red;
`;

const Section = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const BtnContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Timer = styled.Text`
  color: black;
  font-size: 100px;
`;

const TimerPresenter = props => {
  const {
    startTimer,
    pauseTimer,
    resumeTimer,
    stopTimer,
    addSecond,
    elapsedTime,
    isCounting,
    timerDuration
  } = props;

  const [timerInterval, setTimerInterval] = useState();

  useEffect(() => {
    if (isCounting) {
      setTimerInterval(setInterval(() => addSecond(), 1000));
    } else if (!isCounting) {
      clearInterval(timerInterval);
    }
    return clearInterval(timerInterval);
  }, [props.isCounting]);

  return (
    <Container>
      <Section>
        <Timer>{getTime(timerDuration - props.elapsedTime)}</Timer>
      </Section>
      <BtnContainer>
        {isCounting && <Button iconName={"ios-pause"} onPress={pauseTimer} />}
        {!isCounting && <Button iconName={"ios-play"} onPress={startTimer} />}
      </BtnContainer>
    </Container>
  );
};

export default TimerPresenter;
