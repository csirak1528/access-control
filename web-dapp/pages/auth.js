import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import Home from './home'
import {app} from '../db/firebase'

// const app = initializeApp(firebaseConfig)
const auth = getAuth(app);

export default function Authentication(){
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [mode,setMode]=useState(0)
    const [user,setUser]=useState()
    const handleSubmit=()=>{
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user)
                // setUser(user)
                // setMode(1)
                return user;
                // ...
            })
            .then(u=>setUser(u)).then(r=>setMode(1))
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)

                if(errorCode=="auth/email-already-in-use"){
                    signInWithEmailAndPassword(auth, email, password)
                        .then((userCredential) => {
                            // Signed in
                            const user = userCredential.user;
                            return user
                        }).then(u=>setUser(u)).then(r=>setMode(1))
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            console.log(errorCode)
                        });
                }
                // ..
            });
    }


    return(
        <div>

                {mode==0?
                    <div>
                            <label>
                                Username:
                                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} />
                            </label>
                            <label>
                                Password:
                                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </label>
                            <button onClick={handleSubmit}>Log in</button>

                    </div>

                    :<Home user={user}></Home>}

        </div>
    )
}