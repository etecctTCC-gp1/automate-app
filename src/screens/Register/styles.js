import styled from 'styled-components/native'

const Container = styled.SafeAreaView`
    height: 100%;
`
const BackgroundImage = styled.ImageBackground`
    width:100%;
    height:100%;
    align-items: center;
    justify-content:flex-end;
`

const Menu = styled.View`
    background-color: ${props => props.theme.background1};
    border-top-left-radius:40px;
    border-top-right-radius:40px;
    width:100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 28px;
    padding-bottom:20px;
    height: 82%;
    justify-content:space-between;
`

const HeadingSection = styled.View`
    width:100%;
`

const Title = styled.Text`
    font-size: 36px;
    font-weight:bold;
    color: ${props => props.theme.primary};
`
const Subtitle = styled.Text`
    color: ${props => props.theme.primary};
    font-size: 24px;
`

const BottomText = styled.Text`
    color: ${props => props.theme.secondary1};
    font-size: 20px;
    width: 100%;
    text-align:center;
`

const BottomLink = styled.TouchableOpacity`
    width: 50%;
    text-align:center;
`
const BottomLinkText = styled.Text`
    text-align:center;
    color: ${props => props.theme.primary};
    font-weight: bold;
    font-size: 20px;
    font-family: Poppins;
    width: 100%;
`

const InputsView = styled.View`
    width: 100%;
`

const BottomView = styled.View`
    align-items:center;
`
const ErrorText = styled.Text`
    color: ${props => props.theme.error};
    width: 100%;
    text-align:center;
`

export {
    BottomLink, 
    BottomLinkText, 
    BottomText, 
    BottomView, 
    Container, 
    InputsView, 
    Title,
    ErrorText,
    Menu,
    Subtitle,
    HeadingSection,
    BackgroundImage
}