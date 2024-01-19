import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  const [borderColor, setBorderColor] = useState<'lightgray' | 'lighthgreen'>('lightgray')

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 30 }}>
        Open up App.tsx to start working on your app!
      </Text>
      <Text style={{ textAlign: 'center', color: '#333333', marginBottom: 5, fontSize: 12 }}>
        Press and hold this button to record your voice. Release the button to send the rocording, and you'll get a response
      </Text>
      <Text style={{ marginVertical: 10, fontSize: 17 }}>Your message:</Text>
      <Pressable
        onPressIn={() => { setBorderColor('lighthgreen') }}
        onPressOut={() => { setBorderColor('lightgray') }}
        style={{
          width: '90%',
          padding: 30,
          gap: 10,
          borderWidth: 3,
          alignItems: 'center',
          borderRadius: 10,
          borderColor: borderColor
        }}
      >
        <Text>Hold to Speak</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
});
