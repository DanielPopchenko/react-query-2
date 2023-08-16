import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SubmitHandler, UseFormReset } from 'react-hook-form';
import { IUserData } from '../app.interfaces';
import usersService from '../services/users.service';

export const useCreateUser = (reset: UseFormReset<IUserData>) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ['create user'],
    (data: IUserData) => usersService.postUser(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['users']);
        reset();
      },
    },
  );

  const createUser: SubmitHandler<IUserData> = (data) => {
    console.log('create user data: ', data);
    mutate({ ...data });
  };

  return { createUser };
};
