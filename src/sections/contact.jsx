import { Button } from "../components/ui/button";

function Contact() {
    return(
        <section id="Contact" className="pt-[150px] mb-[150px] flex flex-col items-center" data-aos="fade-up" data-aos-duration="750">
            <h2 className="text-3xl font-bold">Hubungi saya via :</h2>
            <div className="flex flex-row mt-10 py-7 gap-20 items-center" >
                <div>
                    <Button onClick={() => handleClick("https://www.linkedin.com/in/darren-dk")} className="!bg-transparent !text-black flex flex-row items-center gap-5 py-7 text-xl font-bold cursor-pointer rounded-none border-b-0 border-transparent hover:border-b-2 hover:border-gray-500" data-aos="fade-up" data-aos-duration="750">
                        <img src="/linkedin.png" alt="" width="35px"/>
                        Darren Dharmasaputra Kwariawan
                    </Button>
                </div>
                <div className="">
                    <Button onClick={() => handleClick("https://github.com/Dardeka")} className="!bg-transparent !text-black flex flex-row items-center gap-5 py-7 text-xl font-bold cursor-pointer border-b-2 border-transparent rounded-none border-b-0 border-transparent hover:border-b-2 hover:border-gray-500" data-aos="fade-up" data-aos-duration="1000">
                        <img src="/github.png" alt="" width="35px"/>
                        Dardeka
                    </Button>
                </div>
                <div className="">
                    <Button onClick={() => handleClick("https://mail.google.com/mail/u/0/#inbox?compose=CllgCKCCSDqXkXtBvQhswtzkrHcTfndfwkVTPdXMCCxkXVsmmWsJdmKknBwNqlCXSbdcJTbBNpL")} className="!bg-transparent !text-black flex flex-row items-center gap-5 py-7 text-xl font-bold cursor-pointer rounded-none border-b-0 border-transparent hover:border-b-2 hover:border-gray-500" data-aos="fade-up" data-aos-duration="1250">
                        <img src="/gmail.png" alt="" width="35px"/>
                        ddkwarii@gmail.com
                    </Button>
                </div>
            </div>
        </section>
    )
}

function handleClick(props){
    window.open(props, '_blank');
}

export default Contact;