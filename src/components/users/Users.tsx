import { Form } from '../form/Form';
import { useUsers } from '../../hooks/useUsers';
import styles from './Users.module.css';

const Users = () => {
  const { data } = useUsers();

  console.log(data);

  return (
    <>
      <div className={styles.users}>
        <h2 style={{ marginBottom: 30 }}>Users</h2>

        <Form />

        {data?.length
          ? data.map((user) => (
              <div key={user.id}>
                <p>
                  {user.name} - <b>{user.age} y.o</b> - {user.state}
                </p>
              </div>
            ))
          : 'Data is not found !'}
      </div>
    </>
  );
};

export default Users;
