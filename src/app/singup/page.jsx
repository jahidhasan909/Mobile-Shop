'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';



const SingUpPage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { email, password, photo, name } = data

        const { data: res, error } = await authClient.signUp.email(
            {
                name: name,
                email: email,
                password: password,
                image: photo,
                // callbackURL: '/',
            },
        )





        if (error) {
            toast.error("Error signing up: " + error.message)
        }
        if (res) {
            toast.success("Sign up successful! Please check your email to verify your account.");
        }
        console.log('mongodb data img', { data, error });


    };


    return (
        <div className='container flex justify-center mx-auto my-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-md">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" className='input rounded-md' placeholder='name'{...register("name")} />
                            <label className="label">Your Img Url</label>
                            <input type="text" {...register("photo")} className='input rounded-md' placeholder='Url//' />
                            <label className="label">Email</label>
                            <input type="email" {...register("email")} className="input rounded-md" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" {...register("password")} className="input rounded-md" placeholder="Password" />
                            <Button type='submit' variant='outline' className="rounded-md w-full bg-black text-white mt-4">Sing Up</Button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUpPage;