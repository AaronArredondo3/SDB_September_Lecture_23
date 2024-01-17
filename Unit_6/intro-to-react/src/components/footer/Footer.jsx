function Footer() {

    const date = new Date().getFullYear();
    
    return(
            <h6>
                copyright: {date} &copy;
            </h6>
    )
}

export default Footer;