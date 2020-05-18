import React from 'react'
import { useRouter } from 'next/router'
import { parseISO, format } from 'date-fns'
import Head from 'next/head'
import Layout from '../../components/layout'
import AuthorCard from '../../components/authorCard'
import Metatags from '../../components/metatags'

import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'

const useStyles = makeStyles(() => ({
  tagContainer: {
    display: 'flex',
  },
  tag: {
    margin: '0 5px',
  },
}))

export default function Post({ post, classes = useStyles() }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>loading...</div>
  }

  return (
    <Layout loading={router.isFallback}>
      <Metatags
        title={`Mejor con Salud - ${post.title}`}
        desc={post.headline}
        canonical=""
        image={post.featured_media.thumbnail}
      />
      <Head>
        <title>Mejor con Salud - {post.title}</title>
      </Head>
      <article>
        <h4>
          <time dateTime={post.published}>
            {format(parseISO(post.published), 'LLLL d, yyyy')}
          </time>
        </h4>
        <h1>{post.title}</h1>

        <h3>
          Categoria: {post.categories.map(category => category.name).join(',')}
        </h3>

        <div dangerouslySetInnerHTML={{ __html: post.content }} />

        <h4>Bibliography</h4>
        <div dangerouslySetInnerHTML={{ __html: post.bibliography }} />

        <div className={classes.tagContainer}>
          {post.tags.map(tag => (
            <Chip label={tag.name} key={tag.id} className={classes.tag} />
          ))}
        </div>

        <AuthorCard author={post.author} />
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const resp = await fetch(
    'https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts?_fields=slug'
  )
  const posts = await resp.json()

  return {
    paths: posts.map(({ slug }) => ({ params: { slug: slug.toString() } })),
    fallback: true,
  }
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/${params.slug}`
  )
  const post = await res.json()

  return { props: { post } }
}
