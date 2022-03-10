import styled from 'styled-components/native'

import {Text, Button} from 'react-native';

import { useTheme } from '../../hooks/useTheme';
import Card from '../../components/Card';

const Container = styled.View`
    background-color: ${props => props.theme.background};
    flex: 1;
`
const Title = styled.Text`
    color: ${props => props.theme.title};
`

export function Home(){
    const {toggleTheme} = useTheme()

    return (
        <Container>
            <Title>Bem vindo(a)</Title>
            <Button onPress={toggleTheme} title='Alternar tema' />
            <Card text="card" theme='light' icon="cog" />
        </Container>
    )
}