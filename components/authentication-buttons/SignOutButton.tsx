import { useAuthContext } from "@/hooks/use-auth-context";
import { Button } from "react-native-paper";

const SignOutButton = () => {
  const { signOut } = useAuthContext();
  return <Button onPress={signOut}>Sign Out</Button>;
};
export default SignOutButton;
