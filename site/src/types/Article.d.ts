export type Article = {
    id: number,
    title: string,
    content: string,
    category: string,
    keywords: string[],
    likes: number,
    bookmarks: number,
    creationDate: string,
    url: string,
    author: {
      id: number,
      name: string
    }
  };