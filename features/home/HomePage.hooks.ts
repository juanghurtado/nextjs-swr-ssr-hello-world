import { useCallback } from "react";
import { useAddExampleData, useExampleData, useUpdateExampleData } from "../../hooks/api/useExampleData";
import { ExampleData } from "../../model/model-example-data";

export const useHomePage = () => {
    const { data, error, isLoading } = useExampleData();
    const { trigger: triggerAdd } = useAddExampleData();
    const { trigger: triggerEdit } = useUpdateExampleData();

    const handleAddClick = useCallback(() => {
        triggerAdd({
            id: data && (data.length + 1) || 1,
            text: data && (`New element ${data.length + 1}`) || 'New element 1',
        }, {
            onError: (error) => console.error("There was an error while adding an example data", error),
            onSuccess: (data) => console.log("Example data added successfuly. New data list content: ", data)
        })
    }, [data, triggerAdd]);

    const handleEditClick = useCallback((element: ExampleData) => {
        triggerEdit({
            ...element,
            text: element.text + ' (edited)'
        }, {
            onError: (error) => console.error("There was an error while updating an example data", error),
            onSuccess: (data) => console.log("Example data updated successfuly. New data list content: ", data)
        })
    }, [triggerEdit]);

    return {
        data, error, isLoading, handleAddClick, handleEditClick
    }
}