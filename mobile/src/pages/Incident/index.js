import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import api from "../../services/api";

import logoImg from "../../assets/logo.png";

import styles from "./styles";

export default function Incident() {
  const [incidents, setIncidents] = useState([]);
  const [totalIncidents, setTotalIncidents] = useState(0);
  
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  async function loadIncidents() {
    if(loading) {
      return;
    }

    if(totalIncidents > 0 && incidents.length == totalIncidents) {
      return;
    }

    setLoading(true);

    const response = await api.get("incidents", {
      params: { page }
    });

    setIncidents([...incidents, ...response.data]);
    setTotalIncidents(response.headers['x-total-count']);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text style={styles.headerText}>
          Total of <Text style={styles.headerTextBold}>{totalIncidents} cases</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Welcome!</Text>
      <Text style={styles.description}>
        Choose one of the cases below and save the day!
      </Text>

      <FlatList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        style={styles.incidentList}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>NGO:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>Case:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>Value:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailsButton}
              onPress={() => navigateToDetail(incident)}
            >
              <Text style={styles.detailsButtonText}>See more details</Text>
              <Feather name="arrow-right" size={16} color="#E82041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}
