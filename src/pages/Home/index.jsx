import React, { useState,useEffect } from 'react'
import { DatePicker} from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const nowDate=()=>{
  const now=new Date();
  const y=now.getFullYear();
  const month=now.getMonth()+1;
  const day=now.getDate();
  const m=month>9?'0'+month:month
  const d=day>9?'0'+day:day
  return `${y}-${m}-${d}` 
}
export default function Home() {
  const [today, setToday] = useState(nowDate());
  console.log(today);
  // useEffect(()=> {
  // })
  return (
    <div>
      <div className="date">
        <div className="now_date">
          当前日期: {today}
        </div>
        <div className="send_date">
          发送日期: <DatePicker onChange={onChange} />
        </div>
      </div>
      <div className="send_people">
        <div className="title">导入学生学号</div>
        <div className="manual_import"></div>
        <div className="file_import">
          <table>
            <tr>
                <th>编号</th>
                <th>学号</th>
                <th>姓名</th>
            </tr>
            <tr>
                <td>1</td>
                <td>马里奥</td>
                <td>男</td>
            </tr>
        </table>
      </div>
      </div>
      <div className="send_content">
        <div className="title">导入发送信息</div>
        <div className="manual_import"></div>
        <div className="file_import"></div>
      </div>
    </div>
  )
}
