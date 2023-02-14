import { GetServerSideProps } from 'next';
import HomePage from '../features/home/HomePage';
import { HomePageProps } from '../features/home/HomePage.types';
import { getExampleDataKey } from '../hooks/api/useExampleData';
import { ServiceExampleData } from '../services/service-example-data';

export default HomePage;

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const exampleData = await ServiceExampleData.getAll();

  return {
    props: {
      // This is a prop from `HomePageProps`
      exampleProp: true,

      // We can also provide this `fallback` prop, even if its not from `HomePageProps`
      fallback: {
        [getExampleDataKey]: exampleData
      }
    }
  };
};
