import { FC, memo } from "react";
import { Link } from "react-router-dom";
interface Props {
}
const SignupPage: FC<Props> = (props) => {
    return (
        <div>
            <div className="flex flex-col h-ful bg-gray-300">
                <div className="grid place-items-center mx-2 my-20  sm:my-auto">

                    <div className=" h-full w-11/12 p-12 border-double border-t-2 border-b-2 border-gray-600 bg-primary sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12
            px-6 py-6 sm:px-10 sm:py-6 
             rounded-lg shadow-md lg:shadow-lg">
                        <div className="flex">
                            <img className="h-48 w-48 mx-auto rounded-full" src="data:image/jpeg;base64,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" alt="" />
                        </div>
                        <form className="mt-6" method="POST">
                            <label className="block text-sm font-bold text-black uppercase">Name</label>
                            <input id="email" type="email" name="email" placeholder="First & Last "
                                className="block w-full border-2 border-gray-300 rounded-md py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                required />

                            <label className="block text-sm font-bold text-black uppercase pt-2">Email</label>
                            <input id="email" type="email" name="email" placeholder="Email Address"
                                className="block w-full border-2 border-gray-300 rounded-md py-3 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border-b-2 
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                required />

                            <label className="block mt-2 text-sm font-bold text-black uppercase " >Password</label>
                            <input id="password" type="password" name="password" placeholder="Password"
                                className="block border-2 border-gray-300 rounded-md w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                                required />

                            <Link to="/search"><span className=" text-blue-500"><button type="submit"
                                className="w-full py-3 mt-10 bg-gray-800 rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                                Signup
                            </button> </span> </Link>
                            <h1 className="sm:flex sm:flex-wrap pt-4 sm:mb-4 text-md flex justify-center">
                                <Link to="/login"><span className=" flex-2 underline ">Already have account? Login</span> </Link>
                            </h1>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
SignupPage.defaultProps = {
}
export { };
export default memo(SignupPage);