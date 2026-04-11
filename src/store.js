export const initialStore = () => {
  return {
    message: null,

    character: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {


    case 'set_personajes':
      const { personaje } = action.payload
      return {
        ...store, character: personaje
      }

    case "add_favorite":
      return {
        ...store,
        favorites: store.favorites.includes(action.payload)
          ? store.favorites
          : [...store.favorites, action.payload]
      };

    case "remove_favorite":
      return {
        ...store,
        favorites: store.favorites.filter(
          fav => fav !== action.payload
        )
      };

    default:
      throw Error('Unknown action.');
  }
}
