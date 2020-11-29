import React, {useEffect, useState} from 'react';
import { View} from 'react-native';
import api from '../../services/api'

export interface Product {
  no_produto: string,
  marca: string,
  qtd_total: number
}

import {Container, Header, HeaderTitle, UserName, ProductList,ProductImg, ProductConteiner, ProductInfo, ProductName, ProductLabel,ProductQuantityInfo ,ProductQuantity} from './styles'

const List: React.FC = () => {

const [products, setProducts] = useState<Product[]>([])

useEffect(() => {
  api.get('produtos').then(resp => {
    setProducts(resp.data)
  })
}, [])

  return (
    <Container>
      <Header>
        <HeaderTitle>
          Bem vindo! {"\n"}
          <UserName>Consulte os items do seu estoque</UserName>
        </HeaderTitle>
      </Header>

      <ProductList
        data={products}
        keyExtractor={(product) => product.id}
        renderItem={({ item: product }) => (
          <ProductConteiner onPress={() => { }}>
            <ProductImg source={{uri: `https://ui-avatars.com/api/?name=${product.no_produto}&background=random`}}/>
            <ProductInfo>
              <ProductName>{product.no_produto}</ProductName>
              <ProductLabel>{product.marca}</ProductLabel>
              <ProductQuantityInfo>
                  <ProductLabel>Quantidade disponível: </ProductLabel>
                  <ProductQuantity>{product.qtd_total}</ProductQuantity>
              </ProductQuantityInfo>
            </ProductInfo>
            </ProductConteiner>
        )}
      >

      </ProductList>
    </Container>
  );
}

export default List;