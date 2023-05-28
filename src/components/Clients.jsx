import { clients} from "../constants"
import styles from "../style"


function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4 `}>
      <div className={`${styles.flexCenter} flex-wrap w-full `}>
         {clients.map((client)=>(
          <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] min-h-[65px] hover:bg-dimWhite rounded-[15px]`}> 
          <img src={client.logo} alt="clients"  className="sm:w-[192px] w-[100px] object-contain"/></div>
         ))}
      </div>
    </section>
  )
}

export default Clients