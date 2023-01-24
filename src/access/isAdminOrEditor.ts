import { Access } from 'payload/types';

export const isAdminOrEditor: Access = ({ req: { user } }) => {
  if (!user) {
    return false;
  }

  if (user.roles?.includes('editor')) {
    return true;
  }

  return {
    id: {
      equals: user.id
    }
  };
};
