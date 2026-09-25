const Loading = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-zinc-800 border-t-[#ccff00]" />

          <div className="h-3 w-3 rounded-full bg-[#ccff00]" />
        </div>

        <div className="text-center">
          <p className="text-lg font-bold uppercase tracking-wider text-white">
            FITLOG
          </p>

          <p className="mt-1 text-sm text-zinc-400">
            Loading exercises...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loading;