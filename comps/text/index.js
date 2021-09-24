import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';

const TextCont = styled.Text`
    color: ${props=>props.color};
    font-size: ${props=>props.fontsize}px;
    margin: ${props=>props.margin}px;
`;

export default function TextTag({
    text="default text",
    color="white",
    fontsize=40,
    margin=5
}
){
    return <TextCont color={color} fontsize={fontsize} margin={margin}>{text}</TextCont>
}