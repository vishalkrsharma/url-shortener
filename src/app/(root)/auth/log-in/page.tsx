import { LogInForm } from '@/components/forms/log-in-form';

export default function LogInPage() {
  return (
    <div className='flex min-h-svh w-full items-center justify-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <LogInForm />
      </div>
    </div>
  );
}
