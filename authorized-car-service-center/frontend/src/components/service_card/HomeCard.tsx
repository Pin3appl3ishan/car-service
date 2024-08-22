import "./HomeCard.css"

const HomeCard = () => {

    return(
        <>
            <div className="card-body flex shadow-md">
                <div className="photo-container w-full">
                    <img className="w-full h-full object-cover"  src={require('./opona.jpg')} alt="" />
                </div>
                <div className="information-container flex items-start justify-evenly flex-col">
                    <p className="text-3xl">Change the tire</p>
                    <p>More information ⮞</p>
                </div>
            </div>
        </>
    )

}
export default HomeCard;