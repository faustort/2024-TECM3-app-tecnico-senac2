import { Surface, Text } from "react-native-paper";
import { styles } from "../../config/styles";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Text>Olá Bem Vindx ao nosso App</Text>
      </View>
    </Surface>
  );
}
