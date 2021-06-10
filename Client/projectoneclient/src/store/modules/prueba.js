import axios from 'axios'

const state = {
    mensaje: [],
    listaPrueba: []
};

const getters = {
    getMensaje: state => state.mensaje,
    getListaPrueba: state => state.listaPrueba
};

const actions = { 
    async changeMensaje({
        commit                          //Dentro de los actions se ustilizan las mutations, solo las mutaciones cambian los estados. 
    }, ){
        let response = await axios.get("https://localhost:44310/PruebaScraping", {headers: {'Accept': '/', 'Content-Type': 'application/json'}});
        console.log(response.data);
        commit('setMensaje', response.data);
    },

    addListaPrueba({
        commit                          //Dentro de los actins se ustilizan las mutations, solo las mutaciones cambian los estados. 
    }, elem ){
        commit('pushListaPrueba', elem)
    }
};

const mutations = {
    setMensaje: (state, nuevoMensaje) => state.mensaje = nuevoMensaje,
    pushListaPrueba: (state, elem) => state.listaPrueba.push(elem)
};

export default {
    state, 
    getters, 
    actions, 
    mutations
};
