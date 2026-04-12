export const initialStore = () => {
  return {
    message: null,

    people: [],
    favorites: [],
    planets: [],
    vehicles:[]
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {


    case 'set_personajes':
      return {
        ...store,
        people: action.payload.people
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


    case 'set_planets':
      const { planets } = action.payload;
      return {
        ...store, planets: planets
      };

    case "set_vehicles":
      return {
        ...store,
        vehicles: action.payload.vehicles
      };

    default:
      throw Error('Unknown action.');
  }
}
