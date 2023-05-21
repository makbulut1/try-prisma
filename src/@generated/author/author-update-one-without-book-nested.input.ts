import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateWithoutBookInput } from './author-create-without-book.input';
import { Type } from 'class-transformer';
import { AuthorCreateOrConnectWithoutBookInput } from './author-create-or-connect-without-book.input';
import { AuthorUpsertWithoutBookInput } from './author-upsert-without-book.input';
import { AuthorWhereUniqueInput } from './author-where-unique.input';
import { AuthorUpdateWithoutBookInput } from './author-update-without-book.input';

@InputType()
export class AuthorUpdateOneWithoutBookNestedInput {

    @Field(() => AuthorCreateWithoutBookInput, {nullable:true})
    @Type(() => AuthorCreateWithoutBookInput)
    create?: AuthorCreateWithoutBookInput;

    @Field(() => AuthorCreateOrConnectWithoutBookInput, {nullable:true})
    @Type(() => AuthorCreateOrConnectWithoutBookInput)
    connectOrCreate?: AuthorCreateOrConnectWithoutBookInput;

    @Field(() => AuthorUpsertWithoutBookInput, {nullable:true})
    @Type(() => AuthorUpsertWithoutBookInput)
    upsert?: AuthorUpsertWithoutBookInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => AuthorWhereUniqueInput, {nullable:true})
    @Type(() => AuthorWhereUniqueInput)
    connect?: AuthorWhereUniqueInput;

    @Field(() => AuthorUpdateWithoutBookInput, {nullable:true})
    @Type(() => AuthorUpdateWithoutBookInput)
    update?: AuthorUpdateWithoutBookInput;
}
