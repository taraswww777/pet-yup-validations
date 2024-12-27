import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface  FormValues {
  startDate?: string,
  endDate?: string,
}

const defaultValues: FormValues = {
  startDate: '',
  endDate: '',
}



export function DateRangeForm() {
  const formhook = useForm<FormValues>({
    defaultValues,
    context: defaultValues,
  });

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <FormProvider {...formhook}>
      <form onSubmit={formhook.handleSubmit(onSubmit)}>
        <input {...formhook.register('startDate')} name="startDate" type="date" />
        <input  {...formhook.register('endDate')} name="endDate"   type="date" />
        <input type="submit" />
      </form>
    </FormProvider>
  );
}

