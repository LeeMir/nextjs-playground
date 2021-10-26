import { useRouter } from 'next/dist/client/router';

const User = () => {
  const router = useRouter();

  const { user } = router.query;

  return <h3>Hello, {user}!</h3>;
}

export default User;
