import { useAuthContext } from "@/hooks/use-auth-context";
import { Alert } from "react-native";
import { Button } from "react-native-paper";

interface SignUpButtonProps {
  email: string;
  password: string;
}

const SignUpButton = ({ email, password }: SignUpButtonProps) => {
  const { signUp } = useAuthContext();

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
    } catch (error: any) {
      Alert.alert("Error signing up", error.message);
    }
  };

  return (
    <Button
      mode="contained"
      onPress={handleSignUp}
      textColor="#F4EFE7"
      buttonColor="#2C2C2C"
    >
      Sign Up
    </Button>
  );
};
export default SignUpButton;
