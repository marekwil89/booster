import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const userStore = new Vuex.Store({
  state: {
    logedUser: {
      login: 'marekw',
      permissions: ['salon-manage']
    }
  },
  getters: {
    loadLogedUser: state => state.logedUser,
  },
  mutations: {
    
  },
  actions: {

  }
})

const placesStore = new Vuex.Store({
  state: {
    loading: true,
    markersList: [{
      id: 1,
      logo: 'logo1.png',
      categories: ['hairdresser', 'makeup'],
      website: 'www.google.pl',
      address: 'Pl. Czarnieckiego 44/1',
      email: 'example@example.pl',
      phone: "500500500",
      name: 'Salon u Wlada',
      description: `
        <p>Lorem ipsum dolor, sit amet adipisicing elit. Ad quidem veniam incidunt delectus minima, dignissimos dolorum impedit adipisci alias praesentium? Architecto dicta facilis voluptatibus, aspernatur pariatur delectus. Vitae a quas commodi neque quis, laboriosam nisi cum cupiditate tempore hic quidem.</p>
        <ul>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nihil!</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nihil!</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nihil!</li>
        </ul>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis voluptas voluptatem dignissimos optio fugit esse, tempora exercitationem! Assumenda dolor velit consequatur, quod dolores rerum, commodi molestias voluptatibus eaque eos veritatis!</p>`,
      longitude: 21.007261,
      latitude: 52.206078,
      images: [{
        src: 'http://brodatyblog.pl/wp-content/uploads/2017/03/barber2.jpg'
      }],
    }, {
      id: 2,
      logo: 'logo2.png',
      categories: ['cosmetology', 'makeup'],
      website: 'www.google2.pl',
      address: 'Pl. Czarnieckiego 42/1',
      email: 'example@example.pl',
      phone: "600600600",
      name: 'Kosmetologia u Ani',
      description: `
        <p>Lorem ipsum dolor, sit amet adipisicing elit. Ad quidem veniam incidunt delectus minima, dignissimos dolorum impedit adipisci alias praesentium? Architecto dicta facilis voluptatibus, aspernatur pariatur delectus. Vitae a quas commodi neque quis, laboriosam nisi cum cupiditate tempore hic quidem.</p>
        <ul>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nihil!</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nihil!</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, nihil!</li>
        </ul>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis voluptas voluptatem dignissimos optio fugit esse, tempora exercitationem! Assumenda dolor velit consequatur, quod dolores rerum, commodi molestias voluptatibus eaque eos veritatis!</p>`,
      longitude: 20.002061,
      latitude: 53.201078,
      images: [{
        src: 'https://img.grouponcdn.com/deal/jmkABQ1Y1SngpswNmXmH/bm-960x576/v1/c700x420.jpg'
      }],
    }],
    placesDetail: null,
    searchQuery: '',
  },
  getters: {
    loadMarkersList: state => state.markersList,
    loadPlacesDetail: state => state.placesDetail,
  },
  mutations: {
    // setTaskList (state, payload){
    //     state.taskList = payload
    // },
    setPlacesDetail(state, payload) {
      state.placesDetail = payload
    },
    // setUserList (state, payload){
    //     state.userList = payload
    // },
    // setUser (state, payload) {
    //     state.logedUser = payload
    // },
    // setError (state, payload) {
    //     state.error = payload
    // },
    // setLoading (state, payload) {
    //     state.loading = payload
    // }
  },
  actions: {
    getPlacesDetail: ({ state, commit }, payload) => {
      const placesDetail = state.markersList.find(elem => elem.id === payload);
      commit('setPlacesDetail', placesDetail)
    },
  }
})

export default {
  placesStore,
  userStore,
}