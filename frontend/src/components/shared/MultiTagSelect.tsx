import { useState } from "react";

type TagType = [
  string[],
  React.Dispatch<React.SetStateAction<string[]>>,
  string[]
];

export default function MultiTagSelect({ props }: { props: TagType }) {
  const [tags, setTags, availableTags] = props;
  const [expanded, setExpanded] = useState<boolean>(false);

  return (
    <div className="w-full mb-3">
      <div className="w-full flex flex-col items-center h-full mt-2">
        <div className="w-full">
          <div className="flex flex-col items-center ">
            <div className="w-full">
              <div className="flex w-full rounded-md border border-[#e0e0e0] bg-white py-2 px-4 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
                <div className={`grid grid-cols-1 sm:grid-cols-2  gap-1`}>
                  {tags?.map((elem, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center items-center m-1 font-medium py-1 px-2  rounded-full text-blue-700 bg-blue-100 border border-blue-300 "
                      >
                        <div className="text-xs font-normal leading-none max-w-full flex-initial">
                          {elem}
                        </div>
                        <div className="flex flex-auto flex-row-reverse">
                          <div
                            // name={elem}
                            onClick={() => {
                              console.log(elem, "choosen");
                              const tmp_array = tags.filter(
                                (cursor) => cursor !== elem
                              );
                              console.log(tmp_array);
                              // settags(tmp_array);
                              setTags(tmp_array);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="100%"
                              height="100%"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-x cursor-pointer hover:text-blue-400 rounded-full w-4 h-4 ml-2"
                            >
                              <line x1="18" y1="6" x2="6" y2="18"></line>
                              <line x1="6" y1="6" x2="18" y2="18"></line>
                            </svg>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  <div
                    tabIndex={1}
                    onFocus={() => setExpanded(true)}
                    className="flex-1 bg-transparent p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
                  >
                    <div
                    // onBlur={(e) => closeTagMenu(e, setExpanded)}
                    />
                  </div>
                </div>
                <div className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200 ">
                  <button
                    onClick={() => setExpanded(!expanded)}
                    type="button"
                    className={`cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none ${
                      expanded ? "rotate-180" : "rotate-0"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100%"
                      height="100%"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-chevron-up w-4 h-4"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {expanded && (
              <div
                tabIndex={1}
                // onFocus={() => console.log("focued div")}
                onBlur={() => {
                  console.log("left input field");
                  setExpanded(false);
                }}
                className="shadow top-100 z-40 w-full lef-0 max-h-36 overflow-y-auto rounded-md border border-[#e0e0e0] bg-white"
              >
                <div className="flex flex-col w-full">
                  {availableTags.map((tag, index) => {
                    return (
                      <div
                        key={index}
                        className={`cursor-pointer w-full border-gray-100 border-b hover:bg-blue-100 ${
                          tags.includes(tag)
                            ? "border-l-4 border-l-blue-300"
                            : ""
                        }`}
                        onClick={(e) => {
                          const selected_elem: string | undefined =
                            e.currentTarget.id;

                          console.log(selected_elem, "was selected");
                          if (!tags.includes(selected_elem)) {
                            e.currentTarget.classList.add(
                              "border-l-blue-300",
                              "border-l-4"
                            );
                            const new_selected_tags = [...tags, selected_elem];
                            // settags(new_selected_tags);
                            setTags(new_selected_tags);
                          } else {
                            console.log("already selecteds");
                          }
                        }}
                        id={tag}
                      >
                        <div className="flex w-full items-center p-2 pl-2 border-transparent border-l-2 relative hover:border-blue-100">
                          <div className="w-full items-center flex">
                            <div className="mx-2 leading-6  ">{tag} </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
