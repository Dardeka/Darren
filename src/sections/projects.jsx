import { Button } from "../components/ui/button";

function Projects(){
    return(
        <div className="mt-[146px] mx-[98px]">
            <h1 className="text-3xl text-center font-bold mb-[85px]">Proyek Saya</h1>
            {/* Gaskeeun */}
            <div className="flex flex-row bg-[#295F98] w-[656px] h-[266px] py-[35px] px-[38px] rounded-[12px] gap-8 mb-[85px]  shadow-xl/30">
                <img src="/Gaskeeun-preview.png" alt="Gaskeeun Preview" width="198px" height="198px"/>
                <div className="flex flex-col text-white mt-auto mb-auto">
                    <h5 className="w-[124px] h-[28px] p-2 text-base flex items-center rounded-[5px] bg-[#3AB0FF] text-white font-semibold self-end">Proyek Kuliah</h5>
                    <h2 className="text-2xl font-bold mb-[5px]">Gaskeeun</h2>
                    <p className="text-sm text-justify">Gaskeeun adalah sebuah platform peminjaman lapangan olahraga. Website ini  dibangun dengan menggunakan framework ReactJS dan Tailwind CSS untuk pengembangan Front-end website.</p>
                    <Button onClick={() => window.open("https://github.com/Dardeka/Bingkizz.in_Web.git")} className="bg-[#3AB0FF] text-xs w-[155px] h-[35px] mt-[12px] shadow-lg/30 hover:bg-[#1396F6] cursor-pointer"><img src="/github.png" alt="" width="25px" />Repo Git</Button>
                </div>
            </div>
            {/* Bingkizz.In */}
            <div className="flex flex-row bg-[#295F98] w-[656px] h-[266px] py-[35px] px-[38px] rounded-[12px] gap-8 ml-auto mb-[85px] shadow-xl/30">
                <img src="/BingkizzIn-web.png" alt="Bingkizz.In Preview" className="w-[280px] h-[120px] mt-auto mb-auto"/>
                <div className="flex flex-col text-white mt-auto mb-auto">
                    <h5 className="w-[124px] h-[28px] p-2 text-base flex items-center rounded-[5px] bg-[#3AB0FF] text-white font-semibold self-end">Proyek Kuliah</h5>
                    <h2 className="text-2xl font-bold mb-[5px]">Bingkizz.In</h2>
                    <p className="text-xs text-justify">Bingkizz.in adalah sebuah platform e-commerce yang menjual berbagai jenis hampers. Website ini dibangun dengan menggunakan React JS dan Tailwind CSS pada bagian Front-End website serta menggunakan Express JS untuk bagian Back-End dan MongoDB sebagai database.</p>
                    <div className="flex flex-row gap-4 mt-[12px]">
                        <Button onClick={() => window.open("https://bingkizzin.vercel.app/")} className="bg-[#3AB0FF] text-xs w-[155px] h-[35px] shadow-lg/30 hover:bg-[#1396F6] cursor-pointer"><img src="/web.png" alt="" width="20px" />Lihat Website</Button>
                        <Button onClick={() => window.open("https://github.com/Dardeka/Bingkizz.in_Web.git")} className="bg-[#3AB0FF] text-xs w-[155px] h-[35px] shadow-lg/30 hover:bg-[#1396F6] cursor-pointer"><img src="/github.png" alt="" width="25px" />Repo Git</Button>
                    </div>
                </div>
            </div>
            {/* Flow Note */}
            <div className="flex flex-row bg-[#295F98] w-[656px] h-[266px] py-[35px] px-[38px] rounded-[12px] gap-8 mb-[85px] shadow-xl/30">
                <img src="/Flownote-preview.png" alt="FlowNote Preview" width="198px"/>
                <div className="flex flex-col text-white mt-auto mb-auto">
                    <h5 className="w-[124px] h-[28px] p-2 text-sm flex justify-center items-center rounded-[5px] mb-[15px] bg-[#3AB0FF] text-white font-semibold self-end">Proyek Pribadi</h5>
                    <h2 className="text-2xl font-bold mb-[5px]">landing Page FlowNote</h2>
                    <p className="text-xs text-justify">FlowNote adalah sebuah proyek dummy berupa landing page pengenalan aplikasi pencatat berbasis AI yang membantu pengguna tetap fokus, produktif, dan terorganisir melalui pengelolaan tugas dan wawasan harian.</p>
                    <div className="flex flex-row gap-4 mt-[12px]">
                        <Button onClick={() => window.open("https://flownote-landingpage.vercel.app/")} className="bg-[#3AB0FF] text-xs w-[155px] h-[35px] shadow-lg/30 hover:bg-[#1396F6] cursor-pointer"><img src="/web.png" alt="" width="20px" />Lihat Demo Website</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;