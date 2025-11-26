function Frameworks(){
    return(
        <div className="mt-[150px]">
            <h1 className="text-3xl font-bold text-center">Framework yang Pernah Digunakan</h1>
            <div className="mt-[85px] grid grid-flow-col grid-col-2 gap-10 justify-center">
                <div className="w-[270px] h-[300px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30">
                    <img src="/VSCode.png" alt="" width="120px" />
                    <h1 className="text-white text-2xl font-semibold">VSCode</h1>
                </div>
                <div className="w-[270px] h-[300px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30">
                    <img src="/CSS.png" alt="" width="140px"/>
                    <h1 className="text-white text-2xl font-semibold">CSS</h1>
                </div>
                <div className="w-[270px] h-[300px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30">
                    <img src="/Tailwind.png" alt="" width="140px"/>
                    <h1 className="text-white text-2xl font-semibold">Tailwind CSS</h1>
                </div>
            </div>
            <div className="mt-[85px] grid grid-flow-col grid-col-2 gap-10 justify-center">
                <div className="w-[270px] h-[300px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30">
                    <img src="/ReactJS.png" alt="" width="120px" />
                    <h1 className="text-white text-2xl font-semibold">React JS</h1>
                </div>
                <div className="w-[270px] h-[300px] bg-[#295F98] rounded-[12px] flex flex-col justify-center items-center gap-10 shadow-xl/30">
                    <img src="/figma.png" alt="" width="120px" />
                    <h1 className="text-white text-2xl font-semibold">Figma</h1>
                </div>
            </div>
        </div>
    )
}

export default Frameworks;