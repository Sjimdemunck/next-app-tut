import { ObjectType, Field, ID } from "type-graphql";
import { Pet } from "./pets";


@ObjectType()
export class User {
    @Field(() => ID)
    id: string;

    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;
    
    @Field(() => [Pet])
    pets: Pet[];

    @Field(() => Date)
    createdAt: Date;

    @Field(() => Date)
    updatedAt: Date;
}           
