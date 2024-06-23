import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface StoreState {
  count: number;
  increase: () => void;
  decrease: () => void;
}

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      isLight: false,
      switchLights: () => set((state) => ({ isLight: !state.isLight })),
      increase: () => set((state) => ({ count: state.count + 1 })),
      decrease: () => set((state) => ({ count: state.count - 1 })),
    }),
    {
      name: 'counter-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useStore;
