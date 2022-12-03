export interface Post {
  title: string;
  contents: string;
}

export interface Router {
  go(href: string, data?: any): void;
}
