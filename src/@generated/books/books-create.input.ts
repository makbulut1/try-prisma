import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AuthorCreateNestedOneWithoutBookInput } from '../author/author-create-nested-one-without-book.input';

@InputType()
export class BooksCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => AuthorCreateNestedOneWithoutBookInput, {nullable:true})
    author?: AuthorCreateNestedOneWithoutBookInput;
}
