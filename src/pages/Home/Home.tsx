import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logofull.png'
import createBlog from '../../assets/create_blog.png'
import TypingAnimator from 'react-typing-animator'
import { FaGoogle } from 'react-icons/fa'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { useCreateUserMutation } from '../../features/users/UserApi'
import { useAppDispatch } from '../../store/hook'
import { authUser } from '../../features/users/userSlice'
import { backgroundStyles } from '../../utils/cssutils'
import { typingBackground } from '../../utils/cssutils'


const Home = () => {
  return (
    <div style={{ ...backgroundStyles }}>
      <Header/>
      <Body/>
    </div>
  )
}



const Header = () => (
  <nav className="flex justify-between items-center p-4 mx-4">
    <Link to='/'>
      <img src={logo} alt="logo" className='w-20 h-20'/>
    </Link>
    <div className='flex items-center gap-4 text-sm text-gray-500 px-4'>
      <Link to='/'>About</Link>
      <Link to='/'>Feature</Link>
      <Link to='/'>Stories</Link>
    </div>
  </nav>
)



  const textArray = ['Create your local news blog today','Create your youtube class blog','Create your portfolio blog','Create your community blog']


const Body = () =>  {
  const [createUser, {  data:userData, isLoading,isError}] = useCreateUserMutation({
    fixedCacheKey: 'mySharedKey'
  });
  const dispatch = useAppDispatch();
  const push = useNavigate()
  
  const signIn  = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${response.access_token}`
          }
        });  
        if (res) {
          console.log(res)
         const result = await createUser({ name: res.data.name, email: res.data.email, imageURL: res.data.picture });          
         console.log(result);
          // const userData = result.data

         if(userData) {
            console.log('user create succesfully',userData)
            dispatch(authUser(userData!))
            push('/create')
          }
          else if(isError){
            console.log('something went wrong in it')
          }
        }
      } catch (error) {
        console.error(error);
      }
    }
  });

  return (
    <div className='flex flex-col justify-center items-center gap-4 w-full h-[32rem] mt-8'>
      <img src={createBlog} alt="title" className='w-[43%]'/>
      <h1 className='text-center text-[36px] tracking-[20px] font-medium'>It's as easy as Whatsapp</h1>
      <div style={{...typingBackground}} className='w-[50%] shadow-lg'>
        <div className="flex justify-between nav-items-center bg-white p-4 rounded-[28px]">
          <div className='flex items-center gap-4 justify-center'> 
            <img src={logo} alt="logo" width="50" />
            <TypingAnimator textArray={textArray}
                      loop
                      height='20px'
                      typingSpeed={80}
                      delaySpeed={1500}
                      backspace
                      cursorColor="#999999"
                      textColor='#999999'
                      fontSize='16px'
            />
          </div>
          <button className="flex justify-center items-center px-4 my-2 gap-2 text-sm font-medium text-gray-900 bg-[#ffde59] rounded-lg" onClick={()=>signIn()}>{!isLoading ? <>Start with <FaGoogle/></> : 'SigninUp'}</button>
        </div>
      </div>
    </div>
  );
}



export default Home