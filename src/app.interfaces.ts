export interface ITodo {
  id: number;
  userId: number;
  completed: boolean;
  title: string;
}

export interface ICreateTodo extends Omit<ITodo, 'id'> {}

export interface IUser {
  id: string;
  name: string;
  age: string;
  state: string;
}

export interface IUserData extends Omit<IUser, 'id'> {}

// export interface ICar {
//   id: number;
//   image: string;
//   name: string;
//   price: string;
// }
