import { useTheme } from 'styled-components/native';

import { MaterialIcons, Feather, FontAwesome5 } from '@expo/vector-icons';

import {
    Container, 
    Title,
    AddButton,
    MainContent,
    TopSection,
    PlantSection,
    SomePlantsContainer,
    UserPlantsContainer,
    UserPlantsTitle,
    InputsRow,
    FilterButton,
} from './styles';

import {Input} from '../../components/Input';
import { PlantCard } from './PlantCard';
import {UserPlantCard} from './UserPlantCard';

import {plants} from '../../global/plants' ;
import {appImages} from '../../global/images';

export function Plants({ navigation }) {
    const { primary } = useTheme();

    return (
        <Container>
            <MainContent>
                <TopSection>
                    <Title>Todas as plantas</Title>
                    
                </TopSection>
                

                <PlantSection>
                    <InputsRow>
                            <Input 
                                iconType={Feather}
                                iconName="search"
                                style={{
                                    flex:1
                                }}
                                placeholder="Pesquisar"
                            />
                            <FilterButton>
                                <FontAwesome5 
                                    color="#ffffff"
                                    size={30}
                                    name="filter"
                                />
                            </FilterButton>
                        </InputsRow>
                    <SomePlantsContainer horizontal>
                        {plants.map(plant => (
                            <PlantCard 
                                description={plant.description}
                                id={plant.id}
                                image={plant.image}
                                name={plant.name}
                                key={plant.id}
                                style={{marginHorizontal:5}}
                            />
                        ))}
                        
                    </SomePlantsContainer>
                    <UserPlantsTitle horizontal>
                        Suas plantas
                    </UserPlantsTitle>
                    <UserPlantsContainer horizontal>
                        <UserPlantCard 
                            image={appImages['plant_corner']}
                            name="Suculenta"
                            description="Sala"
                            style={{marginLeft:10}}
                        />
                        <UserPlantCard 
                            image={appImages['plant_corner']}
                            name="Suculenta1"
                            description="Telhado"
                            style={{marginLeft:10}}
                        />
                    </UserPlantsContainer>
                </PlantSection>
                
            </MainContent>
            
            <AddButton onPress={() => navigation.navigate('bluetooth-connection', { target: 'add-plant', params: {} })}>
                <MaterialIcons
                    name='add-circle'
                    size={70}
                    color={primary}
                    style={{ margin: 3 }}
                />
            </AddButton>
        </Container>
    )
}