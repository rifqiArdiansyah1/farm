import Image from "next/image"
import irene from "../utilities/irene-davila-m8KpeYUChIA-unsplash (1).jpg";


const Card = () => {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-3 gridcols-2 gap-4 p-4" >
            <div className=" box-border rounded shadow-2xl">
                <Image
                    src={irene}
                    width={500}
                    height={500}
                    alt="green"
                    className="rounded"
                ></Image>
                <div className="p-2">
                    <h3>Header</h3>
                    <p>Deskripsi Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className=" box-border rounded shadow-2xl">
                <Image
                    src={irene}
                    width={500}
                    height={500}
                    alt="green"
                    className="rounded"
                ></Image>
                <div className="p-2">
                    <h3>Header</h3>
                    <p>Deskripsi Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className=" box-border rounded shadow-2xl">
                <Image
                    src={irene}
                    width={500}
                    height={500}
                    alt="green"
                    className="rounded"
                ></Image>
                <div className="p-2">
                    <h3>Header</h3>
                    <p>Deskripsi Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className=" box-border rounded shadow-2xl">
                <Image
                    src={irene}
                    width={500}
                    height={500}
                    alt="green"
                    className="rounded"
                ></Image>
                <div className="p-2">
                    <h3>Header</h3>
                    <p>Deskripsi Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className=" box-border rounded shadow-2xl">
                <Image
                    src={irene}
                    width={500}
                    height={500}
                    alt="green"
                    className="rounded"
                ></Image>
                <div className="p-2">
                    <h3>Header</h3>
                    <p>Deskripsi Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
            <div className=" box-border rounded shadow-2xl">
                <Image
                    src={irene}
                    width={500}
                    height={500}
                    alt="green"
                    className="rounded"
                ></Image>
                <div className="p-2">
                    <h3>Header</h3>
                    <p>Deskripsi Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default Card;