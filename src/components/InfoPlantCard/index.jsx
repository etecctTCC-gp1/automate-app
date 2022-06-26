import styled from 'styled-components/native'

const Container = styled.View`
    width:100%;
    height: 130px;
    background-color:${props => props.theme.cardColor};
    flex-direction:row;
`

const ImageContainer = styled.View`
    height: 100%;
    width: 150px;
`
const ContentContainer = styled.View`
    flex:1;
`
const Title = styled.Text`
    font-size:28px;
    font-weight:bold;
    color: ${props => props.theme.title};
`
const Description = styled.Text`
    font-size:12px;
    color: ${props => props.theme.text1};
`
const ViewButton = styled.TouchableOpacity`
    border-radius: 16px;
    background-color: ${props => props.theme.blue};
    height:32px;
    width: 110px;
    align-items:center;
    justify-content:center;
    align-self:flex-end;
`
const ViewButtonText = styled.Text`
    color: #ffffff;
    font-size: 15px;
    font-weight: bold;
`

export function InfoPlantCard({title, description}){
    return (
        <Container>
            <ImageContainer>

            </ImageContainer>
            <ContentContainer>
                <Title>
                    {title}
                </Title>
                <Description>
                    {description}
                </Description>
                <ViewButton>
                    <ViewButtonText>
                        Ver planta
                    </ViewButtonText>
                </ViewButton>
            </ContentContainer>

        </Container>
    )
}