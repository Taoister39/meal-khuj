import { Dispatch, FunctionComponent, SetStateAction } from "react";
import styles from "./SearchBar.module.scss";

interface SearchBarProps {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  searchText,
  setSearchText,
}) => {
  return (
    <input
      className={styles.input}
      value={searchText}
      onChange={(event) => setSearchText(event.target.value)}
    />
  );
};

export default SearchBar;
