import EditForm from "@/components/EditForm";
import { getTask } from "@/utils/actions";
import Link from "next/link";
import React from "react";

// Ensure it's a server component
const SingleEditForm = async ({ params }) => {
  const task = await getTask(params.id);

  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent">
          Back to Task
        </Link>
      </div>

      {/* Pass the task to the EditForm */}
      <EditForm task={task} />
    </>
  );
};

export default SingleEditForm;
