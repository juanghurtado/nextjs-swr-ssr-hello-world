import { GetServerSideProps } from "next";
import HomePage from "../features/home/HomePage";
import { HomePageProps } from "../features/home/HomePage.types";
import { getExampleData, getExampleDataKey } from "../services/service-example-data";

export default HomePage;

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context) => {
  const exampleData = await getExampleData();

  return {
    props: {
      // This is a prop from `HomePageProps`
      exampleProp: true,
      
      // We can also provide this `fallback` prop, even if its not from `HomePageProps`
      fallback: {
        [getExampleDataKey]: exampleData
      }
    }
  }
}