import { useHomePage } from "./HomePage.hooks";
import { HomePageProps } from "./HomePage.types";

const HomePage: React.FC<HomePageProps> = () => {
    const { data, error, isLoading, handleAddClick, handleEditClick } = useHomePage();

    if (error) return <p>Something went wrong</p>;
    if (!data && isLoading) return <p>Loading…</p>;

    return (
    <>
        {data &&
            <ul>
                {data.map((d) => (<li key={d.id}>
                    {`${d.id} - ${d.text}`} <button onClick={() => {
                        handleEditClick(d);
                    }}>Edit</button>
                </li>))}
            </ul>
        }

        <p>
            <button onClick={handleAddClick}>Add a new element</button>
        </p>
    </>
    );
}

export default HomePage;