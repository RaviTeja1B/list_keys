//Create components/UserProfile folder to place the UserProfile Component
//UserProfile Component

import './index.css'
const UserProfile=(props)=>{
    const{userDetails}=props
    const{imageUrl,name_1,Role}=userDetails
    return (<div className='user-card-container'>
                <img src={imageUrl} className="avatar" alt='naturImage'/>
             <div className='user-details-container'>
                <h1 className='user-name'>
                    {name_1}
                </h1>
             </div>
                <p className='user-designation'>
                    {Role}
                </p>
            </div>)
} 
export default UserProfile