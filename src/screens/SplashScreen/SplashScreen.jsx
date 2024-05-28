import { ActivityIndicator, Surface } from "react-native-paper";
import { styles } from "../../config/styles";

export default function SplashScreen() {
  return (
    <Surface style={styles.container}>
      <ActivityIndicator animating={true} />
    </Surface>
  );
}
