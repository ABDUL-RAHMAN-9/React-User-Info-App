import { useState } from 'react'

function UserInfoForm()
{
    const [name, setName] = useState("");
    const [favoriteColor, setFavoriteColor] = useState("");
    const [age, setAge] = useState("");
    const [gretting, setGretting] = useState("");
    const [darkMode, setDarkMode] = useState(false);


    // styling for light & Dark Mode
    const DarkModeStyling = {
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#333",
    }
    return (
        <div>
            <div className="flex flex-col min-h-screen items-center p-5 space-y-10" style={DarkModeStyling}>
                <h1 className='text-5xl font-serif'>User Information Form</h1>
                {/* Toggle for dark mode */}
                <button
                    onClick={() => { setDarkMode((prev) => !prev) }}
                    className='border p-3 cursor-pointer'>
                    Toggle Dark Mode
                </button>
            </div>


        </div>
    )
}

export default UserInfoForm
