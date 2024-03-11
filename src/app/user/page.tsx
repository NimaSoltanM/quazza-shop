import { auth } from '@/auth/auth';
import ProfileCards from './profile-cards';

export default async function Component() {
  const session = await auth();

  if (!session) return;

  return (
    <>
      <ProfileCards />
      {JSON.stringify(session)}
    </>
  );
}
