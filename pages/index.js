import Head from 'next/head'
import SearchUser from '../src/components/SearchUser'

export default function Home() {
  return (
    <div className={'max-w-screen-md mx-auto'}>
      <Head>
        <title>Github Timeline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={''}>
        <SearchUser />
      </main>    
      <footer className={'mt-4 text-center font-semibold'}>
        <a
          href='https://twitter.com/rishabh_grg'
          target="_blank"
          rel="noopener noreferrer"
          className='p-2 rounded-lg hover:bg-purple-200'
        >
          Developed by Rishabh Garg
        </a>
      </footer>
    </div>
  )
}
