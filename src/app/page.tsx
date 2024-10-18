async function getData() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
}

export default async function Page() {
	const data = await getData();

	return (
		<>
			<h1>Next.js</h1>
		</>
	);
}
