import Cart from "../../../public/cart-2.svg";

const Checkout = () => {
  return (
    <div className={'container py-8'}>
      <div className={'flex justify-center'}>
        <img src={Cart} alt="cart"/>
      </div>
      <form className={'w-[60%] shadow-md p-8'} action="#">
        <div className={'form-control'}>
          <label className={'label'}>
            <span className={'label-text'}>Full Name</span>
          </label>
          <input  type="text" placeholder="John Smith" className={'input bg-base-200'}/>
        </div>
        <div className={'form-control mt-5'}>
          <label className={'label'}>
            <span className={'label-text'}>Ship to</span>
          </label>
          <input type="text" placeholder="HubSpot, 25 First Street, Cambridge MA 02141, United States" className={'input'}/>
        </div>
        <div className="form-control">
          <label className="cursor-pointer flex items-center grow">
            <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked />
            <div>
              <div className={'flex flex-col'}>
                <span className="text-left label-text ">Red pill</span>
                <div className={'flex justify-between'}>
                  <span className={'text-left label-text '}>7-30 business days</span>
                  <span className={'ml-auto'}>0$</span>
                </div>
              </div>

            </div>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500"  />
            <span className="label-text">Blue pill</span>
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <input type="radio" name="radio-10" className="radio checked:bg-blue-500"  />
            <span className="label-text">Blue pill</span>
          </label>
        </div>

      </form>
    </div>
  );
}

export default Checkout;