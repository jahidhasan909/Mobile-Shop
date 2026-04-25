'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { toast } from 'react-toastify';

import { useRouter } from 'next/navigation';

const SingUpPage = () => {

    const router = useRouter()

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries())
        const { data, error } = await authClient.signUp.email(
            {
                name: userData.name,
                email: userData.email,
                password: userData.password,
                // callbackURL: '/',
            },
            {
                onSuccess: () => {
                    router.push('/')
                }
            },

        )





        if (error) {
            toast.error("Error signing up: " + error.message)
        }
        if (data) {
            toast.success("Sign up successful! Please check your email to verify your account.");
        }
        console.log('mongodb', { data, error });


    };


    return (
        <div className='container flex justify-center mx-auto my-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-md">
                <div className="card-body">
                    <form onSubmit={onSubmit}>
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className='input rounded-md' placeholder='name' />
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input rounded-md" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input rounded-md" placeholder="Password" />
                            <Button type='submit' variant='outline' className="rounded-md w-full bg-black text-white mt-4">Sing Up</Button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SingUpPage;