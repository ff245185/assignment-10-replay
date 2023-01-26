import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contex/AughtContex';

const Siningup = () => {

 const {createUser} = useContext(AuthContext)



 const handleCreateUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email,password)
    .then(result=>{
       const user = result.user;
       console.log(user);
    })
   console.log(name,email,password);
 }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Create account!!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. <br /> In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleCreateUser} className="card-body">
                    {/* name */}
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" disabled />
                    </div>
                        {/* email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    {/* password  */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="text" placeholder="password" className="input input-bordered" />
                          <br />
                        {/* file  */}
                        <input type="file" className="file-input file-input-bordered file-input-xs w-full max-w-xs" />

                        <label className="label">
                            <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                        </label>
                        <div><p>Alrady have account</p><Link to='/login' className='text-red-600'>Login</Link></div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default Siningup;