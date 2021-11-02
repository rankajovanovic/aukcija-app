import http from './BaseService';

class ItemService {

    getAll(payload){
        return http.get('items', {
            headers: {
                searchText: payload.searchText,
              },
            });
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
    const  {data}  = await http.get(`items/${id}`);
  
    return data;
  }
  
}
const itemService = new ItemService();
export default itemService;