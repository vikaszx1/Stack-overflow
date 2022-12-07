import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { Link, useNavigate } from 'react-router-dom'
import "./register.scss"
import { auth, db, storage } from '../../firebase';
import { async } from '@firebase/util';
import login from '../login/Login';

const Register = () => {

  const [img, setImg] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    // console.log(e.target[1].value)
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, "usersImages/" + displayName);

      const uploadTask = uploadBytesResumable(storageRef, img);

      uploadTask.on(


        (error) => {
          setError(true);
        },
        () => {

          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {
           await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

          // Add a new document in collection "cities"
          await setDoc(doc(db, "users", res.user.uid), {
           uid: res.user.uid,
           displayName,
           email,
           photoURL: downloadURL,
          });

          setDoc(doc(db,"usersPosts",res.user.uid),{ message:[] })
          });
        }
      );
    }catch(error){
      setError(true)
    }
    navigate("/Login")

  }

  return (
    <div className='register'>
      <div className="registerWrapper">
        <div className="registerLeft">
            <h3 className="registerLogo">StackOverflow Community</h3>
            <span className="registerDesc">
                Connect with friends and the world around you on Community.
            </span>
        </div>
        <div className="registerRight">
            <div className="registerBox">
                <div className="top">
                    <img src={img ? URL.createObjectURL(img) : "/assets/profileCover/DefaultProfile.jpg"} alt="" className="profileImg" />
                    <div className="formInput">
                        <label htmlFor="file">
                          Image: <DriveFolderUploadIcon className='icon' />
                          <input type="file" name="file" id="file" accept='.png,.jpeg,.jpg' style={{ display: "none" }} onChange={(e) =>setImg(e.target.files[0])} />
                        </label>
                    </div>
                </div>
                <div className="bottom">
                  <form onSubmit={handleRegister} className="bottomBox">
                    <input type="text" placeholder='Username' id='username' className='registerInput' required />
                    <input type="email" placeholder='Email' id='email' className='registerInput' required />
                    <input type="password" placeholder='Password' id='password' className='registerInput' minLenght={6} required />
                    {/* <input type="password" placeholder='Confirm Password' id='confirmPassword' className='registerInput' required /> */}
                    <button type='submit' className="registerButton">Sign Up</button>
                    <Link to="/login">
                      <button className="loginRegisterButton">Log into Account</button>
                    </Link>
                    {error && <span>Something went wrong!</span>}
                  </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Register
