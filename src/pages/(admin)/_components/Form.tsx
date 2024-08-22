import instance from '@/configs/axios';
import { IPost } from '@/interface';
import { joiResolver } from '@hookform/resolvers/joi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Joi, { options } from 'joi';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

const postSchema = Joi.object({
  // id: Joi.string(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  tags: Joi.array().items(Joi.object()).required(),
})

const Form = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { handleSubmit, register, reset, control, formState: { errors }, clearErrors } = useForm<IPost>({
    defaultValues: {
      title: "",
      description: "",
      // tags: [],
    },
    // resolver: joiResolver(postSchema)
  });
  const [tagsList, setTagsList] = useState([]);
  const [tags, setTags] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`/posts/tags`);
      // console.log("tags", data)
      setTagsList(data.map((data: any) => {
        // console.log("e", data)
        return (
          { tag: data }
        )
      }));
      // return data.map((data: any) => {
      //   return { value: data.tag, label: data.tag }
      // })
    })()
  }, [])
  // console.log("tagsList", tagsList)
  useEffect(() => {
    (async () => {
      const { data } = await instance.get(`/posts`);
      const post = data.posts.find((item: IPost) => item.id === id);
      reset(post);
    })()
  }, [])

  const { mutate } = useMutation({
    mutationFn: async (postData: IPost) => {
      if (id) {
        await instance.patch(`/posts/${id}`, postData);
      }
      else {
        await instance.post(`/posts`, postData);
      }
    },
    onSuccess: () => {
      toast.success(id ? "Update successfully!" : "Add successfully!");
      queryClient.invalidateQueries({
        queryKey: ['POST'],
      });
      navigate('/admin/list')
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  const onSubmit = (data: IPost) => {
    mutate(data)
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
          <Controller
            name="tags"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={tagsList}
                placeholder="Tags"
                getOptionValue={(value: any) => value}
                getOptionLabel={(value: any) => value.tags}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(value: any) => {
                  // console.log("value", value);
                  field.onChange(value);
                  clearErrors('tags')
                }}
              />
            )}
          />
          {errors.tags && <div className="text-red-500 ">{errors.tags.message}</div>}
          <button type="submit" className="!mt-8 w-full px-4 py-2.5 mx-auto block text-sm bg-blue-500 text-white rounded hover:bg-blue-600">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Form