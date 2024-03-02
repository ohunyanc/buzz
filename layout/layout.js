
import styles from '../styles/Layout.module.css'


export default function Layout({ children }) {
    return (
        <div className="flex h-auto p-2 md:p-4">
            <div className="m-auto bg-slate-50 rounded-md w-4/5 md:w-3/5 h-5/5 grid lg:grid-cols-2 border border-emerald-500">
                <div className={styles.imgStyle}>
                    <div>
                        <h3 className='text-gray-600 text-xl font-bold py-16 text-center items-center tracking-tighter'>Welcome! Gain access to use Application</h3>
                    </div>
                </div>
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center py-10">
                        {children}
                    </div>
                </div>
            </div>

        </div>
    )
}