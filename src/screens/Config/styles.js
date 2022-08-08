import styled from 'styled-components/native'

const Container = styled.ScrollView`
    background-color:${props => props.theme.background};
    flex:1;
`

const HeadingSection = styled.View`
    width:100%;
    height:300px;
    background-color: ${props => props.theme.background1};
    padding: 8px;
`
const Title = styled.Text`
    color: ${props => props.theme.title};
    font-size: 24px;
    width: 100%;
    text-align:center;
    margin-top: 25px;
`
const AccountSection = styled.TouchableOpacity`
    flex-flow: row nowrap;
    padding-left:10px;
    padding-right:10px;
    margin-bottom: 10px;
`
const AccountImage = styled.Image`
    width: 75px;
    height: 75px;
    border-radius: 37.5px;
`
const AccountSectionInfoCol1 = styled.View`
    flex:1;
    justify-content:center;
    margin:10px;
`
const AccountUserName = styled.Text`
    color: ${props => props.theme.title};
    font-family: ProximaNova;
    font-size: 24px;
`
const AccountUserEmail = styled.Text`
    font-size:16px;
    color: ${props => props.theme.text1};
`
const MessageContainer = styled.View`
    background-color: ${props => props.theme.purple};
    height:130px;
    width: 100%;
    border-radius: 8px;
    flex-flow: row nowrap;
    align-items:center;
    padding:16px;
    margin-top:8px;
`
const MessageContainerCol1 = styled.View`
    flex:1;
`
const MessageContainerCol2 = styled.View`
    width:100px;
    height:100px;
`

const MessageContainerText = styled.Text`
    color: #ffffff;
    font-size:18px;
    font-family: Montserrat_400Regular;
`

const MainSection = styled.View`
    flex:1;
    width:100%;
    background-color: ${props => props.theme.background2};
    padding-left:8px;
    padding-right:8px;
    padding-top:16px;
`
const SectionTitle = styled.Text`
    font-size:24px;
    color: ${props => props.theme.title};
    font-family: Montserrat_600SemiBold;
`

export {
    Container,
    Title,
    HeadingSection,
    MainSection,
    SectionTitle,
    MessageContainer,
    MessageContainerText,
    MessageContainerCol1,
    MessageContainerCol2,
    AccountImage,
    AccountSection,
    AccountSectionInfoCol1,
    AccountUserEmail,
    AccountUserName
}