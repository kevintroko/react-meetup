import { useState } from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

const Todo = ({ title }) => {
    const [open, setOpen] = useState(false);
    // useStateFalse returns an array with two elements

    const deleteHandler = (e) => {
        console.log(e, open);
        setOpen(true);
    };

    return <>
        <div className='card'>
            <h2>{title}</h2>
            <div className='actions'>
                <button onClick={deleteHandler}
                    className="btn">
                    Delete
                </button>
            </div>

            { open && <Modal /> }
            { open && <Backdrop /> }
        </div>
    </>;
}

export default Todo;