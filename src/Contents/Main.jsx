
import UserData from '../Data/UserData'
import UserComponent from '../Components/ProfileCard'
function Main() {
    const UserElements = UserData.map(data => {

        return(

            <UserComponent
                key={data.id}
                {...data}
            />
        )
    })
  return (
    <div>
        {UserElements}
    </div>
  )
}

export default Main