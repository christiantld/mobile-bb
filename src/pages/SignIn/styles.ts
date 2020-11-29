import styled from "styled-components";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #484848;
  font-weight: bold;
  margin: 45px 0 24px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  padding: 40px 0 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #2ccd9b;
  font-size: 20px;
  margin-left: 16px;
  font-weight: bold;
`;
