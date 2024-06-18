import { Surface, Text, Button } from "react-native-paper";
import { styles } from "../../config/styles";
import { View } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Text>Olá Bem Vindx ao nosso App</Text>
        <Button onPress={() => navigation.navigate("PhotoPostScreen")}>
          Nova Postagem
        </Button>
        <Button onPress={() => navigation.navigate("FeedScreen")}>
          Ver Feed
        </Button>
      </View>
    </Surface>
  );
}
