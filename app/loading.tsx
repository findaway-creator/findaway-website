import { colors } from '@/lib/colors';

export default function Loading() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: colors.cream }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="w-12 h-12 rounded-full border-4 border-t-transparent animate-spin"
          style={{ borderColor: `${colors.sage}30`, borderTopColor: colors.sage }}
        />
        <p
          className="font-body text-sm"
          style={{ color: `${colors.navy}60` }}
        >
          Loading...
        </p>
      </div>
    </div>
  );
}
