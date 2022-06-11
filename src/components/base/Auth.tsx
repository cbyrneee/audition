import { useSession } from 'next-auth/react';

export function Auth({ children }: { children: React.ReactNode }) {
  const { status } = useSession({ required: true });

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
