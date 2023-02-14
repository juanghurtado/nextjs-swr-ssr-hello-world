import { useHomePage } from './HomePage.hooks';
import { HomePageProps } from './HomePage.types';

const HomePage: React.FC<HomePageProps> = () => {
  const {
    exampleData,
    error,
    isLoading,
    handleAddClick,
    handleEditClick,
    handleDeleteClick
  } = useHomePage();

  if (error) return <p>Something went wrong</p>;
  if (!exampleData && isLoading) return <p>Loading…</p>;

  return (
    <>
      {exampleData && (
        <ul>
          {exampleData.map((d) => (
            <li key={d.id}>
              {`${d.id} - ${d.text}`}{' '}
              <button
                onClick={() => {
                  handleEditClick(d);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  handleDeleteClick(d);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <p>
        <button onClick={handleAddClick}>Add a new element</button>
      </p>
    </>
  );
};

export default HomePage;
