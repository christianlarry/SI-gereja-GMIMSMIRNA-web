import axios from "axios"

const api_baseUrl = 'http://localhost:5000/'
const api_key = 'oijrsafioj9031uj5w1i=f-olszlfl21-0ir0sokd01k0-3i5r0ik0-3ijfzsjkfjlsA"AlALAZG:"KSFAL?FK?L#!KL:RKk;alkfsAlfka;sjfljj;asfasFJSA:JFJASL:JG:DJGeojqaQ"PA{APSIPEI{QMFSAM}}'

export const getPengumuman = ()=>{
  return axios.get(`${api_baseUrl}pengumuman`,{
    headers:{
      Authorization: `Bearer ${api_key}`
    }
  })
}