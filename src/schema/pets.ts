import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class Pet {
    
    @Field(() => ID)
    name: string;

    @Field(() => String)
    type: string;

    @Field(() => String)
    owner: string;

    @Field(() => Number)
    age: number;
}
