import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>This is our Index Page</h2>
      </section>
    </Layout>
  )
}