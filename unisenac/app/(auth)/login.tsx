import { Link } from "expo-router";
import { Button, Image, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 48, fontWeight: "bold" }}>SUPER PROJETOS</Text>
      <Image
        source={{ uri: "https://icons.veryicon.com/png/o/internet--web/webapp-1/user-login-2.png" }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput placeholder="Digite seu email" />
      <TextInput placeholder="Digite sua senha" secureTextEntry />
      <Button title="Login" onPress={() => {}} />
      <Link href={"/signup"}>Não tem uma conta? Crie uma</Link>
    </View>
  );
}
