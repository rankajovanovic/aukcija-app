import http from './BaseService';

class ItemService {

    async getAll(payload){
      const response = await http.get('items', {
            headers: {
                searchText: payload.searchText,
                pagination: payload.pagination,
              },
            });
      return response.data;
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