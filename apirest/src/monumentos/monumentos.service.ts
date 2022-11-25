import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateMonumentoDto } from './dto/create-monumento.dto';
import { UpdateMonumentoDto } from './dto/update-monumento.dto';
import { Monumento } from './monumento.interface';

@Injectable()
export class MonumentosService {

  lista: Monumento[] = [
    {
      id: 1,
      name: 'La Mezquita Catedral',
      code: 'ESP',
      country: 'España',
      city: 'Córdoba',
      location: '37.8786222,-4.780333',
      desc: 'La mezquita o mezquita-catedral de Córdoba, ​​ «Santa María Madre de Dios» o «Gran mezquita de Córdoba», actualmente conocida como la Catedral de la Asunción de Nuestra Señora de forma eclesiástica, es un edificio de la ciudad de Córdoba, España.',
      url: 'https://lh5.googleusercontent.com/p/AF1QipNGsSSzoBhKDV4mQaRu9E8bD8ToadWNYWosS2BB=w243-h406-n-k-no-nu'
    },
    {
      id: 2,
      name: 'Coliseo de Roma',
      code: 'ITA',
      country: 'Italia',
      city: 'roma',
      location: '41.8902102,12.4922309',
      desc: 'El Coliseo o Anfiteatro Flavio ​ es un anfiteatro de la época del Imperio romano, construido en el siglo I. Está ubicado en el este del Foro Romano, y fue el más grande de los que se construyeron en el Imperio romano.',
      url: 'https://lh3.googleusercontent.com/p/AF1QipNc3f-_mIxnDhFqa53rkVGiZuWJf-c_L4RcU8Pu=s680-w680-h510'
    },    {
      id: 3,
      name: 'Torre de Pisa',
      code: 'ITA',
      country: 'Italia',
      city: 'Pisa',
      location: '43.722952,10.396597',
      desc: 'La torre de Pisa o torre inclinada de Pisa es la torre campanario de la catedral de Pisa, situada en la plaza del Duomo de Pisa, en la ciudad del mismo nombre, municipio de la región italiana de la Toscana y capital de la provincia homónima de Italia',
      url: 'https://lh3.googleusercontent.com/p/AF1QipNCVdTcDJAScCRhWktcizQUxYrlj59Ywhv44uKw=s680-w680-h510'
    },    {
      id: 4,
      name: 'Monumento a Lincoln',
      code: 'USA',
      country: 'Estados Unidos',
      city: 'Whashington DC',
      location: '38.8892686,-77.0501761,15z/data=!4m5!3m4!1s0x0:0x36c7be2366728e38!8m2!3d38.8892686!4d-77.0501761',
      desc: 'Abraham Lincoln es una estatua monumental del decimosexto presidente de los Estados Unidos, Abraham Lincoln, esculpida por Daniel Chester French y tallada por los hermanos Piccirilli. Está en el Monumento a Lincoln, en el National Mall, Washington D. C. Se inauguró en 1922',
      url: 'https://lh3.googleusercontent.com/p/AF1QipOXTCl_zwCTU_pxYjc4M5H8_pXIIAfoty8mNoOd=s680-w680-h510'
    },    {
      id: 5,
      name: 'Cristo Redentor',
      code: 'BRA',
      country: 'Brasil',
      city: 'rio de Janeiro',
      location: '-22.951916,-43.2104872',
      desc: 'El Cristo Redentor o Cristo del Corcovado es una estatua art déco que representa a Jesús de Nazaret, con los brazos abiertos, mostrando a la ciudad de Río de Janeiro, Brasil. La estatua tiene una altura de treinta metros sobre un pedestal de ocho metros.​​',
      url: 'https://lh3.googleusercontent.com/p/AF1QipNjCrvsH8mizWUsOkOqswXekQwFj3PJiaMLj0bO=s680-w680-h510'
    }
  ]






  create(createMonumentoDto: CreateMonumentoDto) {
    if(createMonumentoDto != null){
      return this.lista.push(createMonumentoDto);
    }
    throw new HttpException(
      {error: 'error de creacion', status: HttpStatus.NOT_ACCEPTABLE},
      HttpStatus.NOT_ACCEPTABLE,
    );
  }

  findAll() {
    return this.lista;;
  }

  findOne(id: number) {
    if(id === 1){
      for (let m of this.lista) {
        if(id == m.id){
          return m
        }
      }
    }
    throw new HttpException(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'Usuario no encontrado'
      },
       HttpStatus.NOT_FOUND);
    
  }

  update(id: number, updateMonumentoDto: UpdateMonumentoDto) {
    if(id === 1 && updateMonumentoDto){
      let l = this.findOne(id);

      for(let f of this.lista){
        if(f == l){
          f = l;
        }
    }}
    throw new HttpException(
      'El monumento no se ha actualizado', 
      HttpStatus.INTERNAL_SERVER_ERROR,
    )
  }

  remove(id: number) {
    if(id === 1){
      return this.lista.splice(id);
    }
  }
}


