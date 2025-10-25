// app/components/AuthWrapper.tsx
export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-sm">
        {children}
      </div>
    </div>
  );
}
