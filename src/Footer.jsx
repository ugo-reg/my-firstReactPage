export default footer
import './Footer.css'
function footer(){
    return(
        <>
        <div className='footer'>
        <button className='footerbtn'>Sign in for more </button>
        <p> You can also checkout our social media handles for hourly updates.</p>
        <ul>
            <li><a href="">twitter</a></li>
            <li><a href="">instagram</a></li>
            <li><a href="">facebook</a></li>
        </ul>
        <input type="search" placeholder="name of movie" required/>
    
               <footer>
        <p>Built with ❤️ by Ugochi using React · Hosted on Netlify </p>
       </footer>

        </div>
        </>
    )
}