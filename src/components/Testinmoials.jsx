import Star from "./star"


const Testimonials = ({image, firstName, lastName, paragraph, star}) => {
    return (
        <div>
            
            {
                star.map(e => {
                    return (
                        <Star />
                    )
                })
            }
            <p className="paragraph">{paragraph}</p>
            <div className="profile">
                <img src={image} alt={lastName} className="img"/>
                <div className="name">{firstName}{"  "}{lastName}</div>
            </div>
        </div>
    )
}

export default Testimonials