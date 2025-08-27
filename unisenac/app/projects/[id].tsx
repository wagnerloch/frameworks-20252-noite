import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function ProjectScreen() {
  const { id, name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Details of project {id} </Text>
      <Text>Name: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
