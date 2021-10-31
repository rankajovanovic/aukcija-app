import http from './BaseService';

class ItemService {
    async getAll(){
        const response = await http.get('items')
        return response.data
    }

   add(data) {
        http.post('items', data)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
   }
  
}
const itemService = new ItemService();
export default itemService;