import axios from 'axios';


export async function QueryCreateBooks(payload: any): Promise<any> {
  console.log(payload, 'yes')
  return axios({
    method: 'POST',
    url: 'http://localhost:5000/book',
    data: {payload},
  })
    .then((res) => {
      console.log( 'here')
      return res.data;
    })
    .catch((error) => {
      console.log('there')
      return error;
    });
}
