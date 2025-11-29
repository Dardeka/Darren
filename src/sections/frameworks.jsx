function Frameworks(){
    return(
        <section id="Frameworks" className="pt-[150px]" >
            <div>
                <h1 className="text-3xl font-bold text-center">Teknologi yang Pernah Digunakan</h1>
                {/* Row 1 */}
                <div className="mt-[85px] grid grid-flow-col grid-col-2 gap-10 justify-center">
                    <div className="w-[225px] h-[275px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30" data-aos="fade-up" data-aos-duration="750">
                        <img src="/html.png" alt="" width="100px" />
                        <h1 className="text-white text-2xl font-semibold">HTML</h1>
                    </div>
                    <div className="w-[225px] h-[275px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30" data-aos="fade-up" data-aos-duration="1500">
                        <img src="/CSS.png" alt="" width="100px"/>
                        <h1 className="text-white text-2xl font-semibold">CSS</h1>
                    </div>
                    <div className="w-[225px] h-[275px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30" data-aos="fade-up" data-aos-duration="2250">
                        <img src="/js.png" alt="" width="100px"/>
                        <h1 className="text-white text-2xl font-semibold">JavaScript</h1>
                    </div>
                    <div className="w-[225px] h-[275px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30" data-aos="fade-up" data-aos-duration="2900">
                        <img src="/ReactJS.png" alt="" width="100px" />
                        <h1 className="text-white text-2xl font-semibold">React</h1>
                    </div>
                </div>
                {/* Row 2 */}
                <div className="mt-[85px] grid grid-flow-col grid-col-2 gap-10 justify-center">
                    <div className="w-[225px] h-[275px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30" data-aos="fade-up" data-aos-duration="750">
                        <img src="/vite.png" alt="" width="100px" />
                        <h1 className="text-white text-2xl font-semibold">Vite</h1>
                    </div>
                    <div className="w-[225px] h-[275px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30" data-aos="fade-up" data-aos-duration="1500">
                        <img src="/Tailwind.png" alt="" width="100px" />
                        <h1 className="text-white text-2xl font-semibold">Tailwind CSS</h1>
                    </div>
                    <div className="w-[225px] h-[275px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30" data-aos="fade-up" data-aos-duration="2250">
                        <img src="/express.png" alt="" width="100px" />
                        <h1 className="text-white text-2xl font-semibold">ExpressJS </h1>
                    </div>
                    <div className="w-[225px] h-[275px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30" data-aos="fade-up" data-aos-duration="2900">
                        <img src="/mongodb.png" alt="" width="100px" />
                        <h1 className="text-white text-2xl font-semibold">MongoDB</h1>
                    </div>
                </div>
                {/* Row 3 */}
                <div className="mt-[85px] grid grid-flow-col grid-col-2 gap-10 justify-center">
                    <div className="w-[225px] h-[275px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30" data-aos="fade-up" data-aos-duration="750">
                        <img src="/mysql.png" alt="" width="100px" />
                        <h1 className="text-white text-2xl font-semibold">MySQL</h1>
                    </div>
                    <div className="w-[225px] h-[275px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30" data-aos="fade-up" data-aos-duration="1500">
                        <img src="/git.png" alt="" width="100px" />
                        <h1 className="text-white text-2xl font-semibold">Git</h1>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Frameworks;