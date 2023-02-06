import { useAddExampleData, useEditExampleData, useExampleData } from "../../services/service-example-data";
import { HomePageProps } from "./HomePage.types";

const HomePage: React.FC<HomePageProps> = () => {
    const { data, error, isLoading } = useExampleData();
    const { trigger: triggerAdd } = useAddExampleData();
    const { trigger: triggerEdit } = useEditExampleData();

    if (error) return <p>Something went wrong</p>;
    if (!data && isLoading) return <p>Loading…</p>;

    return (
    <>
        {data &&
            <ul>
                {data.map((d) => (<li key={d.id}>
                    {`${d.id} - ${d.text}`} <button onClick={() => triggerEdit({
                        ...d,
                        text: d.text + ' (edited)'
                    })}>Edit</button>
                </li>))}
            </ul>
        }

        <p>
            <button onClick={() => triggerAdd({
                id: data && (data.length + 1) || 1,
                text: data && (`New element ${data.length + 1}`) || 'New element 1',
            })}>Add a new element</button>
        </p>
    </>
    );
}

export default HomePage;