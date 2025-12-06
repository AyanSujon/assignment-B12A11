

// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { Link, useLocation, useNavigate } from 'react-router';
// import axios from 'axios';
// import useAuth from '../../hooks/useAuth';
// import SocialLogin from './SocialLogin';
// import logo from '../../assets/logo/favicon.png';
// import Loading from '../Loading';
// import toast from 'react-hot-toast'; 

// const Register = () => {
//     const { register, handleSubmit, formState: { errors } } = useForm();
//     const { createUserWithEmailAndPasswordFunction, updateUserProfile, loading, setLoading } = useAuth();
//     const location = useLocation();
//     const navigate = useNavigate();

//     if (loading) {
//         return <Loading />;
//     }

//     const handleRegistration = (data) => {
//         setLoading(true);
//         const profileImg = data.photo[0];

//         createUserWithEmailAndPasswordFunction(data.email, data.password)
//             .then((result) => {
//                 const formData = new FormData();
//                 formData.append('image', profileImg);

//                 const image_API_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
//                 axios.post(image_API_Url, formData)
//                     .then(res => {
//                         const userProfile = {
//                             displayName: data.name,
//                             photoURL: res.data.data.url

//                         };
//                         updateUserProfile(userProfile)
//                             .then(() => {


//                                 toast.success('Registration successful!'); // <-- success toast
//                                 navigate(location?.state || '/');
//                                 setLoading(false);
//                             })
//                             .catch(error => {
//                                 console.log(error);
//                                 toast.error('Failed to update profile.');
//                                 setLoading(false);
//                             });
//                     })
//                     .catch(error => {
//                         console.log(error);
//                         toast.error('Image upload failed.');
//                         setLoading(false);
//                     });
//             })
//             .catch((error) => {
//                 console.log(error);
//                 toast.error(error.message || 'Registration failed.');
//                 setLoading(false);
//             });
//     }

//     return (
//         <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-5">
//             <span className="flex justify-center items-center mt-5">
//                 <figure className="w-8 flex justify-center items-center">
//                     <img src={logo} alt="Logo" className="w-full h-auto" />
//                 </figure>
//             </span>

//             <h3 className="text-3xl text-center">Create an Account</h3>
//             <p className='text-center'>Register with ClubSphere </p>
//             <form className='card-body' onSubmit={handleSubmit(handleRegistration)}>
//                 <fieldset className="fieldset">
//                     {/* Name */}
//                     <label className="label">Name</label>
//                     <input type="text" {...register('name', { required: true })} className="input w-full" placeholder="Your name" />
//                     {errors.name?.type === 'required' && (<p className='text-red-500'>Name is required.</p>)}

//                     {/* Photo */}
//                     <label className="label">Photo</label>
//                     <input type="file" {...register('photo', { required: true })} className="file-input w-full" />
//                     {errors.photo?.type === 'required' && (<p className='text-red-500'>Photo is required.</p>)}

//                     {/* Email */}
//                     <label className="label">Email</label>
//                     <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />
//                     {errors.email?.type === 'required' && (<p className='text-red-500'>Email is required.</p>)}

//                     {/* Password */}
//                     <label className="label">Password</label>
//                     <input type="password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/ })} className="input w-full" placeholder="Password" />
//                     {errors.password?.type === 'required' && (<p className='text-red-500'>Password is required.</p>)}
//                     {errors.password?.type === 'minLength' && (<p className='text-red-500'>Password must be 6 characters or longer.</p>)}
//                     {errors.password?.type === 'pattern' && (<p className='text-red-500'>Password must contain at least one uppercase, one lowercase, one number, and one special character.</p>)}

//                     <button className="btn bg-primary hover:bg-secondary text-white mt-4">Register</button>
//                 </fieldset>
//                 <p>Already have an account? <Link to={'/login'} state={location?.state} className='text-primary link-hover'>Login</Link></p>
//             </form>
//             <SocialLogin />
//         </div>
//     );
// };

// export default Register;











import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';
import logo from '../../assets/logo/favicon.png';
import Loading from '../Loading';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUserWithEmailAndPasswordFunction, updateUserProfile, loading, setLoading } = useAuth();
    const axiosSecure = useAxiosSecure();

    const location = useLocation();
    const navigate = useNavigate();

    if (loading) {
        return <Loading />;
    }

    const handleRegistration = (data) => {
        setLoading(true);
        const profileImg = data.photo[0];

        createUserWithEmailAndPasswordFunction(data.email, data.password)
            .then((result) => {
                const formData = new FormData();
                formData.append('image', profileImg);

                const image_API_Url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;
                axios.post(image_API_Url, formData)
                    .then(res => {


                        // create user in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            photoURL: res.data.data.url,

                        };

                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user created in the database');
                                }
                            })





                        // update user profile to firebase
                        const userProfile = {
                            displayName: data.name,
                            photoURL: res.data.data.url

                        };
                        updateUserProfile(userProfile)
                            .then(() => {


                                toast.success('Registration successful!'); // <-- success toast
                                navigate(location?.state || '/');
                                setLoading(false);
                            })
                            .catch(error => {
                                console.log(error);
                                toast.error('Failed to update profile.');
                                setLoading(false);
                            });
                    })
                    .catch(error => {
                        console.log(error);
                        toast.error('Image upload failed.');
                        setLoading(false);
                    });
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.message || 'Registration failed.');
                setLoading(false);
            });
    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-5">
            <span className="flex justify-center items-center mt-5">
                <figure className="w-8 flex justify-center items-center">
                    <img src={logo} alt="Logo" className="w-full h-auto" />
                </figure>
            </span>

            <h3 className="text-3xl text-center">Create an Account</h3>
            <p className='text-center'>Register with ClubSphere </p>
            <form className='card-body' onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">
                    {/* Name */}
                    <label className="label">Name</label>
                    <input type="text" {...register('name', { required: true })} className="input w-full" placeholder="Your name" />
                    {errors.name?.type === 'required' && (<p className='text-red-500'>Name is required.</p>)}

                    {/* Photo */}
                    <label className="label">Photo</label>
                    <input type="file" {...register('photo', { required: true })} className="file-input w-full" />
                    {errors.photo?.type === 'required' && (<p className='text-red-500'>Photo is required.</p>)}

                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" {...register('email', { required: true })} className="input w-full" placeholder="Email" />
                    {errors.email?.type === 'required' && (<p className='text-red-500'>Email is required.</p>)}

                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password', { required: true, minLength: 6, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/ })} className="input w-full" placeholder="Password" />
                    {errors.password?.type === 'required' && (<p className='text-red-500'>Password is required.</p>)}
                    {errors.password?.type === 'minLength' && (<p className='text-red-500'>Password must be 6 characters or longer.</p>)}
                    {errors.password?.type === 'pattern' && (<p className='text-red-500'>Password must contain at least one uppercase, one lowercase, one number, and one special character.</p>)}

                    <button className="btn bg-primary hover:bg-secondary text-white mt-4">Register</button>
                </fieldset>
                <p>Already have an account? <Link to={'/login'} state={location?.state} className='text-primary link-hover'>Login</Link></p>
            </form>
            <SocialLogin />
        </div>
    );
};

export default Register;
