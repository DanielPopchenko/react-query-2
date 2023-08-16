import React from 'react';
import { useForm } from 'react-hook-form';
import { IUserData } from '../../app.interfaces';
import { useCreateUser } from '../../hooks/useCreateUser';

import styles from './Form.module.css';

const Form = () => {
  const { register, handleSubmit, reset } = useForm<IUserData>({ mode: 'onChange' });

  const { createUser } = useCreateUser(reset);

  return (
    <form className={styles.form} onSubmit={handleSubmit(createUser)}>
      <input type="text" placeholder="Name" {...register('name')} />
      <br />
      <input type="text" placeholder="Age" {...register('age')} />
      <br />

      <select {...register('state')} placeholder="State">
        <option value="">State</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>

      <br />

      <button>Submit</button>
    </form>
  );
};

export { Form };
