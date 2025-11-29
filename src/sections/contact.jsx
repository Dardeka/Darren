function Contact() {
    return(
        <section id="Contact" className="pt-[150px] mb-[150px] flex flex-col items-center" data-aos="fade-up" data-aos-duration="750">
            <h2 className="text-3xl font-bold">Hubungi saya via :</h2>
            <div className="flex flex-row mt-20 gap-20 items-center">
                <a href="www.linkedin.com/in/darren-dk" className="flex flex-row items-center gap-5 text-xl font-bold">
                    <img src="/linkedin.png" alt="" width="35px"/>
                    Darren Dharmasaputra Kwariawan
                </a>
                <a href="www.linkedin.com/in/darren-dk" className="flex flex-row items-center gap-5 text-xl font-bold">
                    <img src="/github.png" alt="" width="35px"/>
                    Dardeka
                </a>
                <a href="www.linkedin.com/in/darren-dk" className="flex flex-row items-center gap-5 text-xl font-bold">
                    <img src="/gmail.png" alt="" width="35px"/>
                    ddkwarii@gmail.com
                </a>
            </div>
        </section>
    )
}

export default Contact;