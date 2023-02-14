import { useCallback } from 'react';
import {
  useAddExampleData,
  useDeleteExampleData,
  useExampleData,
  useUpdateExampleData
} from '../../hooks/api/useExampleData';
import { ExampleData } from '../../model/model-example-data';
import { UseHomePage } from './HomePage.types';

export const useHomePage = (): UseHomePage => {
  const { exampleData, error, isLoading } = useExampleData();
  const { addExampleData } = useAddExampleData();
  const { updateExampleData } = useUpdateExampleData();
  const { deleteExampleData } = useDeleteExampleData();

  const handleAddClick = useCallback(() => {
    addExampleData(
      {
        text: 'New element'
      },
      {
        onError: (error) =>
          console.error(
            'There was an error while adding an example data',
            error
          ),
        onSuccess: (data) =>
          console.log(
            'Example data added successfuly. New data list content: ',
            data
          )
      }
    );
  }, [addExampleData]);

  const handleEditClick = useCallback(
    (element: ExampleData) => {
      updateExampleData(
        {
          ...element,
          text: element.text + ' (edited)'
        },
        {
          onError: (error) =>
            console.error(
              'There was an error while updating an example data',
              error
            ),
          onSuccess: (data) =>
            console.log(
              'Example data updated successfuly. New data list content: ',
              data
            )
        }
      );
    },
    [updateExampleData]
  );

  const handleDeleteClick = useCallback(
    (element: ExampleData) => {
      deleteExampleData(element, {
        onError: (error) =>
          console.error(
            'There was an error while deleting an example data',
            error
          ),
        onSuccess: (data) =>
          console.log(
            'Example data deleted successfuly. New data list content: ',
            data
          )
      });
    },
    [deleteExampleData]
  );

  return {
    exampleData,
    error,
    isLoading,
    handleAddClick,
    handleEditClick,
    handleDeleteClick
  };
};
