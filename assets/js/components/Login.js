import React, {useState} from 'react';
import '../../css/components/Login.scss';
import logo from '../../img/logo.png';

async function loginUser(credentials) {
    console.log(credentials);
    return fetch("http://127.0.0.1:3000/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        // body: credentials,
        body: JSON.stringify(credentials),
    })
        .then(data => data.json())
}

function Login({setToken}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser({
            'email': email,
            'password': password
        });
        console.log(response);
        if ('status' in response && response.status === "ok" && 'token' in response) {
            setToken(response.token);
        } else {
            console.log(response);
        }
    }

    return (
        <main className="form-signin">
            <form onSubmit={handleSubmit}>
                <img className="mb-4 mx-auto" src={logo} alt="" height="57"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                    <div className="form-floating">
                        <input onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={e => setPassword(e.target.value)} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
            </form>
        </main>
    );
}

export default Login;
