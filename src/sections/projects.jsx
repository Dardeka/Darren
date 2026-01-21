import { Button } from "../components/ui/button";

function Projects(){
    return(
        <section id="Project" className="pt-[146px] sm:mx-[50px] md:mx-[98px] xl:mx-[150px] 2xl:mx-[200px] items-center" >
            <div>
                <h1 className="text-3xl text-center font-bold mb-[85px]">Proyek Saya</h1>
                {/* Gaskeeun */}
                <div className="flex flex-row bg-[#295F98] w-[656px] h-[300px] py-[35px] px-[38px] rounded-[12px] gap-8 mb-[85px]  shadow-xl/30" data-aos="fade-up" data-aos-duration="750">
                    <img src="/Gaskeeun-preview.png" alt="Gaskeeun Preview" width="250px" height="50px"/>
                    <div className="flex flex-col text-white mt-auto mb-auto">
                        <div className="flex flex-row gap-4 mb-[15px] ml-auto">
                            <h5 className="w-[124px] h-[28px] p-2 text-base flex items-center rounded-[5px] bg-[#3AB0FF] text-white font-semibold self-end">Front-end Dev</h5>
                            <h5 className="w-[124px] h-[28px] p-2 text-base flex items-center rounded-[5px] bg-[#3AB0FF] text-white font-semibold self-end">Proyek Kuliah</h5>
                        </div>
                        <h2 className="text-2xl font-bold mb-[5px]">Gaskeeun</h2>
                        <p className="text-sm text-justify">Gaskeeun adalah sebuah platform peminjaman lapangan olahraga. Website ini  dibangun dengan menggunakan framework ReactJS dan Tailwind CSS untuk pengembangan Front-end website.</p>
                        <Button onClick={() => window.open("https://github.com/Dardeka/Bingkizz.in_Web.git")} className="bg-[#3AB0FF] text-xs w-[155px] h-[35px] mt-[12px] shadow-lg/30 hover:bg-[#1396F6] cursor-pointer"><img src="/github.png" alt="" width="25px" />Repo Git</Button>
                    </div>
                </div>
                {/* Bingkizz.In */}
                <div className="flex flex-row bg-[#295F98] w-[656px] h-[300px] py-[35px] px-[38px] rounded-[12px] gap-8 ml-auto mb-[85px] shadow-xl/30"  data-aos="fade-up" data-aos-duration="750">
                    <img src="/BingkizzIn-web.png" alt="Bingkizz.In Preview" className="w-[280px] h-[120px] mt-auto mb-auto"/>
                    <div className="flex flex-col text-white mt-auto mb-auto">
                        <div className="flex flex-row gap-4 mb-[15px] ml-auto">
                            <h5 className="w-[124px] h-[28px] p-2 text-base flex items-center rounded-[5px] bg-[#3AB0FF] text-white font-semibold self-end">Full-Stack Dev</h5>
                            <h5 className="w-[124px] h-[28px] p-2 text-base flex items-center rounded-[5px] bg-[#3AB0FF] text-white font-semibold self-end">Proyek Kuliah</h5>
                        </div>
                        <h2 className="text-2xl font-bold mb-[5px]">Bingkizz.In</h2>
                        <p className="text-xs text-justify">Bingkizz.in adalah sebuah platform e-commerce yang menjual berbagai jenis hampers. Website ini dibangun dengan menggunakan React JS dan Tailwind CSS pada bagian Front-End website serta menggunakan Express JS untuk bagian Back-End dan MongoDB sebagai database.</p>
                        <div className="flex flex-row gap-4 mt-[12px]">
                            <Button onClick={() => window.open("https://bingkizzin.vercel.app/")} className="bg-[#3AB0FF] text-xs w-[155px] h-[35px] shadow-lg/30 hover:bg-[#1396F6] cursor-pointer"><img src="/web.png" alt="" width="20px" />Lihat Website</Button>
                            <Button onClick={() => window.open("https://github.com/Dardeka/Bingkizz.in_Web.git")} className="bg-[#3AB0FF] text-xs w-[155px] h-[35px] shadow-lg/30 hover:bg-[#1396F6] cursor-pointer"><img src="/github.png" alt="" width="25px" />Repo Git</Button>
                        </div>
                    </div>
                </div>
                {/* Flow Note */}
                <div className="flex flex-row bg-[#295F98] w-[656px] h-[300px] py-[35px] px-[38px] rounded-[12px] gap-8 mb-[85px] shadow-xl/30" data-aos="fade-up" data-aos-duration="750">
                    <img src="/Flownote-preview.png" alt="FlowNote Preview" width="198px"/>
                    <div className="flex flex-col text-white mt-auto mb-auto">
                        <div className="flex flex-row gap-4 mb-[15px] ml-auto">
                            <h5 className="w-[124px] h-[28px] p-2 text-base flex items-center rounded-[5px] bg-[#3AB0FF] text-white font-semibold self-end">Front-end Dev</h5>
                            <h5 className="w-[124px] h-[28px] p-2 text-base flex items-center rounded-[5px] bg-[#3AB0FF] text-white font-semibold self-end">Proyek Pribadi</h5>
                        </div>
                        <h2 className="text-2xl font-bold mb-[5px]">Landing Page FlowNote</h2>
                        <p className="text-xs text-justify">FlowNote adalah sebuah proyek dummy berupa landing page pengenalan aplikasi pencatat berbasis AI yang membantu pengguna tetap fokus, produktif, dan terorganisir melalui pengelolaan tugas dan wawasan harian.</p>
                        <div className="flex flex-row gap-4 mt-[12px]">
                            <Button onClick={() => window.open("https://flownote-landingpage.vercel.app/")} className="bg-[#3AB0FF] text-xs w-[155px] h-[35px] shadow-lg/30 hover:bg-[#1396F6] cursor-pointer"><img src="/web.png" alt="" width="20px" />Lihat Demo Website</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;