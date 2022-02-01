import { useForm } from 'react-hook-form';
import useStore from 'store';

export default function useFilter(userId) {
  const editUser = useStore((state) => state.editUser);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // for (const key in data) {
    //   if (data[key] === '') {
    //     delete data[key];
    //   }
    // }
    await editUser(userId, data);
  };

  return {
    register,
    handleSubmit,
    watch,
    errors,
    isSubmitting,
    onSubmit,
  };
}
