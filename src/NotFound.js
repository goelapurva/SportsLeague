
import './NotFound-styles.css';
export default function NotFound(){

    return(
      <div>
         <img src={process.env.PUBLIC_URL + '/Images/404.png'}  class="notFound"  />
        </div>
    )
}