const API = "https://api.github.com/users/";

async function Buscar(){
    const response =await fetch(API + 'MissValen')
    //ahoar quiero traer la info en formato json,
    const data = await response.json()
    console.log(data)
}

const app = Vue.createApp({
    data() {
        return {
          message: 'Hello SENA!'
        }
      }
})//.mount('#app') montamos esta informacion el html del div app