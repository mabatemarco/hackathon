import axios from "axios";

 const turnCityIntoQuery = (pa) => {
  let res = pa.split(" ");
  let response = res.map((word, index) => {
    if (index !== res.length) {
      return `${word}%20`;
    } else {
      return word;
    }
  });
  let str1 = "q=";
  let fin = str1.concat(response.join().replace(/,/g, ''));
  return fin;
};
export async function getCityWeather(city) {
  let params = city;
  let formattedCity = turnCityIntoQuery(params);
  let response = await axios(
`    http://api.openweathermap.org/data/2.5/weather?${formattedCity}&appid=1dc3131d12b8c9e540ad9929744a43f9`  )
let ans = await response.data
return ans
}