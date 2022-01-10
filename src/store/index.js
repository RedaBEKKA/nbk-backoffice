import create from 'zustand';
import { persist, devtools } from 'zustand/middleware';

import auth from './auth';

const useStore = create(
  devtools(
    persist(
      (set, get) => ({
        ...auth(set, get),
      }),
      {
        name: 'nbk',
        getStorage: () => localStorage,
      }
    )
  )
);

export default useStore;
