import { signInWithEmailAndPassword, User } from "firebase/auth";

export default function () {
  const { $auth } = useNuxtApp();

  const user = useState<User | null>("fb_user", () => null);

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const userCreds = await signInWithEmailAndPassword(
        $auth,
        email,
        password
      );
      if (userCreds) {
        user.value = userCreds.user;
        return true;
      }
    } catch (error: unknown) {
      return false;
    }
    return false;
  };

  return {
    user,
    loginUser,
  };
}
