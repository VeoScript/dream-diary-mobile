export type PostImagesProps = {
  image: string;
  name: string;
  username: string;
  post: {
    images: string[];
    caption: string;
  };
  created_at: Date;
};
