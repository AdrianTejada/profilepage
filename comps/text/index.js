import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styled } from 'styled-components';

const TextCont = styled.View`
    color: ${props=>props.color};
    font-weight: ${props=>props.fontweight};
    font-size: ${props=>props.fontsize};
    margin: ${props=>props.margin};
`;

export default function TextTag(
    text="default text",
    color={color},
    fontweight={fontweight},
    fontsize={fontsize},
    margin={margin}
){
    return <TextCont>{text}</TextCont>
}