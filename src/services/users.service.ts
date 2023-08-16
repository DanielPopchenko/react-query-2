import axios from 'axios';
import { IUser, IUserData } from '../app.interfaces';

class UserServices {
  async getAll() {
    return await axios.get<IUser[]>('http://localhost:4200/users');
  }

  async postUser(data: IUserData) {
    return await axios.post('http://localhost:4200/users', data);
  }
}

export default new UserServices();
