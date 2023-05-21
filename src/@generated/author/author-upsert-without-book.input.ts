import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorUpdateWithoutBookInput } from './author-update-without-book.input';
import { Type } from 'class-transformer';
import { AuthorCreateWithoutBookInput } from './author-create-without-book.input';

@InputType()
export class AuthorUpsertWithoutBookInput {

    @Field(() => AuthorUpdateWithoutBookInput, {nullable:false})
    @Type(() => AuthorUpdateWithoutBookInput)
    update!: AuthorUpdateWithoutBookInput;

    @Field(() => AuthorCreateWithoutBookInput, {nullable:false})
    @Type(() => AuthorCreateWithoutBookInput)
    create!: AuthorCreateWithoutBookInput;
}
