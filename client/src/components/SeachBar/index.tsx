import { useSearchBar } from "./useSearchBar";

function SearchBar() {
  const { title, handleKeyDown, hanleTitle } = useSearchBar();
  return (
    <div>
      <input
        className="text-[21px] placeholder-neutral-300 bg-neutral-800 py-[10px] pl-[17px] outline-none rounded-md"
        placeholder="검색"
        onChange={hanleTitle}
        onKeyDown={handleKeyDown}
        value={title}
      />
    </div>
  );
}

export default SearchBar;
