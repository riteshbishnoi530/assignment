import React, { useState } from 'react';

function Assignment() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [userData, setUserData] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (firstName && lastName && email) {
            setUserData([...userData, { firstName, lastName, email }]);
            setFirstName('');
            setLastName('');
            setEmail('');
        }
    };

    const filteredData = userData.filter((user) => {
        const searchTerm = searchInput.toLowerCase();
        return (
            user.firstName.includes(searchTerm) ||
            user.lastName.includes(searchTerm) ||
            user.email.includes(searchTerm)
        );
    });

    return (
        <div className='min-h-screen justify-center items-center flex flex-col gap-5 px-4'>
            <form onSubmit={handleSubmit} className='max-w-[700px] w-full mx-auto flex flex-col gap-4'>
                <div className='flex max-sm:flex-col gap-4 w-full'>
                    <input
                        required
                        className='w-1/2 max-sm:w-full border border-black p-4 outline-none rounded-md'
                        type="text"
                        placeholder='First Name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input
                        required
                        className='w-1/2 max-sm:w-full border border-black p-4 outline-none rounded-md'
                        placeholder='Last Name'
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <input
                    required
                    className='w-full border border-black p-4 outline-none rounded-md'
                    placeholder='Email'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button
                    className='bg-blue-500 hover:bg-blue-700 transition-all ease-in-out duration-300 text-white font-bold py-2 px-10 w-fit mx-auto rounded'
                    type="submit"
                >
                    Add
                </button>
            </form>

            <div className='max-w-[700px] w-full mx-auto flex flex-col border border-black rounded-lg'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='w-full border-black border-b p-2 rounded-t-lg outline-none'
                    placeholder='Search'
                    type="text"
                />

                <div className='flex'>
                    <p className='pl-2 py-2 w-4/12 font-semibold'>First Name</p>
                    <p className='pl-2 py-2 w-4/12 font-semibold border-l border-r border-black'>Last Name</p>
                    <p className='pl-2 py-2 w-4/12 font-semibold'>Email</p>
                </div>

                <div className='flex flex-col'>
                    {filteredData.length === 0 && searchInput ? (
                        <p className="text-center text-gray-500">No users found</p>
                    ) : (
                        filteredData.map((user, index) => (
                            <div className='flex border-t border-black' key={index}>
                                <p className='pl-2 w-4/12 overflow-x-auto'>{user.firstName}</p>
                                <p className='pl-2 border-l border-r border-black w-4/12 overflow-x-auto'>{user.lastName}</p>
                                <p className='pl-2 w-4/12 overflow-x-auto'>{user.email}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Assignment;
