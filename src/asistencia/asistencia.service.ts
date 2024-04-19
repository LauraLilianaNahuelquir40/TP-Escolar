import { Injectable } from '@nestjs/common';
import { CreateAsistenciaDto } from './dto/create-asistencia.dto';
import { UpdateAsistenciaDto } from './dto/update-asistencia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Asistencia } from './entities/asistencia.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AsistenciaService {
constructor(@InjectRepository(Asistencia) asistenciaRepository: Repository<Asistencia>){}

  create(createAsistenciaDto: CreateAsistenciaDto) {
    return 'Crea la asistencia';
  }

  findAll() {
    return `Retorna la asistencia`;
  }

  findOne(id: number) {
    return `Retorna la asistencia a #${id} asistencia`;
  }

  update(id: number, updateAsistenciaDto: UpdateAsistenciaDto) {
    return ` esta accion se actualiza a #${id} asistencia`;
  }

  remove(id: number) {
    return `Remueve a #${id} asistencia`;
  }
}
