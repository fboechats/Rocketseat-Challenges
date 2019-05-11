import React from "react";

import { View, Text, Image, TouchableOpacity, Linking } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const IssueItem = ({ issue }) => (
  <TouchableOpacity
    onPress={() => {
      Linking.openURL(issue.html_url);
    }}
    style={styles.container}
  >
    <Image style={styles.image} source={{ uri: issue.user.avatar_url }} />

    <View style={styles.info}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
        {issue.title}
      </Text>
      <Text style={styles.user}>{issue.user.login}</Text>
    </View>

    <Icon style={styles.icon} name="chevron-right" size={16} />
  </TouchableOpacity>
);

export default IssueItem;
