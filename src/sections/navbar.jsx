import { Button } from "../components/ui/button";

function Navbar(){
    return (
        <div className="flex flex-row items-center justify-between w-screen px-[65px] max-px-[95px] h-[100px] bg-[#295F98] text-white text-xl shadow-xl/20 fixed top-0">
            <h1 className="font-bold">Darren DK</h1>
            <div className="min-w-[400px] max-w-[500px] flex flex-row justify-between">
                <Button className="!bg-transparent rounded-none"><a href="#" className="text-lg">Beranda</a></Button>
                <Button className="!bg-transparent rounded-none"><a href="#" className="text-lg">Tentang</a></Button>
                <Button className="!bg-transparent rounded-none"><a href="#" className="text-lg">Proyek</a></Button>
                <Button className="!bg-transparent rounded-none"><a href="#" className="text-lg">Kontak</a></Button>
            </div>
        </div>
    )
}

export default Navbar;