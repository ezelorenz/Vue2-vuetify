import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default ({
  namespaced: true,
  state: {
    Items: [],
  },
  getters: {
    Items(state) {
      return state.Items;
    }
  },
  mutations: {
    LlenarItems(state, data) {
      state.Items = data;
    }
  },
  actions: {
    cargarClientes: async function ({commit}) {
      try {
          const setting = {
              method: "GET",
          }
          const url = "https://localhost:7143/api/customer";
          
          const data = await fetch(url, setting);
          const json = await data.json();
          commit('LlenarItems', json)
      }
      catch(error){
          console.log(error);
      }
    },
    agregarCliente: async function ({dispatch}, datos) {
      try {
          const setting = {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          }
        const url = 'https://localhost:7143/api/customer';
        
        const data = await fetch(url, setting);
        dispatch('cargarClientes');

      }
      catch(error){
          console.log(error);
      }
    },
    editar: async function ({dispatch}, datos) {
      try {
          const setting = {
            method: "PUT",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          }
        const url = 'https://localhost:7143/api/customer/' + datos.id + '';
        
        const data = await fetch(url, setting);
        dispatch('cargarClientes');

      }
      catch(error){
          console.log(error);
      }
    },
    eliminarCliente: async function ({dispatch}, datos) {
      try {
          const setting = {
            method: "DELETE",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          }
        const url = 'https://localhost:7143/api/customer/'+datos.id+'';
        
        const data = await fetch(url, setting);
        dispatch('cargarClientes');

      }
      catch(error){
          console.log(error);
      }
    }
  }
})
