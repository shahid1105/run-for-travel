import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const HotelTab = () => {
        const {
            register,
            handleSubmit,
            formState: { errors },
          } = useForm();
          const onSubmit = (data) =>{
            console.log(data);
            console.log(errors);
    
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your Form Successfully Submitted',
            showConfirmButton: false,
            timer: 2000
          });
          } ;

    return (
        <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="bg-neutral-50 p-5 rounded-xl grid grid-cols-2 text-black md:grid-cols-4 gap-4 w-auto md:w-[1000px]">
        <input
          type="text"
          placeholder="CITY/HOTEL/RESORT/AREA"
          className="input input-bordered input-md w-full max-w-xs"
          {...register("area", { required: true, maxLength: 80 })}
        />
  
        <input
          type="text"
          placeholder="CHECK IN"
          className="input input-bordered input-md w-full max-w-xs"
          {...register("checkInDate", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="CHECK OUT"
          className="input input-bordered input-md w-full max-w-xs"
          {...register("checkOutDate", { required: true,  })}
        />
        <input
          type="text"
          placeholder="ROOMS & GUESTS"
          className="input input-bordered input-md w-full max-w-xs"
          {...register("rooms", { required: true,  })}
        />
        </div>
        <div className="relative -top-3">
        <input className="btn bg-[#ff5403] mx-auto" type="submit" />
        </div>
      </form>
    );
};

export default HotelTab;