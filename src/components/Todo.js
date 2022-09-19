import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = ({ title }) => {
    const [open, setOpen] = useState(false);
    // useStateFalse returns an array with two elements

    const deleteHandler = (e) => {
        console.log(open);
        setOpen(true);
    };

    const closeModalHandler = () => {
        setOpen(false);
    }

    return <>
        <div className='card'>
            <h2>{title}</h2>
            <div className='actions'>
                <button onClick={deleteHandler}
                    className="btn">
                    Delete
                </button>
            </div>

            { open && <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler}/> }
            { open && <Backdrop onClick={closeModalHandler}/> }
        </div>
    </>;
}

export default Todo;