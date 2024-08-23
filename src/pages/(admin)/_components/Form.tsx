
import instance from '@/configs/axios';
import { IPost } from '@/interface';
import { addNewPosts, getAllTag, updatePosts } from '@/services/PostService';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const postSchema = Joi.object({
  id: Joi.string(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  tags: Joi.array().min(1).messages({
    "array.min": "Array can't be empty!"
  })
})
const Form = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { handleSubmit, register, reset, formState: { errors }, setValue } = useForm<IPost>({
    defaultValues: {
      title: "",
      description: "",
      tags: [],
    },
    resolver: joiResolver(postSchema)
  });

  const [tagsList, setTagsList] = useState([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await instance.get(`/posts`);
        const post = data.posts.find((item: IPost) => item.id === id);
        console.log("postID", post)
        if (post) {
          reset(post);
          setSelectedTags(post.tags);
        }
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  useEffect(() => {
    (async () => {
      try {
        const { data } = await getAllTag();
        setTagsList(data);
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  console.log("------tag", selectedTags)
  const handleTagClick = (tag: string) => {
    setValue('tags', [...selectedTags, tag]);
    setSelectedTags((prevTags) =>
      prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
    );
  };

  const onSubmit = async (post: IPost) => {
    try {
      const formattedPost = {
        ...post,
        tags: selectedTags
      };
      console.log("type tag", formattedPost.tags)
      if (id) {
        await updatePosts(id as string, formattedPost);
        toast.success("Update post successfully!");
      } else {
        await addNewPosts(formattedPost);
        toast.success("Add post successfully!");
      }
      navigate('/admin')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="mx-auto w-[500px]">
        <h3 className="text-center text-2xl font-semibold pb-7 pt-4">{id ? "Update post" : "Add new post"}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 font-[sans-serif] w-full mx-auto">
          <input type="text" placeholder="Title" {...register("title")} className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded" />
          {errors.title && <div className="text-red-500 ">{errors.title.message}</div>}
          <input type="text" placeholder="Description" {...register("description")} className="px-4 py-3 bg-gray-100 w-full text-sm outline-none border-b-2 border-blue-500 rounded" />
          {errors.description && <div className="text-red-500 ">{errors.description.message}</div>}
          <div className="">
            {tagsList?.map((tag, index) => (
              <button
                key={index}
                type="button"
                className={`px-4 py-2 m-1 text-sm rounded ${selectedTags.includes(tag) ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
          {errors.tags && <div className="text-red-500 ">{errors.tags.message}</div>}
          <button type="submit" className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Form