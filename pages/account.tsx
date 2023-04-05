import React from 'react';
import { useSession, signOut, getSession, GetServerSideProps } from 'next-auth/react';

const account: React.FC = () => {
  const { data: session, status } = useSession({ required: true });

  if (status === 'authenticated') {
    return (
      <div>
        <p>welcome {session.user.name}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in. </p>
      </div>
    );
  }

};

export default account;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context) as { user: { name: string } };

  return {
    props: { session },
    notFound: !session,
  };
};