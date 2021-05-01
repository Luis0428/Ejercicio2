const directory = [
    {
        "id": "1",
        "email": "ricardo.jimenez@axity.com"
    },
    {
        "id": "2",
        "email": "jesus.avila@axity.com"
    },
    {
        "id": "3",
        "email": "rocio.esteban@axity.com"
    },
    {
        "id": "4",
        "email": "laura.perez@axity.com"
    },
    {
        "id": "5",
        "email": "francisco.hernandez@axity.com"
    },
    {
        "id": "6",
        "email": "carlos.juarez@axity.com"
    },
    {
        "id": "7",
        "email": "javier.hernandez@axity.com"
    }, {
        "id": "8",
        "email": "elizabeth.contreras@axity.com"
    }
];
const users = [
    {
        "id": "1",
        "name": "Ricardo",
        "lastName": "Jimenez",
        "email": "ricardo.jimenez@axity.com",
        "yearBirth": "1988",
        "monthBirth": "03",
        "dayBirth": "05",
        "status": "active"
    },
    {
        "id": "2",
        "name": "Jesus",
        "lastName": "Avila",
        "email": "jesus.avila@axity.com",
        "yearBirth": "1989",
        "monthBirth": "02",
        "dayBirth": "04",
        "status": "active"
    },
    {
        "id": "3",
        "name": "Rocio",
        "lastName": "Esteban",
        "email": "rocio.esteban@axity.com",
        "yearBirth": "1987",
        "monthBirth": "01",
        "dayBirth": "03",
        "status": "active"
    },
    {
        "id": "4",
        "name": "Laura",
        "lastName": "Perez",
        "email": "laura.perez@axity.com",
        "yearBirth": "1990",
        "monthBirth": "01",
        "dayBirth": "23",
        "status": "active"
    },
    {
        "id": "5",
        "name": "Francisco",
        "lastName": "Hernadez",
        "email": "francisco.hernandez@axity.com",
        "yearBirth": "1963",
        "monthBirth": "04",
        "dayBirth": "04",
        "status": "active"
    },
    {
        "id": "6",
        "name": "Carlos",
        "lastName": "Juarez",
        "email": "carlos.juarez@axity.com",
        "yearBirth": "1992",
        "monthBirth": "10",
        "dayBirth": "29",
        "status": "active"
    },
    {
        "id": "7",
        "name": "Javier",
        "lastName": "Hernandez",
        "email": "javier.hernandez@axity.com",
        "yearBirth": "1985",
        "monthBirth": "05",
        "dayBirth": "19",
        "status": "false"
    }, {
        "id": "8",
        "name": "Elizabeth",
        "lastName": "Contreras",
        "email": "elizabeth.contreras@axity.com",
        "yearBirth": "1984",
        "monthBirth": "10",
        "dayBirth": "29",
        "status": "active"
    }
];
export class User {
    constructor() {
    }
    Busqueda(correo) {
        let Busqueda = directory.filter(elemento => elemento.email == correo);
        let Busqueda2 = users.filter(elemento => elemento.id == Busqueda[0].id);
        let fecha = new Date();
        let yearsOld = fecha.getFullYear() - parseInt(Busqueda2[0]['yearBirth']);
        let Fin = { 'id': Busqueda2[0]['id'], 'name': Busqueda2[0]['name'] + ' ' + Busqueda2[0]['lastName'], 'dateBirth': Busqueda2[0]['dayBirth'] + '/' + Busqueda2[0]['monthBirth'] + '/' + Busqueda2[0]['yearBirth'], 'yearsOld': yearsOld };
        return Fin;
    }
}
//const BusquedaUser= new User();
//console.log(BusquedaUser.Busqueda('ricardo.jimenez@axity.com'));
