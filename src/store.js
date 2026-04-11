export const initialStore = () => {
  return {
    message: null,

    character: [],
    favoritos: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {


    case 'set_personajes':
      const { personaje } = action.payload
      return {
        ...store, character: personaje
      }
    

    default:
      throw Error('Unknown action.');
  }
}
