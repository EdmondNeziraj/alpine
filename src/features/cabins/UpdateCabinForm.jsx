import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import { useUpdateCabin } from "./useUpdateCabin";

function UpdateCabinForm({ cabinToEdit = {}, onCloseModal }) {
  const { isUpdating, updateCabin } = useUpdateCabin();
  const { id: editId, ...editValues } = cabinToEdit;

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: editId ? editValues : {},
  });
  const { errors } = formState;


  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    console.log("data:", { ...data, image });
    updateCabin({ newCabinData: { ...data, image }, id: editId }, {
      onSuccess: () => {
        reset();
        onCloseModal?.()
      }
    });
  };

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input type="text" id="name" disabled={isUpdating} {...register("name", {
          required: "This field is required",
        })} />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" disabled={isUpdating} {...register("maxCapacity", {
          required: "This field is required",
          min: {
            value: 1,
            message: "Capacity should be at least 1",
          }
        })} />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input type="number" id="regularPrice" disabled={isUpdating} {...register("regularPrice", {
          required: "This field is required",
          min: {
            value: 1,
            message: "Capacity should be at least 1",
          }
        })} />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0} disabled={isUpdating} {...register("discount", {
          required: "This field is required",
          validate: (value) => value <= getValues().regularPrice || "Discount should be less than regular price",
        })} />
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" disabled={isUpdating} {...register("description", {
          required: "This field is required",
        })} />
      </FormRow>

      <FormRow label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          {...register("image")} />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button disabled={isUpdating}>Edit cabin</Button>
      </FormRow>
    </Form>
  );
}

export default UpdateCabinForm;