import React from "react";
import PropTypes from "prop-types";

import { View, Text, StyleSheet } from "react-native";

const Post = ({ title, author, content }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
    <Text>{content}</Text>
  </View>
);

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-around",
    margin: 40,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10
  },

  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#ccc",
    borderStyle: "solid"
  },

  title: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "bold"
  },

  author: {
    marginBottom: 15,
    fontSize: 14,
    color: "#ccc"
  }
});

export default Post;
