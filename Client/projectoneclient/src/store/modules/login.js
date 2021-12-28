import axios from 'axios'
import router from '@/router'

const state = {
    mensaje: [],
    listaPrueba: [],
    currentUser: {}
};

const getters = {
    getMensaje: state => state.mensaje,
    getListaPrueba: state => state.listaPrueba
};

const actions = { 
    login({
        commit                          
    }, jsonLogin){
        axios.post("https://localhost:5001/api/Users/Login", jsonLogin, {headers: {'Accept': '/', 'Content-Type': 'application/json'}})
        .then(response => {
            console.log(response.data);
            commit('setCurrentUser', response.data.userName); //CAMBIAR POR JSON USER
            localStorage.setItem("currentUser", response.data.userName)
            router.push({path: `/home`});

            //DEVOLVER TOKEN Y GUARDAR EN LOCALSTORAGE
            //router.go(-1); PANTALLA ANTERIOR, cuando token esta vencido por ejemplo
            //router.push({path: `/home${prarm}`})
        })
        .catch(error =>console.log(error))
    },

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
    pushListaPrueba: (state, elem) => state.listaPrueba.push(elem),
    setCurrentUser: (state, user) => state.currentUser = user,
};

export default {
    state, 
    getters, 
    actions, 
    mutations
};
