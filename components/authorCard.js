import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles(theme => ({
  root: {
    minWidth: 275,
  },
  nameRow: {
    display: 'flex',
    margin: '0 2px',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}))

export default function AuthorCard({ author }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.nameRow}>
          <Avatar
            alt={`${author.name} avatar`}
            src={author.picture}
            className={classes.large}
          />
          <Typography variant="h5" component="h2">
            {author.name}
          </Typography>
        </div>
        <Typography className={classes.pos} color="textSecondary">
          {author.profession}
        </Typography>
        <Typography variant="body2" component="p">
          <div dangerouslySetInnerHTML={{ __html: author.description }} />
        </Typography>
      </CardContent>
    </Card>
  )
}
