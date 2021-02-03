//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
interface IMembers {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: false
}
// create a component
const Main = () => {
  const [members, setMembers] = useState<IMembers[]>([])
  useEffect(() => {
    fetch('https://api.github.com/orgs/occamengenharia/members').then(response => {
      response.json().then(data => {
        setMembers(data);
      })
    })
  }, [])
  return (
    <FlatList
    contentContainerStyle={{padding: 24}}
      data={members}
      keyExtractor={member => member.login}
      renderItem={({ item: member }) => (
        <View>
          <Image style={styles.image} source={{ uri: member.avatar_url }} />
          <Text style={styles.member}>{member.login}</Text>
        </View>
      )} />
  );
};

// define your styles
const styles = StyleSheet.create({
  member:{
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:20
  },
  image:{
    width:48,
    height: 48,
    borderRadius:24,
    marginBottom:16,

  }
});

//make this component available to the app
export default Main;
