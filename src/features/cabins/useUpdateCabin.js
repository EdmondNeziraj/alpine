import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCabin as updateCabinApi } from "../../services/apiCabins";

export function useUpdateCabin() {
    const queryClient = useQueryClient();

    const { mutate: updateCabin, isLoading: isUpdating } = useMutation({
        mutationFn: ({ newCabinData, id }) => updateCabinApi(newCabinData, id),
        onSuccess: () => {
            toast.success("Cabin successfully updated");
            queryClient.invalidateQueries({ queryKey: ["cabins"] });
        },
        onError: (error) => toast.error(error.message)
    });

    return { isUpdating, updateCabin }
}