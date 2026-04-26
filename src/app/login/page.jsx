'use client'
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { toast } from 'react-toastify';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import Link from 'next/link';

const Loginpage = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data) => {
        const { password, email } = data
        const { data: res, error } = await authClient.signIn.email(
            {
                password: password,
                email: email,
                // callbackURL: '/',
            },
        )

        if (error) {
            toast.error("Error signing up: " + error.message)
        }
        if (res) {
            toast.success("Log In successful!");
        }
        console.log('mongodb', { data, error });


    };


    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        if (data) {
            toast.success("Log In with google successful!");
        }
    }
    const handleGitHubLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "github"
        })
        if (data) {
            toast.success("Log In with Github successful!");
        }
    }

    return (
        <div className='container flex justify-center mx-auto my-10'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-md">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" {...register("email")} className="input rounded-md" placeholder="Email" />
                            <label className="label" >Password</label>
                            <input type="password" {...register("passwrod")} className="input rounded-md" placeholder="Password" />
                            <Button type='submit' variant='outline' className="rounded-md w-full bg-black text-white mt-4">Sing Up</Button>
                            <Button onClick={handleGoogleLogin} variant='outline' className={'rounded-md w-full'}><FaGoogle /> LogIn With Google</Button>
                            <Button onClick={handleGitHubLogin} variant='outline' className={'rounded-md w-full'}><FaGithub /> LogIn With Github</Button>
                            <p className='text-center text-xs'>Dont’t Have An Account ? <Link href={'/singup'} className='text-red-400'>Register</Link></p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Loginpage;