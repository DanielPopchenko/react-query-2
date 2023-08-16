import { useQuery } from '@tanstack/react-query';
import usersService from '../services/users.service';

export const useUsers = () => {
  return useQuery(['users'], () => usersService.makeFetch(), {
    select: ({ data }) => data,
  });
};
