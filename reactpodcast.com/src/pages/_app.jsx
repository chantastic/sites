import { AudioProvider } from '@/components/AudioProvider'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  return (
    <AudioProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AudioProvider>
  )
}
