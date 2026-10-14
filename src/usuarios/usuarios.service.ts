// Es el que hace el trabajo con los datos

import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario[] = []; // datos en memoria, se borran al reiniciar
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

  // Devuelve el usuario con ese id, o vacío si no existe
  findOne(id: number) {
    return this.usuarios.find((usuario) => usuario.id === id);
  }

  // PATCH: cambia solo los campos que llegaron
  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    const usuario = this.findOne(id);
    if (usuario) {
      Object.assign(usuario, updateUsuarioDto);
    }
    return usuario;
  }

  // PUT: reemplaza todos los campos
  replace(id: number, createUsuarioDto: CreateUsuarioDto) {
    const usuario = this.findOne(id);
    if (usuario) {
      usuario.nombre = createUsuarioDto.nombre;
      usuario.edad = createUsuarioDto.edad;
    }
    return usuario;
  }

  // DELETE: elimina por id
  remove(id: number) {
    const usuario = this.findOne(id);
    this.usuarios = this.usuarios.filter((u) => u.id !== id);
    return usuario;
  }
}
