import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { AuthorCreateInput } from 'src/@generated/author/author-create.input';
import { AuthorWhereUniqueInput } from 'src/@generated/author/author-where-unique.input';
import { AuthorUpdateInput } from 'src/@generated/author/author-update.input'
@Injectable()
export class AuthorsService {
  constructor(private prisma : PrismaService){}
   
  create(createAuthorDto: AuthorCreateInput ) {
    return this.prisma.author.create({
      data : createAuthorDto,
    });
  }

  findAll() {
    return this.prisma.author.findMany();
  }

  findOne(authorWhereUniqueInput: AuthorWhereUniqueInput) {
    return this.prisma.author.findUnique({
      where: authorWhereUniqueInput,
    });
  }

  update(where: AuthorWhereUniqueInput, data: AuthorUpdateInput) {
    return this.prisma.author.update({
      data,
      where,
    });
  }

  remove(where: AuthorWhereUniqueInput) {
    return this.prisma.author.delete({where});
  }
}
