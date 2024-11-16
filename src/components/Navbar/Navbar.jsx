export default function Navbar() {
    return (
        <section className='flex justify-between px-8 py-5'>
            <h2 className='text-2xl font-semibold font-mono'>Pictura</h2>

            <ul className='flex items-center gap-x-5'>
                <li>Saved</li>
                <button>Login</button>
            </ul>
        </section>
    );
}
