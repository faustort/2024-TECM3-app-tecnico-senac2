import { Button, Icon, Surface, Text } from "react-native-paper";
import { styles } from "../../config/styles";
import { View } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginScreen({ navigation }) {
  async function handleLogin() {
    // Aqui você pode adicionar a lógica para realizar o login do usuário
    console.log("Login realizado com sucesso!");
    try {
      const userRef = signInWithEmailAndPassword(auth, email, senha);
      if (userRef) {
        console.log("Usuário logado com sucesso!");
        navigation.navigate("HomeScreen");
      }
    } catch (e) {}
  }
  return (
    <Surface style={styles.container}>
      <View style={styles.container_inner}>
        <Icon source="account" size={100} />
        <Text>Vamos fazer Login</Text>
        <Button onPress={handleLogin}>Fazer login</Button>
        <Button onPress={() => navigation.navigate("RegisterScreen")}>
          Fazer cadastro
        </Button>
      </View>
    </Surface>
  );
}
