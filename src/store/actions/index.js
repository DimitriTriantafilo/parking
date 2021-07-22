import axios from "axios";

export const GET_SLOTS = "GET_SLOTS";
const API_KEY = process.env.REACT_APP_YELP_API_KEY; 


export function getSlots(city) {
    const url = `/v3/businesses/search?location=${city}&term=parking&limit=50`
    
      return function (dispatch) {
        return axios.get(url,{
            headers:{
              "Authorization": `Bearer ${API_KEY}`
            }
          })
          .then((response) => {
              const sorted = response.data.businesses.sort( function(a, b) {
                return b.rating - a.rating;
            } ).reverse()
              dispatch({
                  type: GET_SLOTS,
                  payload: sorted
              })
          })
      }

}
