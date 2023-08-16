import React, { useEffect } from 'react';
import usersService from '../../services/users.service';
import { useUsers } from '../../hooks/useUsers';
import styles from './Users.module.css';

const Users = () => {
  const { data, isLoading } = useUsers();

  console.log(data);

  useEffect(() => {}, []);

  return (
    <div className={styles.users}>
      {data?.length
        ? data.map((item) => (
            <div key={item.id}>
              <p>
                {item.name} - <b>{item.age} y.o</b>
              </p>
            </div>
          ))
        : 'Data is not found !'}
    </div>
  );
};

export default Users;
