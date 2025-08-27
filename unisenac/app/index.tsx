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
      <Link href={"/projects"}>Ir para PROJETOS</Link>
      <Link href={{
        pathname: "/projects/[id]",
        params: { id: 123 }
      }}>Ir para projeto 123</Link>
      <Link href={"/users"}>Ir para Usuários</Link>
      <Link href={{
        pathname: "/users/[id]",
        params: { id: 123, name: "Wagner" }
      }}>Ir para Usuário 123</Link>
      <Link href={"/(auth)/login"}>Ir para LOGIN</Link>
      <Link href={"/(auth)/signup"}>Ir para SIGNUP</Link>
      
    </View>
  );
}
