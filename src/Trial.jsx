import "./Trial.css"
function Trial(actors){
    return(
        <>
        <div className="actor">
        <img className="act" src={actors.img.src} alt={actors.img.alt} />
       
        <h3>{actors.name}</h3>
        <p>{actors.age}</p>
         </div>
        
        </>
    )
}
export default Trial