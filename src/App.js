import UserProfile from './components/userProfile'
import AlexaImage_1 from './images/alexa.png';
import CortanaImage_1 from './images/cortana.png';
import SiriImage_1 from './images/siri.png';
const userDetailsList=[
    {
        uniqueNo:1,
    imageUrl:{AlexaImage_1},
    name_1:"Ravi Teja",
    Role:"Web Developer"
},
{
    uniqueNo:2,
    imageUrl:{CortanaImage_1},
    name_1:"Eswar",
    Role:"Full Stack"
},
{
    uniqueNo:3,
    imageUrl:{SiriImage_1},
    name_1:"Manish",
    Role:"Devops"
},
{
    uniqueNo:4,
    imageUrl:{AlexaImage_1},
    name_1:"Kautham",
    Role:"HardWare"
}
]


const App=()=>{
    return (
        <div className='list-container'>
            <h1 className='title'>Users List</h1>
            <ul>
                {/* userProfile userDetails={userDetailsList[0]}
                userProfile userDetails={userDetailsList[1]}
                userProfile userDetails={userDetailsList[2]}
                userProfile userDetails={userDetailsList[3]} */}
                {userDetailsList.map((eachItem)=>
                    <UserProfile userDetails={eachItem} key={eachItem.uniqueNo}/>
                )}

            </ul>
        </div>
    )
}
export default App