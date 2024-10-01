
import { useRouter } from 'next/router';
import ProductCard from '@/components/ProductCard'; // Assuming the path is correct

const SearchResults = () => {
  const router = useRouter();
  const { query } = router.query;

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <ProductCard searchQuery={query} />
    </div>
  );
};

export default SearchResults;
