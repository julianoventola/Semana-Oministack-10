import React, {useEffect, useState} from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity, } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';

function Main({ navigation }) {
  const [devs, setDevs] = useState([]);
  const [currentRegion, setCurrentRegion] = useState(null);

  // Pede a autorização da localização e encontra o usuário pela geolocalização
  useEffect(()=> {
    async function loadInitialPosition() {
      const { granted } = await requestPermissionsAsync();
      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const {latitude, longitude} = coords;

        setCurrentRegion({
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        });
      }
    }
    loadInitialPosition();
  },[])

  // Carrega os usuários do servidor
  async function loadDevs() {
    const {latitude, longitude} = currentRegion;

    const response = await api.get('/search', { params: {
      latitude,
      longitude,
      techs: 'ReactJS',
    }});

    setDevs(response.data);

  }

  // Recarrega a posição do usuário qnd mapa alterado
  function handleRegionChanged(region) {
    setCurrentRegion(region);
  }

  if (!currentRegion) {
    return null;
  }

  return (
    <>
        <MapView onRegionChangeComplete={handleRegionChanged} initialRegion={currentRegion} style={styles.map}>
          <Marker coordinate={{latitude:-23.6431511, longitude: -46.5219648}}>
              <Image style={styles.avatar} source={{ uri: 'https://avatars0.githubusercontent.com/u/28475558?s=460&v=4'}} />
              <Callout onPress={() => {
                // Navegação para pagina Profile enviando o username em parametro
                navigation.navigate('Profile', { github_username: 'julianoventola' });
              }}>
                <View style={styles.callout}>
                    <Text style={styles.devName}>Juliano Ventola</Text>
                    <Text style={styles.devBio}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi id officia libero. Quibusdam</Text>
                    <Text style={styles.devTechs}>ReactJS, React Native, Node.js</Text>
                </View>
              </Callout>
          </Marker>
        </MapView>
        <View style={styles.searchForm}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Buscar Dev por techs..."
            placeholderTextColor="#999"
            autoCapitalize="words"
            autoCorrect={false}
          />
          <TouchableOpacity onPress={() => {}} style={styles.loadButton}>
              <MaterialIcons name="my-location" size={20} color="#fff"/>
          </TouchableOpacity>
        </View>
    </>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },

  avatar: {
    width: 54,
    height: 54,
    borderRadius: 4,
    borderWidth: 4,
    borderColor: '#fff'
  },

  callout: {
    width: 260,
  },

  devName: {
    fontWeight: 'bold',
    fontSize: 16,
  },

  devBio: {
    color: '#666',
    marginTop: 5,
  },

  devTechs: {
    marginTop: 5,
  },

  searchForm: {
    position: 'absolute',
    top: 20,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row'
  },

  searchInput: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: 25,
    paddingHorizontal: 20,
    fontSize: 16,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 4,
      height: 4,
    },
    elevation: 4,
  },

  loadButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8E4DFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
  }

});

export default Main;