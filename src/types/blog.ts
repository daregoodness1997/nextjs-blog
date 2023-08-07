export type BlogType = {
  fields: {
    title?: string;
    summary?: string;
    coverImage?: { fields: { file: { url: string } } };
    content?: any;
  };
};
