import http from './BaseService';

class BidService {

  add(data) {
    http.post('offers', data)
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error)
    })
  }

  deleteb(id) {
    console.log(id);
    const response = http.delete(`offers/${id}`)
    return response.data; 
  }

  async getUserBids() {
    const response = await http.get('user-offers')
    return response.data;
  }

}

const bidService = new BidService();
export default bidService;