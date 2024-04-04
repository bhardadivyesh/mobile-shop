import { useExcelDownloder } from "react-xls";
import { useContext} from "react";
import { appContext } from "../Context/Context";

const ExcelBook = () => {
  const value = useContext(appContext);
  const { ExcelDownloder, Type } = useExcelDownloder();
const data = {
    client: [
        
    ],
    admin: [
        
    ]
  };
  function addUser(userData) {
    userData.forEach(user => {
      const { role } = user;
      if (role.admin) {
        data.admin.push(user);
      } else if (role.client) {
        data.client.push(user);
      } else {
        console.error("Invalid role specified for user:", user.name);
      }
    });
  }
  addUser(value.users);
  return (
    <div>
      <ExcelDownloder filename={"book"} type={Type.Button} data={data}>
        Download Excel File
      </ExcelDownloder>
    </div>
  );
};

export default ExcelBook;
