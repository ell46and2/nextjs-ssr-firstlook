import Layout from '../components/MyLayout';
import Head from 'next/head';

const Post = (props) => {
	return (
		<div>
			<Head>
		      <title>{props.show.name}</title>
		      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
		    </Head>
			<Layout>
				<h1>{props.show.name}</h1>
				<p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
	       		<img src={props.show.image.medium}/>
			</Layout>
		</div>
	);
}

Post.getInitialProps = async function (context) {
  const { id } = context.query
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post;

