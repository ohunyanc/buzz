import Layout from "@/layout/layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from '../styles/Form.module.css'
import { HiAtSymbol, HiFingerPrint, HiOutlineUser, HiUser } from "react-icons/hi";
import { useState } from "react";
import { useFormik } from "formik";
import { registerValidate } from "@/lib/validate";
import { useRouter } from "next/router";

export default function Register() {

    const [show, setShow] = useState({ password: false, cpassword: false })
    const router = useRouter()
    
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validate: registerValidate,
        onSubmit
    })

    async function onSubmit(values) {
        const options = {
            method:"POST",
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(values)
        }

        await fetch('https://buzzlive.vercel.app/api/auth/register',options)
            .then(res => res.json())
        .then((data) => {
            if (data) router.push('https://buzzlive.vercel.app/login');
        })
    }
    return (
        <Layout>

            <Head>
                <title>Registration page</title>
            </Head>
            <section className="w-3/4 mx-auto flex flex-col gap-10">
                <div className="title">
                    <h1 className="text-gray-600 text-4xl font-bold py-4">Register</h1>
                    <p className="w-3/4 mx-auto text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
                {/* form */}
                <form className="flex flex-col gap-5" onSubmit={formik.handleSubmit}>
                    <div className={`${styles.input_group} ${formik.errors.username && formik.touched.username ? "border-rose-800" : ""}`}>
                        <input type="text" name="username" placeholder="Username" className={styles.input_text} {...formik.getFieldProps('username')} />
                        <span className="icon flex items-center px-4">
                            <HiOutlineUser size={25} />
                        </span>
                    </div>
                    {formik.errors.username && formik.touched.username ? <span className="text-sm font-light text-rose-600">{formik.errors.username}</span> : <></>}

                    <div className={`${styles.input_group} ${formik.errors.email && formik.touched.email ? "border-rose-800" : ""}`}>
                        <input type="email" name="email" placeholder="Email" className={styles.input_text} {...formik.getFieldProps('email')} />
                        <span className="icon flex items-center px-4">
                            <HiAtSymbol size={25} />
                        </span>
                    </div>
                    {formik.errors.email && formik.touched.email ? <span className="text-sm font-light text-rose-600">{formik.errors.email}</span> : <></>}

                    <div className={`${styles.input_group} ${formik.errors.password && formik.touched.password ? "border-rose-800" : ""}`}>
                        <input type={`${show.password ? "text" : "password"}`} name="password" placeholder="Password" className={styles.input_text} {...formik.getFieldProps('password')} />
                        <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, password: !show.password })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {formik.errors.password && formik.touched.password ? <span className="text-sm font-light text-rose-600">{formik.errors.password}</span> : <></>}

                    <div className={`${styles.input_group} ${formik.errors.cpassword && formik.touched.cpassword ? "border-rose-800" : ""}`}>
                        <input type={`${show.cpassword ? "text" : "password"}`} name="cpassword" placeholder="Confirm Password" className={styles.input_text} {...formik.getFieldProps('cpassword')} />
                        <span className="icon flex items-center px-4" onClick={() => setShow({ ...show, cpassword: !show.cpassword })}>
                            <HiFingerPrint size={25} />
                        </span>
                    </div>
                    {formik.errors.cpassword && formik.touched.cpassword ? <span className="text-sm font-light text-rose-600">{formik.errors.cpassword}</span> : <></>}


                    {/* login buttons */}
                    <div className="input-button">
                        <button type="submit" className={styles.button}>Register</button>
                    </div>
                </form>
                {/* bottom */}
                <p className="text-center text-gray-800">got an account already?<Link href={"/login"} className="text-green-800"> Login</Link></p>
            </section>
        </Layout>
    )
}