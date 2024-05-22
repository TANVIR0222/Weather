import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons'
const Input = () => {
    return (
        <div className='flex flex-row justify-center my-6'>
            <div className='flex flex-row justify-center items-center space-x-4 w-3/4'>
                <input type="text" placeholder="search here" className="input input-bordered input-success bg-white w-full max-w-xs" />

                <UilSearch size={30} className='text-white cursor-pointer transition ease-out hover:scale-125' />
                <UilLocationPoint size={30} className='text-white cursor-pointer transition ease-out hover:scale-125' />
            </div>

            <div className='flex flex-row w-1/3 items-center justify-center '>
                <button name='metric'  className='text-white text-xl font-light '>°C</button>
                <p className='text-white text-xl mx-2'>|</p>
                <button name='imperial' className='text-white text-xl font-light ' >°F</button>
            </div>
        </div>
    );
};

export default Input;