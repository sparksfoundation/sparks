import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>SPARKS Foundation</title>
        <meta name="description" content="SPARKS Foundation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M63.8848 30.0283L35.6849 1.82843C34.1228 0.26633 31.5901 0.266327 30.028 1.82842L1.82811 30.0283C0.266018 31.5904 0.266014 34.1231 1.82811 35.6852L30.028 63.8851C31.5901 65.4472 34.1228 65.4472 35.6849 63.8851L63.8848 35.6852C65.4469 34.1231 65.4469 31.5904 63.8848 30.0283Z" fill="#F9F9F9" />
        </svg>
        <h1>SPARKS Foundation</h1>
        <h3>coming soon</h3>
      </main>
    </>
  )
}
