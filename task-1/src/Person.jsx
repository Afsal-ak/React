import './App.css'

function Person(props){
   
    const detailList = props.detail
    let listDetails = detailList.map((detail) =>
        <div className="detail" key={detail.id}>
            <h2>{`Name:${detail.name}`}</h2>
            <p className='email'>{`Email:${detail.email}`}</p>
        </div>
    )

    return(
        <>
           {listDetails}
        </>
    )
}

export default Person