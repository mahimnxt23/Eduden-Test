/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const FreeWebinarCard = ({ category, time, title, img }) => {
    return (
        <div className="flex p-3 md:p-[15px] items-center justify-between bg-white gap-3 rounded-[16px]">
            <div>
                <img
                    src={img}
                    alt="webinar"
                    width={272}
                    className="max-w-[148px]"
                />
            </div>
            <div>
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="17"
                        viewBox="0 0 16 17"
                        fill="none"
                    >
                        <path
                            d="M13 2.5H11.5V2C11.5 1.86739 11.4473 1.74021 11.3536 1.64645C11.2598 1.55268 11.1326 1.5 11 1.5C10.8674 1.5 10.7402 1.55268 10.6464 1.64645C10.5527 1.74021 10.5 1.86739 10.5 2V2.5H5.5V2C5.5 1.86739 5.44732 1.74021 5.35355 1.64645C5.25979 1.55268 5.13261 1.5 5 1.5C4.86739 1.5 4.74021 1.55268 4.64645 1.64645C4.55268 1.74021 4.5 1.86739 4.5 2V2.5H3C2.73478 2.5 2.48043 2.60536 2.29289 2.79289C2.10536 2.98043 2 3.23478 2 3.5V13.5C2 13.7652 2.10536 14.0196 2.29289 14.2071C2.48043 14.3946 2.73478 14.5 3 14.5H13C13.2652 14.5 13.5196 14.3946 13.7071 14.2071C13.8946 14.0196 14 13.7652 14 13.5V3.5C14 3.23478 13.8946 2.98043 13.7071 2.79289C13.5196 2.60536 13.2652 2.5 13 2.5ZM4.5 3.5V4C4.5 4.13261 4.55268 4.25979 4.64645 4.35355C4.74021 4.44732 4.86739 4.5 5 4.5C5.13261 4.5 5.25979 4.44732 5.35355 4.35355C5.44732 4.25979 5.5 4.13261 5.5 4V3.5H10.5V4C10.5 4.13261 10.5527 4.25979 10.6464 4.35355C10.7402 4.44732 10.8674 4.5 11 4.5C11.1326 4.5 11.2598 4.44732 11.3536 4.35355C11.4473 4.25979 11.5 4.13261 11.5 4V3.5H13V5.5H3V3.5H4.5ZM13 13.5H3V6.5H13V13.5ZM7 8V12C7 12.1326 6.94732 12.2598 6.85355 12.3536C6.75979 12.4473 6.63261 12.5 6.5 12.5C6.36739 12.5 6.24021 12.4473 6.14645 12.3536C6.05268 12.2598 6 12.1326 6 12V8.80875L5.72375 8.9475C5.60507 9.00684 5.46767 9.01661 5.34179 8.97465C5.2159 8.93268 5.11184 8.84243 5.0525 8.72375C4.99316 8.60507 4.98339 8.46767 5.02535 8.34178C5.06732 8.2159 5.15757 8.11184 5.27625 8.0525L6.27625 7.5525C6.35251 7.51434 6.43726 7.49632 6.52244 7.50015C6.60763 7.50397 6.69042 7.52952 6.76295 7.57437C6.83548 7.61921 6.89533 7.68186 6.93682 7.75636C6.97831 7.83086 7.00006 7.91473 7 8ZM10.6975 9.90312L9.5 11.5H10.5C10.6326 11.5 10.7598 11.5527 10.8536 11.6464C10.9473 11.7402 11 11.8674 11 12C11 12.1326 10.9473 12.2598 10.8536 12.3536C10.7598 12.4473 10.6326 12.5 10.5 12.5H8.5C8.40714 12.5 8.31612 12.4741 8.23713 12.4253C8.15815 12.3765 8.09431 12.3067 8.05279 12.2236C8.01126 12.1406 7.99368 12.0476 8.00202 11.9551C8.01036 11.8626 8.04429 11.7743 8.1 11.7L9.89875 9.30188C9.93966 9.24741 9.96902 9.18515 9.98501 9.11893C10.001 9.05271 10.0033 8.98392 9.99173 8.91679C9.98018 8.84965 9.95503 8.78558 9.91783 8.72852C9.88062 8.67145 9.83215 8.62259 9.77538 8.58493C9.71862 8.54727 9.65475 8.52161 9.58771 8.50952C9.52067 8.49743 9.45187 8.49916 9.38552 8.51462C9.31917 8.53008 9.25668 8.55893 9.20189 8.59941C9.1471 8.63988 9.10115 8.69113 9.06688 8.75C9.03501 8.80868 8.99172 8.86038 8.93955 8.90205C8.88739 8.94373 8.8274 8.97453 8.76314 8.99265C8.69887 9.01076 8.63163 9.01582 8.56538 9.00753C8.49913 8.99924 8.43521 8.97776 8.37739 8.94436C8.31957 8.91097 8.26903 8.86633 8.22874 8.81308C8.18846 8.75984 8.15925 8.69906 8.14283 8.63434C8.12641 8.56962 8.12312 8.50227 8.13316 8.43626C8.14319 8.37025 8.16634 8.30692 8.20125 8.25C8.36641 7.96418 8.62125 7.74083 8.92626 7.61456C9.23127 7.4883 9.56941 7.46617 9.88827 7.55162C10.2071 7.63707 10.4889 7.82531 10.6899 8.08717C10.8909 8.34904 10.9999 8.66989 11 9C11.0011 9.32609 10.8948 9.64346 10.6975 9.90312Z"
                            fill="#3D7D01"
                        />
                    </svg>
                    <p className="text-[#3D7D01] text-[12px]">{time}</p>
                </div>
                <div className="mt-2">
                    <h4 className="text-[#1A1A1A] text-[14px] md:text-[16px] font-semibold font-sans">
                        {title}
                    </h4>
                </div>
                <div className="mt-4">
                    <button className="max-w-[180px] text-[#010101] font-medium text-[12px] px-4 py-2 bg-[#A8FF57] rounded-[50px] w-full cursor-pointer hover:bg-[#a8ff57ce] ">
                        See Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FreeWebinarCard
