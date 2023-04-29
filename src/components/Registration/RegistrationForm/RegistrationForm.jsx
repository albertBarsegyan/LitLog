import google from "../../../assets/images/google.png"
import { useForm } from "react-hook-form"
import { errorMes, minMaxLengtMes, requeridMes } from "../../../constants/errorMessage"
import style from "./registrationForm.module.css"
import { useAuth } from "../../../context/auth.context";
import { useState } from "react";


const RegistrationForm = () => {
    const { signUp, isLoading, error } = useAuth();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    })


    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        reset,
    } = useForm({
        mode: 'all',
    });

    const password = watch('password', '');
    const repeatPassword = watch('repeatPassword', '');

    const onSubmit = (e) => {
        reset();
        // e.preventDefault();
        signUp(formData)
        console.log(1233);
    };

    const handleUserChange = e => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const butDisable = errors.firstName || errors.lastName || errors.email || errors.password || errors.repeatPassword;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <button className={style.googleBtn}>
                <img src={google} alt="" className={style.googleImg} /> Sing up with Google
            </button>

            <div className={style.border}>
                <div className={style.spBor}></div>
                <span>or</span>
                <div className={style.spBor}></div>
            </div>

            <label htmlFor="">
                <div>
                    {errors?.firstName && <p className={style.errormess} >{errors?.firstName?.message || "Error!"}</p>}
                </div>
                <input
                    className={errors.firstName ? style.erorrInp : style.inp}
                    onChange={handleUserChange}
                    // value={formData.firstName}

                    {...register("firstName", {
                        required: requeridMes.reqMes,
                        minLength: {
                            value: 3,
                            message: minMaxLengtMes.minName
                        },
                        maxLength: {
                            value: 10,
                            message: minMaxLengtMes.maxName
                        }
                    }
                    )}


                    type="text" placeholder="First name" />


            </label>

            <label htmlFor="">
                <div>
                    {errors?.lastName && <p className={style.errormess} >{errors?.lastName?.message || "Error!"}</p>}
                </div>
                <input

                    className={errors.lastName ? style.erorrInp : style.inp}
                    onChange={handleUserChange}
                    // value={formData.lastName}
                    {...register("lastName", {
                        required: requeridMes.reqMes,
                        minLength: {
                            value: 3,
                            message: minMaxLengtMes.minName
                        },
                        maxLength: {
                            value: 10,
                            message: minMaxLengtMes.maxName
                        }
                    }
                    )}


                    type="text" placeholder="Last Name" />

            </label>

            <label htmlFor="">
                <div>
                    {errors?.email && <p className={style.errormess} >{errors?.email?.message || "Error!"}</p>}
                </div>

                <input

                    className={errors.email ? style.erorrInp : style.inp}
                    onChange={handleUserChange}
                    // value={formData.email}
                    {
                    ...register("email", {
                        required: requeridMes.reqMes,
                        pattern: {
                            value: /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                            message: errorMes.Email
                        }


                    })
                    }
                    type="email" placeholder="Email" />

            </label>

            <div>
                {errors?.password && <p className={style.errormess} >{errors?.password?.message || "Error!"}</p>}
            </div>
            <label htmlFor="">


                <input
                    onChange={handleUserChange}
                    // value={formData.password}
                    className={errors.password ? style.erorrInp : style.inp}
                    {
                    ...register("password", {
                        required: requeridMes.reqMes,
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: errorMes.Password
                        }
                    })
                    }
                    type="password"
                    placeholder="Password"


                />
            </label>

            <label htmlFor="">
                <div>
                    {errors?.repeatPassword && <p className={style.errormess} >{errors?.repeatPassword?.message || "Error!"}</p>}
                </div>
                {password !== repeatPassword && <p className={style.errormess} >{errorMes.passReap}</p>}
                <input

                    className={errors.repeatPassword ? style.erorrInp : style.inp}
                    {
                    ...register("repeatPassword", {
                        required: requeridMes.reqMes,
                        pattern: {
                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                            message: errorMes.Password
                        }


                    })
                    }
                    type="password" placeholder="Repeat password"
                />

            </label>


            <button
                disabled={butDisable || isLoading}
                className={style.but}
                
                type="submit">Submit
            </button>
            {error && <p>{error.message}</p>}
        </form >
    );

};

export default RegistrationForm;
