import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { editUser } from "../UserReducer"

function Edit() {
    const {id} = useParams();
    const users = useSelector((state) => state.users)
    const existingUsers = users.filter((user: any) => user.id == id)
    const {name, email} = existingUsers[0];
    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEdit = (event: any) => {
        event.preventDefault();
        dispatch(editUser({
            id: id,
            name: uname,
            email: uemail
        }));
        navigate('/');
    }

    return (
        <>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center">
                <div className="w-50 border bg-secondary text-white p-5">
                    <form action="" onSubmit={handleEdit}>
                        <h3>Edit user</h3>
                        <div>
                            <label htmlFor="name">Name:</label>
                            <input 
                                type="text" 
                                name="name" 
                                className="form-control"
                                value={uname}
                                onChange={e => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="form-control"
                                value={uemail}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </div>
                        <button className="btn btn-info mt-3">Edit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Edit;