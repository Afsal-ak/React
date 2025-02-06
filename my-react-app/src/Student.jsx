import propTypes, { number, string } from 'prop-types'

function Student(props){
    return(
        <div>
            <p>name:{props.name}</p>
            <p>age:{props.age}</p>
            <p>isStudent:{props.isStudent ?"yes":'No'}</p>


        </div>
    )
}

Student.propTypes={
    name:propTypes.string,
    age:propTypes.number,
}

export default Student