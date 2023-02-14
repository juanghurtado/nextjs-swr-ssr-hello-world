import { ExampleData } from '../../model/model-example-data';

export type HomePageProps = {
  exampleProp: boolean;
};

export type UseHomePage = {
  exampleData?: ExampleData[];
  error: Error;
  isLoading: boolean;
  handleAddClick: () => void;
  handleEditClick: (element: ExampleData) => void;
  handleDeleteClick: (element: ExampleData) => void;
};
