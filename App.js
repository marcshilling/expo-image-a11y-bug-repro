import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Pressable } from 'react-native';
import { Image } from 'expo-image';

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('pressed')}>
        <Image
          source={{ uri: 'https://dummyimage.com/600x400/000/fff&text=Hello+World' }}
          style={styles.image}
          contentFit="cover"
          accessible={false}
          accessibilityElementsHidden
        />
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' },
  image: { width: 300, height: 300 },
});