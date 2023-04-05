import React, { FC } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const users: FC = () => {
    const { data: session } = useSession();
    console.log(session);
    if (session) {
        return (
            <div>
                <p>welcome  {session.user.email}</p>
                <button onClick={() => signOut()}>Sign out</button>
            </div>
        );
    } else {
        return (
            <div>
                <p>You are not signed in. </p>
<button onClick={() => signIn()}>Sign In</button>
            </div>
        );
    }
};

export default users;