import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, StatusBar } from
  'react-native';
import { Card } from '@rneui/themed';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={{ textAlign: 'center', fontSize: 32 }}>Comida típica</Text>
        <Card>
          <Card.Title>Pupusas</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri:
                'https://img.freepik.com/fotos-premium/primer-plano-pan-naan-que-muestra-su-superficie-ampollada-textura-esponjosa_933496-15949.jpg?w=826',
            }} />
          <Text style={styles.txt}>Calorías: 221</Text>
        </Card>

        <Card>
          <Card.Title>Tamales</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri:
                'https://img.freepik.com/foto-gratis/surtido-deliciosos-tamales-tradicionales_23-2149009498.jpg?w=740&t=st=1694225692~exp=1694226292~hmac=7088f9aafbb2e6b4c1e864c2f10b116143784d3c035cf4fdcd104add9c2f0f93',
            }} />
          <Text style={styles.txt}>Calorías: 153</Text>
        </Card>

        <Card>
          <Card.Title>Empanadas</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri:
                'https://www.recetassalvador.com/base/stock/Recipe/42-image/42-image_web.jpg',
            }} />
          <Text style={styles.txt}>Calorías: 335</Text>
        </Card>

        <Card>
          <Card.Title>Yuca frita</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri:
                'https://surfcityelsalvador.sv/wp-content/uploads/2023/01/Yuca-Frita-1-1024x683.jpg',
            }} />
          <Text style={styles.txt}>Calorías: 108</Text>
        </Card>

        <Card>
          <Card.Title>Pastelitos</Card.Title>
          <Card.Divider />
          <Card.Image
            source={{
              uri:
                'https://surfcityelsalvador.sv/wp-content/uploads/2023/01/Gastronomia-RESTAURANT-RELAJO-ZR-07102022-CD-15-1024x716.jpg',
            }} />
          <Text style={styles.txt}>Calorías: 401</Text>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  cards: {
    width: '100%'
  },
  txt: {
    textAlign: 'center',
    marginTop: 15,
  }
});


