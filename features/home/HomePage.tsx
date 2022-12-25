import { useExampleData } from "../../services/service-example-data";
import { HomePageProps } from "./HomePage.types";

const HomePage: React.FC<HomePageProps> = () => {
    const { data, error, isLoading } = useExampleData();

    if (error) return <p>Something went wrong</p>;
    if (!data && isLoading) return <p>Loading…</p>;
    if ((!data || data.length <= 0) && !isLoading) return <p>There is no data</p>;

    return (
        <ul>
            {data && data.map((d) => (<li key={d.id}>{`${d.id} - ${d.text}`}</li>))}
        </ul>
    );
}

export default HomePage;