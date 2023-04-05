import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { Session } from 'next-auth'
import { FC } from 'react'

type MyAppProps = AppProps & {
  session: Session
}

const MyApp: FC<MyAppProps> = ({ Component, pageProps, session }) => {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
