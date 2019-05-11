import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";

import { withNavigation } from "react-navigation";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const RepositoryItem = ({ repository, navigation }) => (
  <TouchableOpacity
    onPress={() =>
      navigation.navigate("Issues", {
        title: repository.name,
        full_name: repository.full_name
      })
    }
    style={styles.container}
  >
    <Image style={styles.image} source={{ uri: repository.owner.avatar_url }} />

    <View style={styles.info}>
      <Text style={styles.repo}>{repository.name}</Text>
      <Text style={styles.org}>{repository.owner.login}</Text>
    </View>

    <Icon style={styles.icon} name="chevron-right" size={16} />
  </TouchableOpacity>
);

export default withNavigation(RepositoryItem);
