import React from 'react'
import { formateDate } from '../../utils/formateDate'

export default function DoctorAbout() {
  return (
    <div>
        <div>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2'>
            About of
            <span className='text-irisBlueColor font-bold text-[24px] leading-9'>
            Sayed Abid
            </span>
            </h3>
            <p className='text__para'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla aspernatur, ipsam dolor libero quo vitae, molestias distinctio facilis dolores veniam at nobis? Ducimus quos vero maiores sit, obcaecati quibusdam deserunt sapiente veritatis molestias voluptatum consequatur esse eaque praesentium magni atque optio quis assumenda omnis veniam incidunt accusamus iste? Dolorum optio autem ratione, quas suscipit voluptate!
            </p>
        </div>

        <div className="mt-12">
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>Education</h3>

            <ul className='pt-4 md:p-5'>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            {formateDate('07-18-2004')} - {formateDate('07-18-2008')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                            New APollo Hospital, New Delhi
                        </p>
                </li>
                <li className='flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]'>
                    <div>
                        <span className='text-irisBlueColor text-[15px] leading-6 font-semibold'>
                            {formateDate("11-09-2007")} - {formateDate('11-09-2011')}
                        </span>
                        <p className='text-[16px] leading-6 font-medium text-textColor'>
                            PHD in Surgeon
                        </p>
                    </div>
                    <p className='text-[14px] leading-5 font-medium text-textColor'>
                            New APollo Hospital, New Delhi
                        </p>
                </li>
            </ul>
        </div>

        <div className='mt-12'>
            <h3 className='text-[20px] leading-[30px] text-headingColor font-semibold'>
                Experience
            </h3>

            <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {formateDate("07-06-2009")} - {formateDate("09-09-2013")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Sr. Surgeon
                        </p>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                            New APollo Hospital, New Delhi
                        </p>
                </li>
                <li className='p-4 rounded bg-[#fff9ea]'>
                    <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
                        {formateDate("07-06-2009")} - {formateDate("09-09-2013")}
                    </span>
                    <p className='text-[16px] leading-6 font-medium text-textColor'>
                            Sr. Surgeon
                        </p>
                        <p className='text-[14px] leading-5 font-medium text-textColor'>
                            New APollo Hospital, New Delhi
                        </p>
                </li>
                
            </ul>
        </div>
    </div>
  )
}
