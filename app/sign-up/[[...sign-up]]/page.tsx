import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="flex min-h-dvh items-center justify-center bg-bg p-8">
      <div className="w-full max-w-md">
        <SignUp
          appearance={{
            elements: {
              rootBox: 'mx-auto',
              card: 'shadow-xl shadow-black/5',
            },
          }}
        />
      </div>
    </main>
  );
}
