import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutBookInput } from './author-create-without-book.input';

@InputType()
export class AuthorCreateOrConnectWithoutBookInput {

    @Field(() => AuthorWhereUniqueInput, {nullable:false})
    @Type(() => AuthorWhereUniqueInput)
    where!: AuthorWhereUniqueInput;

    @Field(() => AuthorCreateWithoutBookInput, {nullable:false})
    @Type(() => AuthorCreateWithoutBookInput)
    create!: AuthorCreateWithoutBookInput;
}
