import React from "react";
import styled from "styled-components";
import { Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const Container = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 80;
  height: 80;
  border-radius: 50;
  overflow: hidden;
  padding-top: 5;
`;

const Text = styled.Text`
  font-size: 15px;
  color: white;
`;

const BtnPresenter = ({ iconName, onPress }) => (
  <Container onPressOut={onPress}>
    <Ionicons name={iconName} size={60} color="#CE0B24" />
  </Container>
);

BtnPresenter.propTypes = {
  iconName: PropTypes.string.isRequired
};

export default BtnPresenter;
