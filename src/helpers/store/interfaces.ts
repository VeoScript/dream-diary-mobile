export interface ViewImageModalStoreProps {
  imageIndex: number;
  images: any[];
  isVisible: boolean;
  setImageIndex: (value: number) => void;
  setImages: (value: any[]) => void;
  setIsVisible: (value: boolean) => void;
  setDefault: () => void;
}
