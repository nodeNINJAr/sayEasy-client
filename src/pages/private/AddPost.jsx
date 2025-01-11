import React from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Textarea,
} from "@headlessui/react";
import clsx from "clsx";
import UseAxiosSecure from "../../components/hooks/axiosInstance/axiosSecure";
import UseAuth from "../../components/hooks/UseAuth";
import toast from "react-hot-toast";

const AddPost = ({ isOpen, close, refetch }) => {
  //
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  //
  // handle mofal close
  const handleSubmit = async (e) => {
    e.preventDefault();
    //
    const content = e.target.content.value;
    //
    const postData = {
      userName: user?.displayName,
      userEmail: user?.email,
      userImage: user?.photoURL,
      date: new Date().toLocaleString(),
      postContent: content,
    };
    const { data } = await axiosSecure.post("/community", postData);
    if (data?.insertedId) {
      refetch();
      toast.success("Your Content Posted On Public");
      close();
    }
    if (data?.message) {
      toast.loading(`${data?.message}`, {
        style: {
          border: "1px solid #713200",
          padding: "16px",
          color: "#713200",
        },
        iconTheme: {
          primary: "#713200",
          secondary: "#FFFAEE",
        },
      });
    }
  };

  //
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center">
            <DialogPanel
              transition
              className="w-full max-w-lg rounded-xl bg-black/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Post On Community
              </DialogTitle>
              {/*  */}

              <form onSubmit={handleSubmit}>
                <Textarea
                  name="content"
                  placeholder="Write Your Post Here"
                  className={clsx(
                    "mt-3 block w-full resize-none rounded-lg border-none bg-black/5 dark:bg-white/5 py-1.5 px-3 text-sm/6 text-white",
                    "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                  )}
                  rows={5}
                />

                {/*  */}
                <div className="mt-4">
                  <Button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-md bg-gray-400 dark:bg-gray-500 py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-black/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-black data-[open]:bg-gray-700"
                  >
                    Post
                  </Button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AddPost;
