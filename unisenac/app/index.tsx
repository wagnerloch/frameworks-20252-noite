import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Olá mundo!</Text>
      <Link href={"/config"}>Ir para CONFIGURAÇÕES</Link>
      <Link href={{
        pathname: "/users/[id]",
        params: { id: 123, name: "Wagner" }
      }}>Ir para Usuário 123</Link>
    </View>
  );
}
