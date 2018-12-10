import { createStore } from 'easy-peasy';

// 👇 create your store by providing your model
const model = {
  todos: {
    items: ['Install easy-peasy', 'Build app', 'Profit'],
    // 👇 define actions
    add: (state, payload) => {
      state.items.push(payload) // 👈 you mutate state to update (we convert
    }                           //    to immutable updates)
  }                             //
};    

const initializeStore = (initialState) => {
  return createStore(model, {
    initialState,
  })
}

export default initializeStore
