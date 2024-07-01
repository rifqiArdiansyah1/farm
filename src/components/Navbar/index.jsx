import Magnifying from "../utilities/Magnifying";

const Navbar = () => {
    return (
        <header>
            <div className="flex md:flex-row md:items-center flex-col p-2 bg-white shadow-xl">
                <div className="flex p-2 md:justify-start justify-center text-2xl items-center basis-1/4">
                    <strong className="text-bold">In</strong>
                    <span className="italic underline underline-offset-4 decoration-color-accent px-0.5">Farm</span>
                </div>

                <div className="flex text-xl bg-color-white justify-center items-center gap-4 basis-1/2">
                    <a href="" className="hover:underline underline-offset-8 decoration-color-accent transition-all duration-800">About</a>
                    <a href="" className="hover:underline underline-offset-8 decoration-color-accent transition-all duration-800">Home</a>
                    <a href="" className="hover:underline underline-offset-8 decoration-color-accent transition-all duration-800">Contact Me</a>
                </div>
                {/* tambahan */}
                <div className="flex basis-1/4 justify-end items-center">
                <Magnifying/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;