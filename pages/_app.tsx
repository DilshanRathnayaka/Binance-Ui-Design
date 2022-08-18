import '../styles/globals.css';
import 'antd/dist/antd.css';
import '../styles/NavBar.css'
import '../styles/footer.css'
import type { AppProps } from 'next/app'
import Layout from './Components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout><Component {...pageProps} /></Layout>

  )
}

export default MyApp
