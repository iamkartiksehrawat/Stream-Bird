"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, X } from "lucide-react";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value) return;

    const url = qs.stringifyUrl(
      {
        url: "/search",
        query: { term: value },
      },
      { skipEmptyString: true }
    );

    router.push(url);
  };

  const onclear = () => {
    setValue("");
  };

  return (
    <form
      onSubmit={handlesubmit}
      className="relative w-full flex  lg:max-w-[500px] sm:max-w-[220px] md:max-w-[350px] items-stretch"
    >
      <div className="flex-grow flex">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search"
          className="flex-grow rounded-r-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 h-full"
        />
        {value && (
          <X
            onClick={onclear}
            className="absolute top-2.5 right-12 h-4 w-4 text-muted-foreground cursor-pointer hover:opacity-75 transition"
          />
        )}
      </div>
      <div className="flex">
        <Button
          type="submit"
          size="sm"
          variant="secondary"
          className="rounded-l-none h-full"
        >
          <SearchIcon className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default Search;
