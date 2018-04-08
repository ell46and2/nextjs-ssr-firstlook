import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';

const Index = (props) => {
	return (
		<div>
			<Head>
			      <title>Homepage Title</title>
			      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head>
			<Layout>
			    <h1>Batman TV Shows</h1>
			    <ul>
			      {props.shows.map(({show}) => (
			        <li key={show.id}>
			          <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
			            <a>{show.name}</a>
			          </Link>
			        </li>
			      ))}
			    </ul>
			    <style jsx>{`
			    	h1 {
			    		font-family: "Arial";
			    		font-size: 50px;
			    	}
			    	li {
			    		list-style: none;
			    		margin: 10px 0;
			    	}
			    	a {
			    		text-decoration: none;
			    		color: black;
			    		opacity: 0.7;
			    	}
			    	a:hover {
			    		opacity: 1;
			    	}
			    `}</style>
			</Layout>
		</div>
	);
}

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    shows: data
  }
}

export default Index;





