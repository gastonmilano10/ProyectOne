import axios from 'axios'
import router from '@/router'

const state = {
    currentUser: {}
};

const getters = {
    getCurrentUser2: state => state.currentUser,
};

const actions = { 
    userRegistration({
        commit                          
    }, egistrationJSON){
        axios.post("https://localhost:5001/api/Users/Register", egistrationJSON, {headers: {'Accept': '/', 'Content-Type': 'application/json'}})
        .then(response => {
            console.log(response);
            commit('setCurrentUser', response)
            localStorage.setItem("currentUser", response.data.userName)
            router.push({path: `/home`});

            //DEVOLVER TOKEN Y GUARDAR EN LOCALSTORAGE
            //router.go(-1); PANTALLA ANTERIOR, cuando token esta vencido por ejemplo
            //router.push({path: `/home${prarm}`})
        })
        .catch(error =>console.log(error))
    },

};

const mutations = {
    setCurrentUser: (state, user) => state.currentUser = user,
};

export default {
    state, 
    getters, 
    actions, 
    mutations
};
