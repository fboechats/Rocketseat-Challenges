import React from "react";

import { withNavigation } from "react-navigation";

import { Text, View, StatusBar, TouchableOpacity } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const Issues = ({ navigation, filterIssues, filter }) => (
  <>
    <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => navigation.navigate("Welcome")}
      >
        <Icon name="chevron-left" size={24} />
      </TouchableOpacity>
      <Text style={styles.title}>{navigation.getParam("title")}</Text>
    </View>
    <View style={styles.filter}>
      <TouchableOpacity
        onPress={() => filterIssues("all")}
        style={styles.button}
      >
        <Text style={[styles.buttonText, filter === "all" && styles.active]}>
          Todas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => filterIssues("open")}
        style={styles.button}
      >
        <Text style={[styles.buttonText, filter === "open" && styles.active]}>
          Abertas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => filterIssues("closed")}
        style={styles.button}
      >
        <Text style={[styles.buttonText, filter === "closed" && styles.active]}>
          Fechadas
        </Text>
      </TouchableOpacity>
    </View>
  </>
);

export default withNavigation(Issues);
