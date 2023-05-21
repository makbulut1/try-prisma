import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BooksCreateNestedManyWithoutAuthorInput } from '../books/books-create-nested-many-without-author.input';

@InputType()
export class AuthorCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => BooksCreateNestedManyWithoutAuthorInput, {nullable:true})
    book?: BooksCreateNestedManyWithoutAuthorInput;
}
