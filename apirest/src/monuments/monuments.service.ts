import { Injectable } from '@nestjs/common';
import { CreateMonumentDto } from './dto/createMonument.dto';
import { UpdateMonumentDto } from './dto/updateMonument.dto';
import { Monument } from "./monumentos.model";

@Injectable()
export class MonumentsService {

  getAllMonuments() {
    return "hola";
  }

  getMonumentById(id: string) {
    return "hola ${id}";
  }

  createMonument(createMonumentDto: CreateMonumentDto) {
    return "";
  }

  replaceMonument(id: string, monument: Monument) {
    return "";
  }

  updateMonument(d: string, updateMonumentDto: UpdateMonumentDto) {
    return "";
  }

  deleteMonument(id: string, monument: Monument) {
    return "";
  }
}
