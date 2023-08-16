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
  age: number;
  state: string;
}

// "id": "3",
//             "name": "Bob",
//             "age": 25,
//             "state": "other"
