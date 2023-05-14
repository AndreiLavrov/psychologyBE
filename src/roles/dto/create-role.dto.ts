import { ApiProperty } from '@nestjs/swagger';

export enum Roles {
  'ADMIN',
  'USER',
}

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'role type' })
  readonly value: string;
  @ApiProperty({ example: 'Administrator', description: 'role description' })
  readonly description: string;
}
