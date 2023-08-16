import axios from 'axios';
import { IUser } from '../app.interfaces';

class UserServices {
  async makeFetch() {
    return await axios.get<IUser[]>('http://localhost:4200/users');
  }
}

export default new UserServices();
