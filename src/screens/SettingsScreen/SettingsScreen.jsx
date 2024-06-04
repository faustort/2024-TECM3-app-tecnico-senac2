import { Button, Surface, Text } from "react-native-paper";
import { styles } from "../../config/styles";


export default function SettingsScreen(){
    

    return(
        <Surface
            style={styles.container}
        >
            <Text>Configurações Maravilhosas do seu APP</Text>
            <Button>Alternar tema</Button>

        </Surface>
    )
}