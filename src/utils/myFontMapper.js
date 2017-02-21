'use strict';

const map = {'hair':'58885','fruit2':'58886','laptop':'59272','book':'58890','movie':'58893','fruit':'58898','lose-money':'58899','others':'58901','snack':'58904','vegetable':'58910','money':'58911','commodity':'58912','food':'58913','rent':'58914','cloth':'58916','car':'59079','ren':'58942','mobile-phone':'58951','medicine':'58956','phone':'59094','cosmetic':'58980','x':'120',};
module.exports = (name)=>String.fromCharCode(map[name]);
module.exports.map = map;
