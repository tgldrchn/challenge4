const Content = ({headerImage, title, text, image, firstName, lastName, date}) =>{
    return(
        <div>
            <img className="header" src={headerImage} alt="" />
            <div className="main">
                <p className="title">{title}</p>
                <div className="text">{text}</div>
            </div>
            <div className="profileTwo">
                <div className="miniProfile">
                <img src={image} alt={lastName} className="img"/>
                <div className="nameTwo">{firstName}{"  "}{lastName}</div>
                <div className="date">{date}</div>
                </div>
            </div>
        </div>
    )
}

export default Content