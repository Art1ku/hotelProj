import Modal from "antd/es/modal/Modal"
import classes from "./Modal.module.scss"

export default function CustomModal({children, isOpen, onOk, onCancel, title}){


    return(
        <>
            <Modal
                className={classes.modalStyle}
                title={title} open={isOpen} onOk={onOk} onCancel={onCancel}
            >
                {children}
            </Modal>
        </>
    )
}