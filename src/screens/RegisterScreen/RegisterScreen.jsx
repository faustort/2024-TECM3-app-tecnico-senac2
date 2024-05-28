import { View } from "react-native";
import { Icon, Surface, Text } from "react-native-paper";
import { styles } from "../../config/styles";

export default function RegisterScreen() {
  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Icon source="account-check" size={100} />
        <Text>Tela de Registro</Text>
      </View>
    </Surface>
  );
}
