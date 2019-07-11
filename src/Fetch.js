
const Call = {

  getReservations() {
    return fetch('http://localhost:3001/api/v1/reservations')
      .then((response) => {
        if(response.ok) {
          return response.json()
        }
      })
  },

  postRes(data) {
    return fetch('http://localhost:3001/api/v1/reservations', 
    {method: 'POST', body: JSON.stringify(data)})
    .then(response => console.log(response.json()))

  }


}
export default Call;