import { Access, FieldAccess } from 'payload/types';

import { User } from '../payload-types';

export enum Role {
  Admin = 'admin',
  Editor = 'editor',
}

const roleAccess = (user: User, roles: Role[]): boolean => roles.some((r) => user?.roles?.includes(r));

export function hasRole(...roles: Role[]): Access {
  return ({ req }) => roleAccess(req.user, roles);
}

export function hasRoleField(...roles: Role[]): FieldAccess {
  return ({ req }) => roleAccess(req.user, roles);
}

export function hasRoleOrSelf(...roles: Role[]): Access {
  return ({ req: { user } }) =>
    roleAccess(user, roles) || {
      id: {
        equals: user?.id,
      },
    };
}

export function hasRoleOrSelfField(...roles: Role[]): FieldAccess {
  return ({ req: { user }, id }) => roleAccess(user, roles) || user?.id === id;
}

export function hasRoleOrPublished(...roles: Role[]): Access {
  return ({ req: { user } }) =>
    roleAccess(user, roles) || {
      _status: {
        equals: 'published',
      },
    };
}
