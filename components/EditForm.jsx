"use client";

import { editTask } from "@/utils/actions";



const EditForm = ({ task }) => {
  const { id, content, completed } = task;
  return (
    <form className="p-12 border border-base-300 rounded-lg" action={editTask}>
      <input type="hidden" name="id" value={id} />

      <input
        name="content"
        type="text"
        defaultValue={content}
        className="input input-bordered w-full"
        required
      />

      <div className="form-control my-4">
        <label htmlFor="completed" className="label cursor-pointer">
          <span className="label-text">Completed</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary checkbox-sm"
            defaultChecked={completed}
            id="completed"
            name="completed"
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary btn-block btn-sm">
        Edit
      </button>
    </form>
  );
};

export default EditForm;
