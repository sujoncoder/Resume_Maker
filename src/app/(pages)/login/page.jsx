import Link from 'next/link'
import Image from 'next/image';
import Logo from "/public/logo.png";
// import Pinkbtn from '../../components/Pinkbtn';
import icons from '@/app/utils/SocialIcons';


const Login = () => {
    return (
        <main className='bg-[#F8F9FB]'>
            <div className="min-h-screen flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                    <div className='flex justify-center items-center'>
                        <Image
                            src={Logo}
                            width={200}
                            height={200}
                            alt='logo'
                        />
                    </div>
                    <h2 className="text-xl font-bold py-6 text-slate-700 text-center">Login Your Account</h2>
                    <form>
                        <div className="mb-4">
                            <input
                                type="email"
                                className="w-full border border-gray-300 rounded p-2"
                                placeholder="john.doe@example.com"
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                className="w-full border border-gray-300 rounded p-2"
                                placeholder="********"
                            />
                        </div>

                        {/* <Pinkbtn label="Login" width="w-full" /> */}

                        <button className='bg-[#0072B1] w-full rounded text-white py-2 text-lg font-medium'>Login</button>

                        <p className='text-slate-700 py-2 text-sm'>New to here? <Link className='text-blue-500 hover:underline' href="/sign-up">Register</Link></p><br />

                        <hr /><br />
                        <p className='text-center'>Or Sign In With</p> <br />
                        <div className='flex space-x-2 justify-center items-center'>
                            {icons.map((icon, index) => (
                                <div key={index}>
                                    <Image
                                        src={icon.icon}
                                        width={40}
                                        height={40}
                                        alt='social icon'
                                        className='cursor-pointer hover:scale-105 duration-300'
                                    />
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}

export default Login