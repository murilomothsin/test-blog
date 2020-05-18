import React from 'react'
import Link from 'next/link'

import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Container from '@material-ui/core/Container'
import LinearProgress from '@material-ui/core/LinearProgress'

import SearchInput from '../components/seachInput'

const useStyles = makeStyles(theme => ({
  fixedToolbar: {
    position: 'fixed',
    top: '0',
    zIndex: theme.zIndex.appBar,
    width: '65%',
  },
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#fafafa',
  },
  toolbarTitle: {
    flex: 1,
  },
  logo: {
    height: '50px',
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.7)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  mainContent: {
    padding: theme.spacing(3),
    marginTop: '65px',
  },
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

export default function Layout({
  children,
  search,
  handleSearch,
  setSearch,
  home,
  loading,
}) {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <div className={classes.fixedToolbar}>
          <Toolbar className={classes.toolbar}>
            <Link href="/">
              <a className={classes.toolbarTitle}>
                <img src="/images/logo-mobile.svg" className={classes.logo} />
              </a>
            </Link>
            {home ? (
              <form noValidate>
                <SearchInput
                  value={search}
                  onChange={handleSearch}
                  setSearch={setSearch}
                />
              </form>
            ) : null}
          </Toolbar>
          {loading ? <LinearProgress /> : null}
        </div>
        <main className={classes.mainContent}>{children}</main>
      </Container>
    </>
  )
}
