import styled, { css } from "styled-components";
import FeatherIcon from "react-native-vector-icons/Feather";

interface ContainerProps {
  isFocused: boolean;
  isError: boolean;
}

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: #d4d4d4;
  padding: 0 16px;
  border-radius: 10px;
  margin-bottom: 10px;
  border-width: 2px;
  border-color: #d4d4d4;
  flex-direction: row;
  align-items: center;

  ${(props) =>
    props.isError &&
    css`
      border-color: #c93050;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      border-color: #2ccd9b;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #484848;
  font-size: 16px;
`;

export const Icon = styled(FeatherIcon)`
  margin-right: 16px;
`;
