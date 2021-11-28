import { Fragment } from 'react'
import Head from 'next/head'
import { getAllPosts } from '../../lib/posts-util'
import AllPosts from '../../components/posts/all-posts'



function AllPostsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="all posts an tutorials"/>
      </Head>
      <AllPosts posts={props.posts}/>
    </Fragment>
  )
}

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }

}

export default AllPostsPage
