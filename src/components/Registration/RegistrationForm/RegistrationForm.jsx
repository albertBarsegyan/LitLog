import google from "../../images/google.png"
import { useForm } from "react-hook-form"
import { errorMes, minMaxLengtMes, requeridMes } from "../../../constants/errorMessage"
import style from "./registrationForm.module.css"


const RegistrationForm = () => {

    const {
        register,
        formState: {
            errors
        },
        handleSubmit,
        watch,
        reset
    } = useForm()


    const password = watch("password", "");
    const repeatPassword = watch("repeatPassword", "");

    const onSubmit = data => {
        reset()
        if (password === repeatPassword) {
            console.log(JSON.stringify(data));
        }
        else {
            console.log(false);
        }
    }



    return (
        <form onSubmit={handleSubmit(onSubmit)} >

            <button className={style.googleBtn}><img src={google} alt="" className={style.googleImg} /> Sing up with Google</button>

            <div className={style.border}>
                <div className={style.spBor}></div>
                <span>or</span>
                <div className={style.spBor}></div>
            </div>

            <input
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

            <div>
                {errors?.firstName && <p style={{ color: "red" }}>{errors?.firstName?.message || "Error!"}</p>}
            </div>

            <input
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
            <div>
                {errors?.lastName && <p style={{ color: "red" }}>{errors?.lastName?.message || "Error!"}</p>}
            </div>
            <input

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
            <div>
                {errors?.email && <p style={{ color: "red" }}>{errors?.email?.message || "Error!"}</p>}
            </div>
            <input
                {
                ...register("password", {
                    required: requeridMes.reqMes,
                    pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                        message: errorMes.Password
                    }
                })
                }
                type="password" placeholder="Password"

            />
            <div>
                {errors?.password && <p style={{ color: "red" }}>{errors?.password?.message || "Error!"}</p>}
            </div>

            <input
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
            <div>
                {errors?.password && <p style={{ color: "red" }}>{errors?.password?.message || "Error!"}</p>}
            </div>
            {password !== repeatPassword && <p style={{ color: "red" }}>{errorMes.passReap}</p>}
            <button
                className={style.but} type="submit">Submit</button>
        </form >
    );
};

export default RegistrationForm;