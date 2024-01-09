import {useState} from 'react'

export default function SignUpForm(props) {
    const setToken = props.setToken;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                body: JSON.stringify({
                    username: {username},
                    password: {password},
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });

            const result = await response.json();
            setToken(result.token);
        } catch(error) {
            setError(error.message);
        }
    };

    return (
    <>
        <div class="formContainer">
        <h2>Sign Up</h2>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
        <label>
            Username: <input value={username} onChange={
            (e) => setUsername(e.target.value)
            }/>
        </label>
        <label>
            Password: <input value={password} onChange={
            (e) => setPassword(e.target.value)
            }/>
        </label>
        <button id="submit">Submit</button>
        </form>
        </div>
</>
    );
}