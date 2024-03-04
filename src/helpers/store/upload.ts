import {create} from 'zustand';
import * as type from './interfaces';

export const uploadPostStore = create<type.UploadPostStoreProps>(set => ({
  images: [],
  setImages: (value: string[]) =>
    set(state => ({
      images: [...state.images, ...value],
    })),
  setRemoveImage: (value: number) =>
    set(state => {
      const objectsCopy = [...state.images];
      objectsCopy.splice(value, 1);
      return {images: objectsCopy};
    }),
  setDefault: () =>
    set(() => ({
      images: [],
    })),
}));
