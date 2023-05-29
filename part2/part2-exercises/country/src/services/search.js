import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getCountryByName = (name) => {
    //const request = axios.get(`${baseUrl}${name}`);
    const request = axios.get(baseUrl);
    return request.then(response => {
        let result = response.data.filter(item => item.name.common.toLowerCase().includes(name.toLowerCase()));
        //console.log("Before condition:", result)

        // if (!result) {
        //     return console.log({ Error: "No country found" });
        // } else {
        //     result = result.map(item => item = item.name.common);

        //     if (result.length > 10) {

        //         return console.log("Too many matches, please specify another filter!")
        //     } else if (result.length === 0) {

        //         return console.log("No matches!")
        //     } else {
        //         return console.log(result.join("\n"))
        //     }
        // }

        return result;


    }
    );
}

export {
    getCountryByName
}