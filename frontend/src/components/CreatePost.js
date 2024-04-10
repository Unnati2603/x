import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";

const CreatePost = () => {
  return (
    <div className="w-[100%]">
      <div>
        {/* its the first one... handle clicks to add unna */}
        <div className="flex items-center justify-evenly border-b border-gray-200">
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg">For you</h1>
          </div>
          {/* its the 2nd one... handle clicks to add unna */}
          <div className="cursor-pointer hover:bg-gray-200 w-full text-center px-4 py-3">
            <h1 className="font-semibold text-gray-600 text-lg">Following</h1>
          </div>
        </div>

        <div>
          <div className="flex items-center p-4">
            <div>
              <Avatar
                src="https://pbs.twimg.com/profile_images/1769836151823581184/5K2U8bIZ_400x400.png"
                size="40"
                round={true}
              />
            </div>
            <input
              //   value={description}
              //   onChange={(e) => setDescription(e.target.value)}
              className="w-full outline-none border-none text-xl ml-2"
              type="text"
              placeholder="What is happening?!"
            />
          </div>

          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <div>
              <CiImageOn size="24px" />
            </div>
            <button
              //   onClick={submitHandler}
              className="bg-[#1D9BF0] px-4 py-1 text-lg text-white text-right border-none rounded-full "
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
