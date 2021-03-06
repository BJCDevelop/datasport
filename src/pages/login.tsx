import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'

export default function Login() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle} - Login</title>
            </Head>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Login</h2>
            </section>
        </Layout>
    )
}