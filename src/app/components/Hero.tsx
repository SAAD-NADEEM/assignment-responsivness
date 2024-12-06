import Image from "next/image";

function Hero() {

    return (
        <section className="flex lg:flex-row flex-col h-5/6 w-5/6 rounded-md bg-red-300">
            <div className="lg:w-2/4 lg:h-auto sm:h-1/2 m-auto flex justify-end">
                <div className="lg:w-3/4 lg:p-0 px-4">
                    <h1 className="font-extrabold text-2xl lg:text-4xl">GIAIC CLASS TUESDAY</h1>
                    <p className="font-semibold text-sm lg:text-base lg:my-3 my-1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis id deleniti quis, assumenda sequi quisquam illo velit totam beatae sunt iusto necessitatibus itaque! Earum, sequi repudiandae dolores iusto iste dolorem!</p>
                    <button className="bg-black text-red-800 text-base lg:text-xl py-1 px-3 lg:px-5 rounded-lg">
                        AI Button
                    </button>
                </div>
            </div>
            <div className="w-2/4 m-auto">
                <Image className="m-auto" src={'/hero-logo.png'}
                    alt="Just a hero image"
                    width={300}
                    height={300}
                />
            </div>
        </section>
    );
};

export default Hero;