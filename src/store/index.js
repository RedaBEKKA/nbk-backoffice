import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import auth from './auth';
import wallet from './wallet';
import cards from './cards';
import payins from './payins';
import users from './users';
import transfers from './transfers';

const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...auth(set, get),
        ...wallet(set, get),
        ...cards(set, get),
        ...payins(set, get),
        ...users(set, get),
        ...transfers(set, get),
      }),
      {
        name: 'nbk',
        getStorage: () => localStorage,
      }
    )
  )
);

export default useStore;
