import { Controller, Get, Put, Patch, Post, Delete, Body, Param } from '@nestjs/common';

    interface Monument {
        name: string;
        country: string;
        city: string;
    }

@Controller("/monuments")
export class MonumentsController {
  constructor(private readonly monumentService: MonumentsService);

  @Get()
  getAllMonuments() {
    return this.monumentService.getAllMonuments();
  }

  @Get(":id")
  getMonumentById(@Param("id") id: string) {
      return this.monumentService.getMonumentById(id);
  }

  @Post()
  createMonument(@Body() monument: Monument) {
      return this.monumentService.createMonument(id);
  }

  @Put(":id")
  replaceMonument(@Param("id") id: string, @Body() monument: Monument) {
      return this.monumentService.replaceMonument(id, monument);
  }

  @Patch(":id")
  updateMonument(@Param("id") id: string, @Body() monument: Monument) {
      return this.monumentService.updateMonument(id, monument);
  }

  @Delete(":id")
  deleteMonument(@Param("id") id: string) {
      return this.monumentService.deleteMonument(id);
  }
}

