import http from './BaseService';
import axios from 'axios';

class AuthService {

    async login(credentials) {
      const { data } = await http.post('/login', credentials);
      return data;
    }

      async logout() {
        try {
          const {data} = await http.post('/logout');
          localStorage.removeItem('token');
          return data;
        } catch (e) {
          return e;
        }
      }
    
      async register(credentials) {
        try {
          const {data} = await http.post('/register', credentials);
          if (data.token) {
            const token = data.token;
           // localStorage.setItem('token', token);
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
          }
          console.log(data);
          return data;
        } catch (e) {
          return e;
        }
      }

      async update(credentials) {
        try {
          const {data} = await http.put('/update', credentials);
          return data;
        } catch (e) {
          return e;
        }
      }

      async me() {
        try {
          const {data} = await http.get('/me');
          return data;
        } catch (e) {
          return e;
        }
      
      }
}

const authService = new AuthService();
export default authService;