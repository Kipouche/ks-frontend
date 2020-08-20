import connection from './db';
import ConvertTime from './convertTime';

function Property() {
  this.create = (address, city, district, area, userId, room, bathroom, bed) =>
    new Promise((resolve, reject) => {
      connection.query(
        'INSERT INTO property SET address = ?, city = ?, district = ?, area = ?, user_id = ?, room = ?, bathroom = ?, bed = ?',
        [address, city, district, area, userId, room, bathroom, bed],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't create property"));
          } else {
            resolve(results);
          }
        }
      );
    });

  this.getById = (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM property WHERE id = ?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't find property"));
          } else {
            resolve(results);
          }
        }
      );
    });

  this.getByUserId = (userId) =>
    new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM property WHERE user_id = ?',
        [userId],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't get properties"));
          } else {
            resolve(results);
          }
        }
      );
    });

  this.getAvailableProperties = () =>
    new Promise((resolve, reject) => {
      connection.query(
        `SELECT * FROM property where id not in (SELECT property_id where starDate < ${ConvertTime.getISOTime()} AND endDate > ${ConvertTime.getISOTime()}) AND validated = 1`,
        [],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't get properties"));
          } else {
            resolve(results);
          }
        }
      );
    });

  this.getUnvalidatedProperties = () =>
    new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM property WHERE validated = 0',
        [],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't get properties"));
          } else {
            resolve(results);
          }
        }
      );
    });

  this.setValidated = (id, boolean) => {
    return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE property set validated = ? WHERE id = ?',
        [boolean, id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't validate property"));
          } else {
            resolve(results);
          }
        }
      );
    });
  };

  this.completeInfos = (id, title, description) =>
    new Promise((resolve, reject) => {
      connection.query(
        'UPDATE property set title = ?, description = ?, validated = 1 WHERE id=?',
        [title, description, id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't update property"));
          } else {
            resolve(results);
          }
        }
      );
    });

  this.delete = (id) =>
    new Promise((resolve, reject) => {
      connection.query(
        'DELETE from property WHERE id=?',
        [id],
        (error, results) => {
          if (error) {
            reject(new Error("Couldn't delete property"));
          } else {
            resolve(results);
          }
        }
      );
    });

  this.getByFilter = (area, bed, room, bathroom, priceMin, priceMax, district) =>
    new Promise((resolve, reject) => {
      const parameters = [];

      if (area) parameters.push(area);
      if (bed) parameters.push(bed);
      if (room) parameters.push(room);
      if (bathroom) parameters.push(bathroom);
      if (priceMin) parameters.push(priceMin);
      if (priceMax) parameters.push(priceMax);
      if (district) parameters.push(district);

      connection.query(
        `SELECT * FROM property WHERE
        validated = 1
        ${area ? ' AND area >= ?' : ''}
        ${bed ? ' AND bed >= ?' : ''}
        ${room ? 'AND room >= ?' : ''}
        ${bathroom ? 'AND bathroom >= ?' : ''}
        ${priceMin ? ' AND price >= ?' : ''}
        ${priceMax ? ' AND price <= ?' : ''}
        ${district ? ` AND district = ?` : ''}
        AND id NOT in (SELECT property_id FROM rent where startDate < "${ConvertTime.getISOTime()}" AND endDate > "${ConvertTime.getISOTime()}")`,
        parameters,
        (error, results) => {
          if (error) {
            reject(new Error(error));
          } else {
            resolve(results);
          }
        }
      );
    });
}

module.exports = new Property();