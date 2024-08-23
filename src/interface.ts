export interface IPost {
  id: string,
  title: string,
  description: string,
  tags: string[],
}
export interface IGalleries {
  id: string,
  imageUrl: string,
  desctiption: string
}
export interface ITags {
  tag: string,
}
export interface PostsResponse {
  current_page: number;
  page_size: number;
  posts: IPost[];
  total: number;
  total_page: number;
}