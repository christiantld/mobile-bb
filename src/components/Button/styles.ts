import styled from "styled-components";
import { RectButton } from "react-native-gesture-handler";

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background-color: #2ccd9b;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #484848;
  font-size: 20px;
  font-weight: bold;
`;
