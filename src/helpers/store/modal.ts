import {create} from 'zustand';
import * as type from './interfaces';

export const viewImageModalStore = create<type.ViewImageModalStoreProps>(set => ({
  imageIndex: 0,
  images: [],
  isVisible: false,
  setImageIndex: (value: number) =>
    set(() => ({
      imageIndex: value,
    })),
  setImages: (value: any[]) =>
    set(() => ({
      images: value,
    })),
  setIsVisible: (value: boolean) =>
    set(() => ({
      isVisible: value,
    })),
  setDefault: () =>
    set(() => ({
      images: [],
      isVisible: false,
    })),
}));

export const commentModalStore = create<type.CommentModalStoreProps>(set => ({
  isVisible: false,
  setIsVisible: (value: boolean) =>
    set(() => ({
      isVisible: value,
    })),
  setDefault: () =>
    set(() => ({
      isVisible: false,
    })),
}));

export const newPostModalStore = create<type.NewPostModalStoreProps>(set => ({
  isVisible: false,
  setIsVisible: (value: boolean) =>
    set(() => ({
      isVisible: value,
    })),
  setDefault: () =>
    set(() => ({
      isVisible: false,
    })),
}));

export const newDreamModalStore = create<type.NewDreamModalStoreProps>(set => ({
  isVisible: true,
  setIsVisible: (value: boolean) =>
    set(() => ({
      isVisible: value,
    })),
  setDefault: () =>
    set(() => ({
      isVisible: false,
    })),
}));
