import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import glob from 'glob'

export default function Home({fileNames, paths}) {
  return (
    <div className="container">
      <Head>
        <title>Olá, mundo - Guilherme Rodrigues</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <h1>Olá, mundo</h1>
      </header>

      <aside>
        <div>
          <img src="/profile.jpg" alt="Guilherme Rodrigues"/>
          <p>
            Blog do <a href="https://mobile.twitter.com/guirodriguesrio">Guilherme Rodrigues</a>.
            &nbsp;
            Comunicação, Cultura, Cliente, Código.
          </p>
        </div>
      </aside>

      <main>
        {paths.map(p => (
          <article key={p}>
            <div>
              <Link href={`/${p}`}>
                <a>{p}</a>
              </Link>
            </div>
          </article>
        ))}
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const fileNames = glob.sync('**/*.mdx', {cwd: './pages'})
  const paths = fileNames.map(f => f.replace('.mdx', ''))
  return {props: {fileNames, paths}}
}
