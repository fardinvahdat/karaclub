const state = {
  cards: [
    {
      imgUrl: "1.jpg",
      stars: 5,
      location: "خیابان بهشتی",
      title: "پیتزا شهر",
      discount: "17%",
      id: 1,
    },
    {
      imgUrl: "2.jpg",
      stars: 5,
      location: "بازار ",
      title: "ساندویچی نیکا",
      discount: "12%",
      id: 2,
    },
    {
      imgUrl: "3.jpg",
      // stars:5,
      location: "امانیه",
      title: "فست فود لوتوس",
      discount: "10%",
      id: 3,
    },
    {
      imgUrl: "1.jpg",
      stars: 5,
      location: "خیابان بهشتی",
      title: "پیتزا شهر",
      discount: "17%",
      id: 4,
    },
    {
      imgUrl: "2.jpg",
      stars: 5,
      location: "بازار ",
      title: "ساندویچی نیکا",
      discount: "12%",
      id: 5,
    },
    {
      imgUrl: "3.jpg",
      // stars:5,
      location: "امانیه",
      title: "فست فود لوتوس",
      discount: "10%",
      id: 6,
    },
  ],
  cardItemshow:null
};

// getters
const getters = {
  cardItems: (state) => {
    return state.cards;
  },
  cardItem:(state)=>{
    return state.cardItemshow
  }
};

//mutation
const mutation = {
  cardItemfn: (state, payload) => {
    state.cards.map((item) => {
      if (payload == item.id) {
        cardItemshow= item;
      }
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutation
};
