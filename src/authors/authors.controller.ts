import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { AuthorCreateInput } from 'src/@generated/author/author-create.input';
import { AuthorUpdateInput } from 'src/@generated/author/author-update.input';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  create(@Body() createAuthorDto: AuthorCreateInput ) {
    return this.authorsService.create(createAuthorDto);
  }

  @Get()
  findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorsService.findOne({id: +id});
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorDto: AuthorUpdateInput) {
    return this.authorsService.update({id: +id}, updateAuthorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorsService.remove({id: +id});
  }
}
