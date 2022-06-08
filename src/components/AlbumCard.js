import '../styles/AlbumCard.css'

const AlbumCard = ({album, artist, artWork, releaseDate, trackCount, display}) => {
    return (
        <div className={`card m-5 ${display?'horizontalCard flex-row justify-content-center':''}`}>      
                <div className={`card-body ${display?'horizontalCardBody':''}`} >
                <img className="card-img-top " src={artWork} alt="Card cap" />
                    <h5 className="card-title">{artist}</h5>
                </div>
                <ul className={`list-group list-group-flush ${display?'horizontalList-group-flush':''}`}>
                    <li className={`list-group-item text-light ${display?'horizontalList-group-item':''}`} style={{background: "#353839"}}>{album}</li>
                    <li className={`list-group-item text-light text-muted ${display?'horizontalList-group-item':''}`}  style={{background: "#353839"}}>{releaseDate.slice(0,4)}</li>
                    <li className={`list-group-item text-light text-muted ${display?'horizontalList-group-item':''}`}  style={{background: "#353839"}}>Tracks:{"  " + trackCount}</li>
                </ul>
        </div>
    )
}

export default AlbumCard