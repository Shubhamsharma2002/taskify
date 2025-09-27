import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text>Edit app/index.tsx to edit this screen oky we will.</Text>
      <Link href={"/about"}>Go to about</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
     flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"lightgreen"
  }
})