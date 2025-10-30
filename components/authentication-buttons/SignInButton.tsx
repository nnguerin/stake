import { useAuthContext } from "@/hooks/use-auth-context";
import { Alert } from "react-native";
import { Button } from "react-native-paper";

interface SignInButtonProps {
  email: string;
  password: string;
  label?: string;
}

const SignInButton = ({
  email,
  password,
  label = "Sign In",
}: SignInButtonProps) => {
  const { signIn } = useAuthContext();

  const handleSignIn = async () => {
    try {
      await signIn(email, password);
    } catch (error: any) {
      Alert.alert("Error signing in", error.message);
    }
  };

  return (
    <Button mode="outlined" onPress={handleSignIn} textColor="#2C2C2C">
      {label}
    </Button>
  );
};
export default SignInButton;
