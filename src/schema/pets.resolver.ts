import { Pet } from "./pets";
import { Resolver, Query } from "type-graphql";

@Resolver(Pet)
export class PetsResolver {
    @Query(() => [Pet])
    pets(): Pet[] {
        return [{ 
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
            },
            {
                type: "dog",
                owner: "Jane Doe",
                name: "Arf",
                age: 2,
            },
            {
                type: "cat",
                owner: "Jane Doe",
                name: "Syl",
                age: 1,
            }
        ];
    }
}
