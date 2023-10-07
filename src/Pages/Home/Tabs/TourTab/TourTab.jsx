import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const TourTab = () => {
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
        <div className="bg-neutral-50 py-7 px-5 rounded-xl text-black w-auto md:w-[1000px]">
        <input
          type="text"
          placeholder="LOCATION/ TOUR"
          className="input input-bordered input-md w-full"
          {...register("location", { required: true, maxLength: 80 })}
        />
        </div>
        <div className="relative -top-3">
        <input className="btn bg-[#ff5403] mx-auto" type="submit" />
        </div>
      </form>
    );
};

export default TourTab;