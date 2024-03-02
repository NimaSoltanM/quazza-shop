import ProfileLayout from '@/components/user/layout/profile-layout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]'>
      <ProfileLayout />
      {children}
    </div>
  );
}
