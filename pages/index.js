import { dehydrate, useQuery } from "react-query";

import { queryClient, getUsers, getPets } from "../src/api";
import { Grid, Card, Image, Text, Title, Container } from "@mantine/core";

export async function getServerSideProps() {
	await queryClient.prefetchQuery(["users"], () => getUsers());
	await queryClient.prefetchQuery(["pets"], () => getPets());

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
		},
	};
}

export default function Home() {
	const { data: usersData } = useQuery(["users"], () => getUsers());
	const { data: petsData } = useQuery(["pets"], () => getPets());

	return (
		<div>
			<Container>
				<Title>Users</Title>
				<Grid grow>
					{usersData?.users.map((user) => (
						<Grid.Col gutter={40} xs={12} md={6} lg={4} key={user.id} p={10}>
							<Card>
								<Image src={user.avatar} alt="user" />
								<Title>{user.name}</Title>
								<Text>{user.email}</Text>
							</Card>
						</Grid.Col>
					))}
				</Grid>
				<Title>Pets</Title>
				<Grid>
					{petsData?.pets.map((pet, i) => (
						<Grid.Col
							gutter={40}
							xs={12}
							md={6}
							lg={4}
							key={[pet.name, i].join(":")}
							p={5}
						>
							<Card>
								<Title>{pet.name}</Title>
								<Text>{pet.age}</Text>
								<Text>{pet.owner}</Text>
							</Card>
						</Grid.Col>
					))}
				</Grid>
			</Container>
		</div>
	);
}
