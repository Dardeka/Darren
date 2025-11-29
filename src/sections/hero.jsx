import { Button } from "../components/ui/button";

function Hero() {

    const handleDownloadCV = () => {
        const fileUrl = "https://drive.google.com/file/d/1Yla-FDB04Hr7jjWuiks_j710iXbIg7bR/view?usp=sharing"
        const fileName = "Darren Dharmasaputra Kwariawan_CV.pdf"
        window.open(fileUrl, '_blank');
    }

    return (
        <section id="Hero" className="pt-[160px] flex flex-row pl-[95px] pr-[129px] pb-[75px] justify-center items-center">
            <div className="flex flex-col mr-[70px]">
                <h1 className="text-2xl font-semibold">Halo,</h1>
                <h1 className="text-2xl font-semibold">Saya Darren Dharmasaputra K.</h1>
                <br />
                <p className="w-[580px] max-w-[730px] text-base">Mahasiswa semester 5 program studi Ilmu Komputer di Universitas Negeri Jakarta dengan minat kuat dalam bidang pengembangan Front-end. Pada tahun ini, saya memiliki pengalaman dalam mempelajari dan mempraktikkan pengembangan tampilan website melalui proyek pribadi dan proyek akademik. Berkomitmen untuk mengembangkan kemampuan teknis dan mencari peluang dalam proyek pengembangan website.</p>
                <br />
                <div className="w-[500px] flex flex-row justify-between">
                    <Button id="download-cv" onClick={handleDownloadCV} className="!bg-[#3AB0FF] font-semibold w-[232px] h-[63px] text-xl text-white shadow-xl/20 cursor-pointer hover:!bg-[#37A1E9]">
                        <img src="/downloadIcon.png" alt="" />
                        Lihat CV
                    </Button>
                </div>
            </div>
            <img className="ml-[141px]" src="/Profile-img.png" alt="" width="348px"/>
        </section>
    );
}

export default Hero;