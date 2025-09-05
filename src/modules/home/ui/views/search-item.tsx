import React from "react";
import useMenuFilters from "../../hooks/use-menu-filters";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

export default function SearchItem() {
  const [filters, setFilters] = useMenuFilters();
  return (
    <div className="flex items-center gap-2 m-2">
      <Input
        type="text"
        placeholder="Search Menu..."
        className="rounded-full"
        value={filters.search}
        onChange={(e) => {
          setFilters({ search: e.target.value });
        }}
      />
      <Button size="icon" className="rounded-full">
        <Search className="h-5 w-5" />
      </Button>
    </div>
  );
}
