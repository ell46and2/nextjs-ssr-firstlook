// import React from 'react';
import Link from 'next/link';

const Header = (props) => {
	return (
		<div>
	        <Link href="/">
	          	<a style={linkStyle}>Home</a>
	        </Link>
	        <Link href="/about">
	          	<a style={linkStyle}>About</a>
	        </Link>
	    </div>
	);
}

const linkStyle = {
	marginRight: 15
}

export default Header;

