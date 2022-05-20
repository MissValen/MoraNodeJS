const API = "https://api.github.com/users/";

const app = Vue.createApp({
    data() {
        return {
          message: 'Hello SENA!',
          busqueda: null,
          result: null
        }
    },
// La palabra funtion ya no es necesario ya que se una un metodo
    methods: {
        async Buscar(){
          const response =await fetch(API + this.busqueda)
          //ahoar quiero traer la info en formato json,
          const data = await response.json()
          console.log(data)
          this.result = true
        }
    }
})//.mount('#app') montamos esta informacion el html del div app