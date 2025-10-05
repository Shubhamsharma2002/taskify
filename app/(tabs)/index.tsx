import useTheme from "@/hooks/useTheme";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();
  return (
    <View
      style={styles.container}
    >
    
      <Text>Edit app/index.tsx to edit this screen oky we will.</Text>
     
     
      <TouchableOpacity>
        <Text onPress={toggleDarkMode}>swith to dark</Text>
      </TouchableOpacity>
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