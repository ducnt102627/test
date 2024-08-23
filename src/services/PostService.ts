
import instance from "@/configs/axios";
import { IPost } from "@/interface";


export const getAllTag = () => {
  const uri = `/posts/tags`;
  return instance.get(uri);
};
export const addNewPosts = (payload: IPost) => {
  const uri = `/posts`;
  return instance.post(uri, payload);
};
export const updatePosts = (id: string, payload: IPost) => {
  const uri = `/posts/${id}`;
  return instance.patch(uri, payload);
};
export const getAllPosts = (query?: string) => {
  const uri = `/posts${query}`;
  return instance.get(uri);
};
export const deletePostById = (id: string) => {
  const uri = `/posts/${id}`;
  return instance.delete(uri);
};