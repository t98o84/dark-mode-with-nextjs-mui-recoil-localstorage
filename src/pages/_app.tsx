import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil';
import { Theme } from '../components/Theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </RecoilRoot>
  );
}

export default MyApp

