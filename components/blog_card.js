import React from 'react'

import Link from 'next/link'

import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'

const useStyles = makeStyles(() => ({
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}))

const BlogCard = ({ post, classes = useStyles() }) => (
  <Grid item key={post.id} xs={12} md={6}>
    <CardActionArea component="a">
      <Card className={classes.card}>
        <div className={classes.cardDetails}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.headline}
            </Typography>
            <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
              <a>Continue reading...</a>
            </Link>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            className={classes.cardMedia}
            image={post.featured_media.thumbnail}
            title="Image title"
          />
        </Hidden>
      </Card>
    </CardActionArea>
  </Grid>
)

export default BlogCard
