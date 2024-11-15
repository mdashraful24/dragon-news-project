import { FaGithub, FaGoogle } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-5">Login With</h2>
            <div className="flex flex-col gap-3 *:w-full">
                <button className="btn btn-sm text-blue-500 border-blue-500 rounded-md">
                    <FaGoogle /> Login with Google
                </button>
                <button className="btn btn-sm border-black rounded-md">
                    <FaGithub /> Login with GitHub
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;