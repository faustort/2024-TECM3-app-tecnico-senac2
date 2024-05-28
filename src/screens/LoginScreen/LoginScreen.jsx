import { Button, Icon, Surface, Text } from "react-native-paper";
import { styles } from "../../config/styles";
import { View } from "react-native";

export default function LoginScreen({navigation}) {
    
  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Icon source="account" size={100} />
        <Text>Vamos fazer Login</Text>
        <Button onPress={() => navigation.navigate("RegisterScreen")}>
          Fazer cadastro
        </Button>
      </View>
    </Surface>
  );
}
