import React, {useEffect, useRef, useState, useCallback} from 'react';
import { TextInputProps } from 'react-native'
import {useField} from '@unform/core'


import { Container, TextInput, Icon } from './styles';


interface InputProps extends TextInputProps {
  name: string;
  icon: string;
  rawValue?: string;
}
interface InputValueReference {
  value: string
}

const Input: React.FC<InputProps> = ({ name, icon, onChangeText, rawValue, ...rest }) => {
  const inputElementRef = useRef<any>(null);

  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false) 
  
  const handleInputFocused = useCallback(() => { 
    setIsFocused(true)
  }, [])

  const handleInputBlur= useCallback(() => { 
    setIsFocused(false)

  setIsFilled(!!inputValueRef.current.value )    

  }, [])

  const {registerField, defaultValue = '', fieldName, error} = useField(name)
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue })
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
      setValue(ref: any, value: string) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      
      clearValue(ref: any) {
        inputValueRef.current.value = '';
        inputElementRef.current.clear();
      },
    })
  }, [fieldName, registerField])

  
  return (<Container isFocused={isFocused} isError={!!error}>
    <Icon name={icon} size={20} color={isFocused || isFilled ? "#2ccd9b": "#555"}/>
    <TextInput
      ref={inputElementRef}
      placeholderTextColor="#444"
      defaultValue={defaultValue}
      onFocus={handleInputFocused}
      onBlur={handleInputBlur}
      onChangeText={value => inputValueRef.current.value = value}
      {...rest} />
  </Container>);
}

export default Input;