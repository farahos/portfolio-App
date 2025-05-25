import React from "react";
const Contact = () =>{
    return (
        <>
       <section id="contact" className="py-16 px-6 bg-gray-100 mt-10">
        <div className="max-w-xl mx-auto text-center">
            <h2 className="text-center text-blue-700 font-bold text-3xl mb-6 ">Contact Me</h2>
            <p className="text-lg text-gray-700 mb-6">Feel free to reach out for collaborations, 
                projects, or just to say hello.
            </p>
            <div className="text-gray-800 space-y-4">
                <p><span className="font-semibold">Email</span> farahugaas0@gmail.com</p>
                <p><span className="font-semibold">Phone</span> +252619964951</p>
                <p>
                    <span className="font-semibold">GitHub</span>{""}
                    <a href="https://github.com/farah" className="text-blue-600 hover:underline "> github.com/farah</a>
                </p>
                <p>
                    <span className="font-semibold">LinkedIn</span>{""}
                    <a href="https://linkedin.com/in/farah" className="text-blue-600 hover:underline "> linkedin.com/in/farah</a>
                </p>
            </div>
        </div>
       </section>
        </>
    )
}
export default Contact