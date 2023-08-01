import { useState } from "react";
import { addUser } from "../UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


function Create() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
        navigate('/');
    }

    return (
        <>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="w-50 border bg-secondary text-white p-5">
                    <form action="" onSubmit={handleSubmit}>
                        <h3>Add a new user</h3>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control"
                                onChange={e => setName(e.target.value)}    
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control"
                                onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                        <button className="btn btn-info mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Create;