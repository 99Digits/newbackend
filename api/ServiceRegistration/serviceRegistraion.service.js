const pool = require('../../databaseconnection');

module.exports = {
  insertservicereg: (data, callback) => {
    pool.query(
      `INSERT INTO service_reg 
      (user_id, ser_name_slno, serv_type_slno,serv_image,serv_time,serv_date,	serv_location,vehicle_id,vehicle_name)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        data.user_id,
        data.ser_name_slno,
        data.serv_type_slno,
        data.serv_image,
        data.serv_time,
        data.serv_date,
        data.serv_location,
        data.vehicle_id,
        data.vehicle_name
        
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  serviceUpdation: (data, callback) => {
    pool.query(
      `UPDATE service_reg SET 
      user_id = ?, ser_name_slno = ?, serv_type_slno = ?, serv_image = ?, serv_time = ?, serv_date = ?,
      serv_location = ?,vehicle_id = ?,vehicle_name = ?
      WHERE reg_slno = ?`,
      [
        data.user_id,
        data.ser_name_slno,
        data.serv_type_slno,
        data.serv_image,
        data.serv_time,
        data.serv_date,
        data.serv_location,
        data.vehicle_id,
        data.vehicle_name,
        data.reg_slno
      ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },

  ServiceRegistartionselect: (id,callback) => {
    pool.query(

          `SELECT 
          service_reg.user_id,
          CONCAT(user_creation.user_fname,' ',user_creation.user_lname) AS customer_Name,
           service_reg.ser_name_slno, service_name.service_name,
            service_reg.serv_type_slno,
            service_type.service_type, 
            service_reg.serv_image, 
            service_reg.serv_time, 
            service_reg.serv_date, 
            service_reg.serv_location 
            FROM service_reg 
            LEFT JOIN service_type ON service_reg.serv_type_slno = service_type.type_slno 
            LEFT JOIN service_name ON service_reg.ser_name_slno = service_name.name_slno 
            LEFT JOIN user_creation ON service_reg.user_id = user_creation.id 
            WHERE id = ?;
          `,

      [id],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
    );
  },
  serviceAccept:(data,callback)=>{
    pool.query(`
    INSERT INTO service_acceptance(service_acceptance, service_id, emp_id) 
    VALUES (?,?,?)
    `,[
      data.service_acceptance,
      data.service_id,
      data.emp_id 
    ],
      (error, results, fields) => {
        if (error) {
          return callback(error);
        }
        return callback(null, results);
      }
      )
  }
};
