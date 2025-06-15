import { SignUpForm } from '@/components/forms/sign-up-form';
import Loader from '@/components/ui/loader';
import { Suspense } from 'react';

const SignUpPage = () => {
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <Suspense fallback={<Loader />}>
          <SignUpForm />
        </Suspense>
      </div>
    </div>
  );
};

export default SignUpPage;
