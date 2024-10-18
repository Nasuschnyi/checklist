import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Logo() {
	return (
		<Link
			href="/"
			className="logo"
		>
			<Image
				src="/images/logo.png"
				alt="logo"
				width={300}
				height={43}
				priority={true}
				quality={100}
			></Image>
		</Link>
	);
}
