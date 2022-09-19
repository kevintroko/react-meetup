const Todo = ({ title }) => {
    
    const deleteHandler = (e) => {
        console.log(e);
    };

    return <>
        <div className='card'>
            <h2>{title}</h2>
            <div className='actions'>
                <button onClick={ deleteHandler }
                    className="btn">
                    Delete
                </button>
            </div>
        </div>
    </>;
}

export default Todo;