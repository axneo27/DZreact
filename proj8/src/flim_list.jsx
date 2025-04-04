import {createStore} from 'redux';
import {useEffect, useState} from 'react';

const initialState = {
  flimList: []
};

const flimListReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_FLIM':
      return {
        ...state,
        flimList: [...state.flimList, action.payload]
      };
    case 'REMOVE_FLIM':
      return {
        ...state,
        flimList: state.flimList.filter(flim => flim.id !== action.payload)
      };
    case 'CLEAR_FLIM_LIST':
      return {
        ...state,
        flimList: []
      };
    default:
      return state;
  }
}
const store = createStore(flimListReducer);

const AddFlim = () => {
  const [flimName, setFlimName] = useState('');

  const addFlim = () => {
    const newFlim = { id: Date.now(), name: flimName };
    store.dispatch({ type: 'ADD_FLIM', payload: newFlim });
    setFlimName('');
  };

  return (
    <div>
      <input
        type="text"
        value={flimName}
        onChange={(e) => setFlimName(e.target.value)}
      />
      <button onClick={addFlim}>Add Flim</button>
    </div>
  );
};

const clearFlimList = () => {
  store.dispatch({ type: 'CLEAR_FLIM_LIST' });
}

const ClearFlimListButton = () => {
  return (
    <button onClick={clearFlimList}>Clear Flim List</button>
  );
}

const FlimList = () => {
  const [flimList, setFlimList] = useState(store.getState().flimList);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setFlimList(store.getState().flimList);
    });
    return () => unsubscribe();
  }, []);

    const removeFlim = (id) => {
        store.dispatch({ type: 'REMOVE_FLIM', payload: id });
    };
    return (
        <ul>
            {flimList.map((flim) => (
                <li key={flim.id}>
                    {flim.name}
                    <button onClick={() => removeFlim(flim.id)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export const FlimListApp = () => {
  return (
    <div>
      <h1>Flim List App</h1>
      <AddFlim />
      <ClearFlimListButton />
      <FlimList />
    </div>
  );
}
export default FlimListApp;