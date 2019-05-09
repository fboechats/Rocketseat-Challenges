import React, { Component } from "react";

import { Text, StyleSheet, View, ScrollView } from "react-native";

import "./config/ReactotronConfig";
import "./config/DevToolsConfig";

import Post from "~/components/Post";

export default class App extends Component {
  state = {
    posts: [
      {
        id: 0,
        title: "Aprendendo React Native",
        author: "Filipe Boechat",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam ad quasi quo sint. Error, modi aut consequuntur explicabo soluta quibusdam quo repellat sapiente perspiciatis repudiandae ipsum incidunt officiis ex?"
      },
      {
        id: 1,
        title: "Aprendendo React Native",
        author: "Filipe Boechat",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam ad quasi quo sint. Error, modi aut consequuntur explicabo soluta quibusdam quo repellat sapiente perspiciatis repudiandae ipsum incidunt officiis ex?"
      },
      {
        id: 2,
        title: "Aprendendo React Native",
        author: "Filipe Boechat",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos totam ad quasi quo sint. Error, modi aut consequuntur explicabo soluta quibusdam quo repellat sapiente perspiciatis repudiandae ipsum incidunt officiis ex?"
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>GoNative App</Text>
        </View>
        <ScrollView>
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              title={post.title}
              author={post.author}
              content={post.content}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "powderblue"
  },

  header: {
    width: 1000,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },

  title: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
