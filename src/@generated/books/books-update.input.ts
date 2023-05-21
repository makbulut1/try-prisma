import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AuthorUpdateOneWithoutBookNestedInput } from '../author/author-update-one-without-book-nested.input';

@InputType()
export class BooksUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => AuthorUpdateOneWithoutBookNestedInput, {nullable:true})
    author?: AuthorUpdateOneWithoutBookNestedInput;
}
