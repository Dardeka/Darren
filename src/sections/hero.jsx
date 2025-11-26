import { Button } from "../components/ui/button";

function Hero() {
    return (
        <section className="pt-[160px] flex flex-row pl-[95px] pr-[129px] justify-center items-center">
            <div className="flex flex-col">
                <h1 className="text-2xl font-semibold">Halo,</h1>
                <h1 className="text-2xl font-semibold">Saya Darren Dharmasaputra K.</h1>
                <br />
                <p className="w-[px] max-w-[730px] text-base">Seorang mahasiswa aktif semester 5 program studi Ilmu Komputer di Universitas Negeri Jakarta yang memiliki minat dalam bidang pengembangan website, khususnya pada bidang Front-end Development. Minat ini telah dikembangkan selama 1 tahun melalui pengerjaan beberapa proyek, baik proyek pribadi maupun tugas perkuliahan.</p>
                <br />
                <div className="w-[500px] flex flex-row justify-between">
                    <Button className="!bg-[#3AB0FF] font-semibold text-black w-[232px] h-[63px] text-xl shadow-xl/20 cursor-pointer hover:!bg-[#37A1E9]">Unduh CV</Button>
                    <Button className="!bg-[#3AB0FF] font-semibold text-black w-[232px] h-[63px] text-xl shadow-xl/20 cursor-pointer hover:!bg-[#37A1E9]">Lihat Proyek</Button>
                </div>
            </div>
            <img className="ml-[141px]" src="/Profile-img.png" alt="" width="348px"/>
        </section>
    );
}

export default Hero;