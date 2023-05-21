import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutBookInput } from './author-create-without-book.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutBookInput } from './author-create-or-connect-without-book.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';

@InputType()
export class AuthorCreateNestedOneWithoutBookInput {

    @Field(() => AuthorCreateWithoutBookInput, {nullable:true})
    @Type(() => AuthorCreateWithoutBookInput)
    create?: AuthorCreateWithoutBookInput;

    @Field(() => AuthorCreateOrConnectWithoutBookInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutBookInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutBookInput;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: AuthorWhereUniqueInput;
}
