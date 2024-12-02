import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const PhilosophyPage = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://example.com/philosophy-icon.png' }} // Substitua pelo URL de uma imagem de filosofia
          style={styles.headerImage}
        />
        <Text style={styles.headerTitle}>A Importância da Filosofia</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>O que é Filosofia?</Text>
        <Text style={styles.sectionText}>
          Filosofia é o estudo crítico e sistemático dos fundamentos da existência, do conhecimento, dos valores,
          da razão e da mente. Ela busca compreender questões fundamentais que nos ajudam a refletir sobre o mundo
          e o lugar do ser humano nele.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Por que estudar Filosofia?</Text>
        <Text style={styles.sectionText}>
          A filosofia desenvolve a capacidade de pensar criticamente, questionar suposições e buscar respostas para
          questões complexas. Ela nos ensina a analisar ideias, construir argumentos sólidos e enfrentar dilemas
          éticos com uma abordagem racional.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Áreas de Estudo</Text>
        <Text style={styles.sectionText}>
          A filosofia é composta por diversas áreas, cada uma focada em aspectos específicos da experiência humana:
        </Text>
        <Text style={styles.listItem}>- Metafísica: estudo da realidade e da existência.</Text>
        <Text style={styles.listItem}>- Epistemologia: investigação do conhecimento e da verdade.</Text>
        <Text style={styles.listItem}>- Ética: análise dos valores morais e princípios de conduta.</Text>
        <Text style={styles.listItem}>- Lógica: estudo dos princípios do raciocínio válido.</Text>
        <Text style={styles.listItem}>- Estética: reflexão sobre a beleza e a arte.</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Aplicações Práticas</Text>
        <Text style={styles.sectionText}>
          Embora seja considerada uma disciplina teórica, a filosofia tem aplicações práticas significativas:
        </Text>
        <Text style={styles.listItem}>- Desenvolvimento de pensamento crítico e argumentativo.</Text>
        <Text style={styles.listItem}>- Reflexão ética em decisões profissionais e pessoais.</Text>
        <Text style={styles.listItem}>- Análise de problemas complexos em áreas como política, ciência e tecnologia.</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          "A vida não examinada não vale a pena ser vivida." - Sócrates
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
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

export default PhilosophyPage;
