import footerStyles from "./footer.module.css"

export default function Footer(){
    return (        
        <div className={footerStyles.container}>
            <section className={footerStyles.section}>
                I am footer component new
            </section>
        </div>    
    )
}