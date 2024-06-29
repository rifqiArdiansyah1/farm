const Navbar = () => {
    return (
        <header>
            <navbar className="flex flex-row p-2 border-b-2 border-indigo-500/75">
                <div className="flex text-2xl item-center justify-start basis-1/4">
                    <strong className="text-bold">In</strong>
                    <span className="italic underline underline-offset-4 decoration-color-current px-0.5">Farm</span>
                </div>

                <div className="flex text-xl bg-color-white justify-center items-center gap-4 basis-1/2">
                    <a href="" className="hover:underline underline-offset-8 decoration-color-current transition-all duration-800">About</a>
                    <a href="" className="hover:underline underline-offset-8 decoration-color-current transition-all duration-800">Home</a>
                    <a href="" className="hover:underline underline-offset-8 decoration-color-current transition-all duration-800">Contact Me</a>
                </div>
                {/* tambahan */}
                <div className="basis-1/4">

                </div>
            </navbar>
        </header>
    )
}

export default Navbar;