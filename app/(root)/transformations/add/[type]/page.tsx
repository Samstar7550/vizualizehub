import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const AddTransformationsTypePage = async ({ params: { type }}: SearchParamProps) => {
  const { userId } = auth();
  const transmation = transformationTypes[type];

  if(!userId) redirect('/sign-in')
  const user = await getUserById(userId);

  return (
    <>
      <Header 
        title={transmation.title}
        subTitle={transmation.subTitle}
      />
      <section className='mt-10'>
        <TransformationForm 
          action='Add'
          userId={user._id}
          type={transmation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default AddTransformationsTypePage