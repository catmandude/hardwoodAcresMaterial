import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  state: {
    forSaleData: [
      {
        title: 'barn',
        about: 'About this here barn',
        images: ['/static/barn/barn_side.jpg'],
        id: '468586',
      },
      {
        title: 'table',
        about: 'About this here table',
        images: [
          '/static/bench/bench_front.jpg',
          '/static/bench/bench_side.jpg',
        ],
        id: '34564',
      },
      {
        title: 'thing',
        about: 'About this here thing',
        images: ['/static/box/box.jpg'],
        id: '5687568',
      },
      {
        title: 'other',
        about: 'About this here other',
        images: [
          'https://picsum.photos/200/300/?random',
          'https://source.unsplash.com/random',
        ],
        id: '568456',
      },
    ],
    showOffData: [
      {
        title: 'show Off desk',
        about: 'About this here shelf',
        images: ['/static/desk/desk_front.jpg', '/static/desk/desk_top.jpg'],
        id: '234642',
      },
      {
        title: 'show Off counter',
        about: 'About this here table',
        images: ['/static/woodedArea.jpeg'],
        id: '3568356',
      },
      {
        title: 'show Off sliced',
        about: 'About this here sliced',
        images: ['/static/nature.jpeg'],
        id: '4257345',
      },
      {
        title: 'show Off counter',
        about: 'About this here table',
        images: ['/static/box/box_open.jpg'],
        id: '23446',
      },
    ],
  },
  getters: {
    forSaleData: state => state.forSaleData,
    showOffData: state => state.showOffData,
    getIndividualShow: state => (id) => {
      console.log('anything');
      return state.showOffData.find(show => show.id === id);
    },
  },
  strict: debug,
});
