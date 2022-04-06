import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { GetStaticProps } from 'next'

function About() {
    return(
        <Layout>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <div>About</div>
            </section>
        </Layout>
    )
  }
  
export default About
  