const db_id = require('../Model/database.json')
const fs = require('fs');
const { error } = require('console');

class Demo{
    
    Search(req){
         try{
             console.log("logic --->" , (req.body));
             var ids = req.body.ids;
             var pass = req.body.password;

             var result = db_id.find(db_id => db_id.id === ids);
             if( result == null) return "คุณยังไม่ได้ลงทะเบียน"
             if (ids === db_id.id && pass !== db_id.password) return "กรุณาใส่ข้อมูลที่ถูกต้อง"
             var type = db_id.findIndex(db_id => db_id.id === ids, db_id.password === pass);
             if( db_id[type].checkin === true) return "คุณได้ลงทะเบียนไปแล้ว"
             db_id[type].checkin = true;
             const Jsonstring = JSON.stringify(db_id);
            fs.writeFileSync('./Model/database.json', Jsonstring, (error) => {
                 if(error){
                     console.log("บันทึกไฟลืไม่สำเร็จ"); 
                  }
                 else{
                     console.log("บันทึกไฟล์สำเร็จ");
                    }
              } );
        return "เข้าสู่ระบบสำเร็จ"   
        }
    
    catch(error){
        var msg = {
            msg : `fail in Logic [ERROR]${error}`
          }
          return msg;
        }
    }
    count(req){
       try{
           var count = 0;
           for (let index = 0; index < db_id.length; index++) {
               if( db_id[index].checkin == true) 
                    count++;
           }
           return "จำนวนคนทั้งหมด" + count + "คน ";
       }
       catch(error){
            var msg = {
                 msg : `fail Search in Logic [ERROR]${error}`
             }
          return msg;
       }
    }

}
module.exports = Demo
