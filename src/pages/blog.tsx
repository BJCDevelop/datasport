import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'

export default function Blog({
    allPostsData,
    blog,
  }: {
    allPostsData: {
      date: string
      title: string
      id: string
    }[]
    blog: boolean
  }) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle} - Blog</title>
        </Head>
        {blog ? (
          <>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                        <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                        </small>
                    </li>
                    ))}
                </ul>
            </section>
            <div className={utilStyles.backToBlog}>
                <Link href="/blog">
                    <a>← Back to blog</a>
                </Link>
            </div>
          </>
        ) : (
          <>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) => (
                    <li className={utilStyles.listItem} key={id}>
                        <Link href={`/posts/${id}`}>
                        <a>{title}</a>
                        </Link>
                        <br />
                        <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                        </small>
                    </li>
                    ))}
                </ul>
            </section>
          </>
        )}
      </Layout>
    )
  }
  
  export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }