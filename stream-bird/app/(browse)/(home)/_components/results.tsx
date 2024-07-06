import { getStreams } from "@/dbconfig/feedservice";
import { Skeleton } from "@/components/ui/skeleton";

import { ResultCard, ResultCardSkeleton } from "./result-card";

export const Results = async () => {
  const data = await getStreams();

  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Home</h2>
      {data.length === 0 && (
        <div className="flex justify-center items-center w-full">
          <div className="flex flex-col  items-center justify-center w-full">
            <img
              src="./not-enough-files.svg"
              alt="Streaming image"
              className="w-[30%] min-w-[200px]"
            />
            <span className="font-bold text-lg lg:text-2xl xl:text-4xl">
              No Stream Found
            </span>
          </div>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {data.map((result: any) => (
          <ResultCard key={result._id} data={result} />
        ))}
      </div>
    </div>
  );
};

export const ResultsSkeleton = () => {
  return (
    <div>
      <Skeleton className="h-8 w-[290px] mb-4" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {[...Array(4)].map((_, i) => (
          <ResultCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};
