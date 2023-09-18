/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import RealmConfig, {Session} from './RealmConfig';

const {useQuery} = RealmConfig;

function Home(): JSX.Element {
  const sessionsQuery = useQuery(Session, collection =>
    collection.sorted('name'),
  );

  console.log({sessionsQuery});

  // const [sessions, setSessions] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Session</Text>
      <FlatList
        style={styles.containerList}
        contentContainerStyle={{flexGrow: 1}}
        data={sessionsQuery || []}
        ItemSeparatorComponent={() => (
          <View
            style={{height: 1, marginVertical: 0.5, backgroundColor: '#3d3d3d'}}
          />
        )}
        renderItem={({item}) => {
          return <Text style={styles.itemText}>{item.name}</Text>;
        }}
      />

      {/* {loading && (
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#0000003f',
            },
          ]}>
          <ActivityIndicator size={'large'} color={'#fff'} />
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {fontSize: 22, fontWeight: 'bold'},
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
  },
  containerList: {
    backgroundColor: '#0000001f',
    borderRadius: 10,
    width: '100%',
    marginTop: 10,
  },
  itemText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    padding: 16,
  },
});

export default Home;
