'use client'
import { createTask } from "@/utils/actions";
import { useFormStatus, useFormState } from "react-dom";
import toast from "react-hot-toast";
import { useEffect } from "react";

const initialState = {
  message: null
}

const SubmitButton = () => {

  const { pending } = useFormStatus();
 

  return (
    <button
      type="submit"
      className="btn btn-primary join-item"
      disabled={pending}
    >
      {pending ? "Please Wait...." : "Create Task"}
    </button>
  );
};

const TaskForm = () => {
   const [state, formAction] = useFormState(createTask, initialState);

   useEffect(()=> {
      if(state.message === 'error'){
        toast.error('there was an error ');
        return;
      }
      if(state.message){
        toast.success('task created')
      }
   }, [state])
  return (
    
    <form action={formAction}>
      {/* {state.message ? <p className="p-2">{state.message}</p> : null} */}
      <div className="join w-full">
        <input
          name="content"
          type="text"
          placeholder="Type here"
          className="input input-bordered join-item w-full"
          required
        />
        <SubmitButton />
      </div>
    </form>
  );
};

export default TaskForm;
