import footerStyles from "./footer.module.css"

export default function Footer(){
    return (        
        <div className={footerStyles.container}>
            <section>
                <p>I am footer component</p>
            </section>
        </div>    
    )
}