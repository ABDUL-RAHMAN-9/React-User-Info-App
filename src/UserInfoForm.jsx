import { useState } from 'react'

function UserInfoForm()
{
    const [name, setName] = useState("");
    const [favoriteColor, setFavoriteColor] = useState("");
    const [age, setAge] = useState("");
    const [darkMode, setDarkMode] = useState(false);


    // styling for light & Dark Mode
    const DarkModeStyling = {
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
    }


    const handleSubmit = () =>
    {
        const message = `Hello ${name || "there"}! You are ${age || "an ageless wonder"
            } years old, and your favorite color is ${favoriteColor || "a mystery"
            }.`;
        alert(message);
    }

    return (
        <div>
            <div className="flex flex-col justify-center min-h-screen items-center p-5 space-y-10" style={DarkModeStyling}>
                <h1 className='text-5xl font-serif'>User Information Form</h1>
                {/* Toggle for dark mode */}
                <button
                    onClick={() => { setDarkMode((prev) => !prev) }}
                    className='border p-3 cursor-pointer'>
                    Toggle Dark Mode
                </button>


                {/* Inupt for Name */}
                <label className='text-xl'> 
                    <input type="text"
                        value={name}
                        placeholder='Enter Name:'
                        onChange={(event) => setName(event.target.value)}
                        className='border p-3 rounded ml-4'
                    />
                </label>

                {/* Input for Favorite Color */}

                <label className='text-xl'>
                    <input type="text"
                        value={favoriteColor}
                        placeholder='Enter you Favorite Color:'
                        onChange={(event) => setFavoriteColor(event.target.value)}
                        className='border p-3 rounded ml-4'
                    />
                </label>

                {/* Input for Age */}
                <label className='text-xl'>
                    <input type="number"
                        value={age}
                        placeholder='Enter Name:'
                        onChange={(event) => setAge(event.target.value)}
                        className='border p-3 rounded ml-4'
                    />
                </label>

                {/* Submit Button */}

                <button
                    className='border px-8 py-2 rounded-2xl text-2xl'
                    onClick={handleSubmit}>
                    Submit
                </button>

            </div>
        </div>
    )
}

export default UserInfoForm
