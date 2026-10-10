import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = [];
  private siguienteId = 1;

  create(createUsuarioDto: CreateUsuarioDto) {
    const nuevo = new Usuario(
      this.siguienteId,
      createUsuarioDto.nombre,
      createUsuarioDto.edad,
    );
    this.siguienteId++;
    this.usuarios.push(nuevo);
    return nuevo;
  }

  findAll() {
    return this.usuarios;
  }

  findOne(id: number) {
    return this.usuarios.find((usuario) => usuario.id === id);
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
