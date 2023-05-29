import{apple,bill,google} from '../assets';
import styles,{layout} from '../style';

function Billing() {
  return (
    <section id ="product" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="billing" className='w-[100%] h-[100%] relative z-[5] ' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient '/>
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient '/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Easily control your billing & invoicing.<br className='sm:block hidden'/></h2>
        <p className={`${styles.paragraph} max-w-[520px] mt-5`}>With iBank, you can effortlessly take control of your billing and invoicing processes. Our comprehensive suite of features empowers businesses of all sizes to streamline their financial operations, saving time and improving efficiency.</p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6 '>
          <img src={apple} alt="apple_store"
          className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />
          <img src={google} alt="google_play"
          className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' />

        </div>

      </div>
    </section>
  )
}
export default Billing