import { FlatList, View } from 'react-native'
import { Plant } from '../../components/Plant'
import {InfoPlantCard} from '../../components/InfoPlantCard'

import {
    Container, 
    PlantsSection, 
    PlantsSectionTitle, 
    Title, 
    TopSection, 
    TopPlantImage,
    TopSectionCol1,
    TopSectionCol2
} from './styles'

import {appImages} from '../../global/images'
import { pickRandomPlants, plants } from '../../global/plants'
import { useMemo } from 'react'

export function Home(){
    const randomPlants = useMemo(() => pickRandomPlants(3), [])
    return (
        <Container>
            <TopSection>
                <TopSectionCol1>
                    <Title>A melhor rosa está no seu jardim!</Title>
                </TopSectionCol1>
                <TopSectionCol2>
                    <TopPlantImage 
                        source={appImages['plant1']}
                    />
                </TopSectionCol2>

            </TopSection>
            
            <PlantsSection>
                <PlantsSectionTitle>
                    Plantas recentes
                </PlantsSectionTitle>
                <FlatList 
                    data={[{variant:'yellow', title:'Amarelo'}, {variant:'red', title:'Vermelho'}, {variant:'blue', title:'Azul'}]}
                    style={{paddingTop:20}}
                    horizontal
                    renderItem={({item}) => {
                        return (
                            <Plant 
                                {...item}
                                image={appImages['plant1']}
                                subtitle="Sub"
                            />
                        )
                    }}
                    keyExtractor={(data)=> data.title}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={{marginVertical: 10}}>
                    {randomPlants.map(plant => {
                        return (
                            <InfoPlantCard 
                                image={plant.image}
                                description={plant.description}
                                style={{marginBottom:5}}
                                key={plant.id}
                                title={plant.name}
                                id={plant.id}
                            />
                        )
                    })}
                </View>
            </PlantsSection>
        </Container>
    )
}