import React, { useState, useEffect, useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Layout from '../components/layout'
import Metatags from '../components/metatags'

import BlogCard from '../components/blog_card'

const useStyles = makeStyles(theme => ({
  loadMore: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(3),
  },
}))

const Blog = ({ data, classes = useStyles() }) => {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState(data || [])
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const [refetch, setRefetch] = useState(true)
  const isFirstRun = useRef(true)

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false
      return
    }
    async function fetchPosts() {
      setLoading(true)
      const resp = await fetch(
        `/api/posts?qs=${search}&orderby=relevance&page=${page}`
      )
      const json = await resp.json()
      setPosts(posts.concat(json.data))
      setLoading(false)
    }
    fetchPosts()
  }, [page, refetch])

  const handleSearch = async () => {
    setPosts([])
    setPage(1)
    setRefetch(!refetch)
  }

  const loadMore = () => {
    setPage(page + 1)
  }

  return (
    <Layout
      search={search}
      handleSearch={handleSearch}
      setSearch={setSearch}
      home
      loading={loading}
    >
      <Metatags
        title="Mejor con Salud"
        desc="Revista sobre buenos hábitos y cuidados para tu salud"
      />
      <Grid container spacing={4}>
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </Grid>
      <div className={classes.loadMore}>
        <Button variant="contained" color="primary" onClick={loadMore}>
          Load more
        </Button>
      </div>
    </Layout>
  )
}

export default Blog

export async function getServerSideProps() {
  const res = await fetch(
    `https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts?orderby=relevance`
  )
  const data = await res.json()

  return { props: { data } }
}
