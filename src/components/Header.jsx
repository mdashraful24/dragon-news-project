import moment from 'moment';
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-2 py-5'>
            <div>
                <img src={logo} alt="logo" className='w-80' />
            </div>
            <p className='text-gray-500'>Journalism Without Fear or Favour</p>
            <p className=''>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;