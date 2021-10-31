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

   async getOne(id) {
       console.log(id);
    const  {data}  = await http.get(`items/${id}`);
    console.log(data);
    return data;
  }
  
}
const itemService = new ItemService();
export default itemService;