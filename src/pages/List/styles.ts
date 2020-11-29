import styled from "styled-components";
import { FlatList } from "react-native";
import { Product } from "./index";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  background: #2ccd9b;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #484848;
  font-size: 20px;
  line-height: 30px;
`;

export const UserName = styled.Text`
  font-size: 22px;
  color: #e3e3e0;
  font-weight: bold;
`;

export const ProductList = styled(FlatList as new () => FlatList<Product>)`
  padding: 24px 24px 16px;
`;

export const ProductConteiner = styled.View`
  background: #c3d3d0;
  border-radius: 10px;
  padding: 20px 15px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const ProductImg = styled.Image`
  width: 72px;
  height: 72px;
  border-radius: 36px;
`;
export const ProductInfo = styled.View`
  flex: 1;
  margin-left: 20px;
`;
export const ProductName = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #484848;
`;
export const ProductLabel = styled.Text`
  font-size: 16px;
`;

export const ProductQuantityInfo = styled.View`
  flex: 1;
  flex-direction: row;
`;
export const ProductQuantity = styled.Text`
  color: #28bd8e;
  font-size: 16px;
  font-weight: bold;
`;
