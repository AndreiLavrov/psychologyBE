import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { User } from 'src/users/users.model';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Role, User, UserRoles])
  ],
  exports: [RolesService],
  controllers: [RolesController],
  providers: [RolesService]
})
export class RolesModule {}
