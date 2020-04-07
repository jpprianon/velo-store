import React from 'react'
import Title from '../Title'

export default function Contact() {
    return (
        <section className="py-5">
            <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                    <Title title="contact"></Title>
                    <form className="mt-5" action="https://formspree.io/your@email.com" method="POST">
                        {/* first */}
                        <div className="form-group">
                            <input 
                            type="text" 
                            name="Nom" 
                            className="form-control"
                            placeholder="john payet" 

                            />
                        </div>
                        {/* email */}
                        <div className="form-group">
                            <input 
                            type="email" 
                            name="email" 
                            className="form-control"
                            placeholder="email@email.com" 
                            
                            />
                        </div>
                        {/* subject */}
                        <div className="form-group">
                            <input 
                            type="text" 
                            name="subjet" 
                            className="form-control"
                            placeholder="import!!!!" 
                            
                            />
                        </div>
                       {/* message */}
                       <div className="form">
                            <textarea name="message" 
                            className="form-control"
                            rows="10"
                            placeholder="Bonjour "
                            

                            />
                       </div>
                       <div className="form-group mt-3">
                           <input type="submit" 
                           value="Envoyer" 
                           className="form-control bg-primary text-white"></input>
                       </div>
                    </form>
                </div>
            </div>
        </section>
    )
}
