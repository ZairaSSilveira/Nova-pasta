import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const PhysicalEducationPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/physical-education-icon.png' }} // Substitua pelo URL de uma imagem apropriada
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>A Importância da Educação Física</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>O que é Educação Física?</Text>
        <Text style={styles.sectionText}>
          Educação Física é uma disciplina que visa o desenvolvimento integral do ser humano por meio de atividades físicas, esportes, jogos e práticas corporais. Ela promove saúde, bem-estar e habilidades sociais.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Benefícios da Educação Física</Text>
        <Text style={styles.sectionText}>
          A prática regular de atividades físicas oferece diversos benefícios para o corpo e a mente:
        </Text>
        <Text style={styles.listItem}>- Melhoria da saúde cardiovascular e respiratória.</Text>
        <Text style={styles.listItem}>- Fortalecimento muscular e aumento da flexibilidade.</Text>
        <Text style={styles.listItem}>- Redução do estresse, ansiedade e depressão.</Text>
        <Text style={styles.listItem}>- Estímulo à disciplina, liderança e trabalho em equipe.</Text>
        <Text style={styles.listItem}>- Prevenção de doenças como obesidade e diabetes.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Educação Física na Escola</Text>
        <Text style={styles.sectionText}>
          No ambiente escolar, a Educação Física desempenha um papel crucial no desenvolvimento de crianças e adolescentes, promovendo hábitos saudáveis, integração social e senso de cooperação por meio de esportes e atividades recreativas.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Esporte e Qualidade de Vida</Text>
        <Text style={styles.sectionText}>
          A prática de esportes não apenas melhora a saúde física, mas também desenvolve habilidades emocionais e sociais, como resiliência, autocontrole e comunicação, contribuindo para uma vida equilibrada.
        </Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          "Cuidar do corpo é cuidar da mente. A Educação Física nos ensina a valorizar ambos." - Autor Desconhecido
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#444',
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    textAlign: 'justify',
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
    marginLeft: 10,
  },
  footer: {
    marginTop: 20,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
  },
});

export default PhysicalEducationPage;
