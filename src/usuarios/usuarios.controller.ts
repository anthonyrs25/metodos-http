// Recibe los pedidos HTTP y se los pasa al service
// @Body: datos del JSON
// @Param: dato de la URL

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Put,
  Param,
  Delete,
  Options,
  Header,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  // Crear usuarios
  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.create(createUsuarioDto);
  }

  // Listar todos los usuarios
  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  // Buscar 1 usuario
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(+id);
  }

  // Cambiar solo los datos enviados
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuariosService.update(+id, updateUsuarioDto);
  }

  // Reemplazar todos llos datos del usuario
  @Put(':id')
  replace(@Param('id') id: string, @Body() createUsuarioDto: CreateUsuarioDto) {
    return this.usuariosService.replace(+id, createUsuarioDto);
  }

  // Eliminar un usuario
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usuariosService.remove(+id);
  }

  // Métodos permitidos
  // OPTIONS: no devuelve datos, devuelve los métodos permitidos
  @Options()
  @Header('Allow', 'GET, HEAD, POST, OPTIONS')
  optionsAll() {}

  @Options(':id')
  @Header('Allow', 'GET, HEAD, PUT, PATCH, DELETE, OPTIONS')
  optionsOne() {}
}
