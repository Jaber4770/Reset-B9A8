

const Banner = () => {
    return (
        <div className="flex bg-gray-100 p-5 items-center rounded-3xl justify-between px-40">
            <div>
                <h1 className="text-6xl text-black playfair font-bold leading-tight">Books to freshen up <br /> your bookshelf</h1>
                <button className="mt-10 px-3 py-2 bg-[#23BE0A] text-white font-semibold rounded-lg">View The List</button>
            </div>
            <img src="https://i.ibb.co/dDBGmV6/876058-removebg-preview.png" alt="" />
        </div>
    );
};

export default Banner;