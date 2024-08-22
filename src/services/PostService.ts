import instance from "@/configs/axios"
import { PostsResponse } from "@/interface"
import { AxiosResponse } from "axios";

type Props = {
  title?: string,
  page: number
}

export const fetchPosts = async ({ title, page }: Props): Promise<PostsResponse> => {
  // const params = { title, page }
  const response = await instance.get(`/posts`, { params: { title, page } });
  return response.data;
}
export const fetchTags = async () => {
  const response = await instance.get('/posts/tags');
  return response.data;
};