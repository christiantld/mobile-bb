import React, {useRef, useCallback} from 'react';
import { ScrollView, Alert } from 'react-native';
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import getValidationErrors from '../../utils/getValidationErrors'
import api from '../../services/api'


import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Title, CreateAccountButton, CreateAccountButtonText } from './styles';

interface SignUpFormData {
  name: string,
  cpf: string,
  phone: string,
  email: string,
  password: string
}

const SignUp: React.FC = () => {
  const navigation = useNavigation()
  const formRef = useRef<FormHandles>(null);

  const handleSignUp = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          cpf: Yup.string().min(11).max(11).required('CPF obrigatório'),
          phone: Yup.string().min(8).max(11).required('Telefone obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um e-mail válido'),
          password: Yup.string().min(6, 'No mínimo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, cpf, email, password, phone } = data;

        const apiData = {
          no_usuario: name,
          nu_cpf: cpf,
          email,
          senha: password,
          telefone: phone,
          fk_cargo: 1
        }

        await api.post('registrar', apiData).then((resp) => console.log(resp.data));
        Alert.alert(
          'Cadastro realizado com sucesso!',
          'Você já pode fazer login na aplicação.',
        );

        navigation.goBack();
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }
        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer cadastro, tente novamente.',
        );
      }
    },
    [navigation],
  );

  return (
    <>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flex: 1 }}>
    <Container>
      <Title>Fale um pouco sobre você</Title>
        <Form  onSubmit={handleSignUp} ref={formRef}>
            <Input
              name="name"
              icon="smile"
              placeholder="Nome do usuário"
              autoCapitalize="words"
              returnKeyType="next" />
            <Input
              name="cpf"
              icon="user"
              maxLength={11}
              placeholder="CPF"
              keyboardType="number-pad"
              returnKeyType="next" />
            <Input
              name="phone"
              icon="phone"
              maxLength={11}
              placeholder="Telefone"
              keyboardType="number-pad"
              returnKeyType="next" />
            <Input
              name="email"
              icon="mail"
              placeholder="E-mail"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next" />
            <Input
              name="password"
              icon="lock"
              placeholder="Senha"
              textContentType="newPassword"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => formRef.current?.submitForm()} />
        </Form>
      <Button onPress={() =>  formRef.current?.submitForm()}>Cadastrar</Button>
          <CreateAccountButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#2ccd9b"/>
        <CreateAccountButtonText>Voltar para o Login</CreateAccountButtonText>
      </CreateAccountButton>
      </Container>
      </ScrollView>
    </>
  );
}

export default SignUp;