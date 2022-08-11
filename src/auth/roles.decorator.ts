import { SetMetadata } from '@nestjs/common';
import { Role } from 'src/enums/role.enum';
import { ROLES_KEY } from './auth.constants';

export const Roles = (...args: Role[]) => SetMetadata(ROLES_KEY, args);
