import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  return(
        <Component {...pageProps} />
  );
}

export default MyApp
