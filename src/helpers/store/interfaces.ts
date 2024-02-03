export interface ViewImageModalStoreProps {
  imageIndex: number;
  images: any[];
  isVisible: boolean;
  setImageIndex: (value: number) => void;
  setImages: (value: any[]) => void;
  setIsVisible: (value: boolean) => void;
  setDefault: () => void;
}

export interface CommentModalStoreProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  setDefault: () => void;
}

export interface NewPostModalStoreProps {
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  setDefault: () => void;
}

export interface UploadPostStoreProps {
  images: any[];
  setImages: (value: any[]) => void;
  setRemoveImage: (value: number) => void;
  setDefault: () => void;
}
