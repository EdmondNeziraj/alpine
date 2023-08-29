import { useState } from "react";
import Modal from "../../ui/Modal";
import { HiPencil } from "react-icons/hi2";
import UpdateCabinForm from "./UpdateCabinForm";

function EditCabin() {
    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpenModal(open => !open)}><HiPencil /></button>
            {isOpenModal && <Modal onClose={() => setIsOpenModal(false)}>
                    <UpdateCabinForm onCloseModal={() => setIsOpenModal(false)}/>
                </Modal>}
        </div>
    )
}

export default EditCabin;