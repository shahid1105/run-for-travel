import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const FlightTab = () => {
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
        placeholder="From"
        className="input input-bordered input-md w-full max-w-xs"
        {...register("from", { required: true, maxLength: 80 })}
      />

      <input
        type="text"
        placeholder="To"
        className="input input-bordered input-md w-full max-w-xs"
        {...register("to", { required: true, maxLength: 100 })}
      />
      {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}> */}
      <div className="flex input input-bordered input-md">
      <input
        type="text"
        placeholder="Journey Date"
        className="input  w-full max-w-xs]"
        {...register("journeyDate", { required: true,  })}
      />
      <input
        type="text"
        placeholder="Return Date"
        className="input  w-full max-w-xs"
        {...register("returnDate", { required: true,  })}
      />
      </div>
      <input
        type="text"
        placeholder="Traveler, Class"
        className="input input-bordered input-md w-full max-w-xs"
        {...register("class", { required: true,  })}
      />
      {/* </DatePicker> */}
      {/* <input
        type="number"
        placeholder="Mobile number"
        className="input input-bordered input-md w-full max-w-xs"
        {...register("phone", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      /> */}
      </div>
      <div className="relative -top-3">
      <input className="btn bg-[#ff5403] mx-auto" type="submit" />
      </div>
    </form>
  );
};

export default FlightTab;
