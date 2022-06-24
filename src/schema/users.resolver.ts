import { User } from "./users";
import { Resolver, Query } from "type-graphql";

@Resolver(User)
export class UsersResolver {
    @Query(() => [User])
    users(): User[] {
        return [
            { 
                id: "1",
                name: "John Doe",
                email: "John-doe@example.org",
                pets: [{
                    type: "dog",
                    owner: "John Doe",
                    name: "Fido",
                    age: 2,
                },
                {
                    type: "cat",
                    owner: "John Doe",
                    name: "Felix",
                    age: 1,
                }],
                createdAt: new Date('2022-06-05'),
                updatedAt: new Date(Date.now())
            },
            { 
                id: "2",
                 name: "Jane Doe",
                 pets: [{
                    type: "dog",
                    owner: "Jane Doe",
                    name: "Baas",
                    age: 2
                },
                {
                    type: "cat",
                    owner: "Jane Doe",
                    name: "Syl",
                    age: 1
                }],
                email: "Jane-doe@example.org",
                createdAt: new Date('2022-06-06'),
                updatedAt: new Date(Date.now())
                 }
        ];
    }
}
