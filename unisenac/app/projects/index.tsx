import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ProjectsScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>PROJETOS!</Text>
      <Link href={"/users/123"}>Ir para Usuário 123</Link>
    </View>
  );
}
