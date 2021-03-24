import { rest } from 'msw'

export const handlers = [
  rest.get('https://randomuser.me/api', (req, res, ctx) => {
//  return res(ctx.json({ greeting: 'hello there' }))usern
    return res(ctx.json({
      "status": "fetched",
      "data": {
          "results": [
              {
                  "gender": "male",
                  "name": {
                      "title": "Mr",
                      "first": "Alex",
                      "last": "Moraes"
                  },
                  "location": {
                      "street": {
                          "number": 4527,
                          "name": "Rua Primeiro de Maio "
                      },
                      "city": "Crato",
                      "state": "Pará",
                      "country": "Brazil",
                      "postcode": 84837,
                      "coordinates": {
                          "latitude": "-69.2781",
                          "longitude": "-26.2907"
                      },
                      "timezone": {
                          "offset": "+7:00",
                          "description": "Bangkok, Hanoi, Jakarta"
                      }
                  },
                  "email": "alex.moraes@example.com",
                  "login": {
                      "uuid": "19d7848d-fcdc-4cdb-ada2-23feb77ce3dc",
                      "username": "reddog219",
                      "password": "state",
                      "salt": "8XZWU2RA",
                      "md5": "b3ad9e8d4bee0340986e797ff9c29721",
                      "sha1": "05d360e27349d7eebc96c44f29430986eef2e1de",
                      "sha256": "bc730c23c6421e00df7f8dee62eb83304a6fbd0b44e96034ba69329404634750"
                  },
                  "dob": {
                      "date": "1957-11-03T02:00:13.403Z",
                      "age": 64
                  },
                  "registered": {
                      "date": "2019-03-06T11:51:31.474Z",
                      "age": 2
                  },
                  "phone": "(74) 4792-8798",
                  "cell": "(62) 8994-2198",
                  "id": {
                      "name": "",
                      "value": null
                  },
                  "picture": {
                      "large": "https://randomuser.me/api/portraits/men/92.jpg",
                      "medium": "https://randomuser.me/api/portraits/med/men/92.jpg",
                      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/92.jpg"
                  },
                  "nat": "BR"
              },
              {
                  "gender": "male",
                  "name": {
                      "title": "Mr",
                      "first": "Nísio",
                      "last": "Viana"
                  },
                  "location": {
                      "street": {
                          "number": 1985,
                          "name": "Rua São João "
                      },
                      "city": "Conselheiro Lafaiete",
                      "state": "Acre",
                      "country": "Brazil",
                      "postcode": 57490,
                      "coordinates": {
                          "latitude": "76.1589",
                          "longitude": "127.9349"
                      },
                      "timezone": {
                          "offset": "+9:00",
                          "description": "Tokyo, Seoul, Osaka, Sapporo, Yakutsk"
                      }
                  },
                  "email": "nisio.viana@example.com",
                  "login": {
                      "uuid": "a3def732-ee17-4bfd-bc40-8b722de22d29",
                      "username": "bluelion538",
                      "password": "stalin",
                      "salt": "UCiiZ5hj",
                      "md5": "590d801fb1925461bf5668b6b4331ed5",
                      "sha1": "50b1fd877407443f9b440f925973ac3315e286fc",
                      "sha256": "8324562e913f8b3fb135b8d6dcd37f1b4f22bd71affa65f0efae5357dd2463df"
                  },
                  "dob": {
                      "date": "1946-05-16T01:49:25.411Z",
                      "age": 75
                  },
                  "registered": {
                      "date": "2006-02-20T19:37:00.709Z",
                      "age": 15
                  },
                  "phone": "(59) 6530-6382",
                  "cell": "(86) 8257-8010",
                  "id": {
                      "name": "",
                      "value": null
                  },
                  "picture": {
                      "large": "https://randomuser.me/api/portraits/men/72.jpg",
                      "medium": "https://randomuser.me/api/portraits/med/men/72.jpg",
                      "thumbnail": "https://randomuser.me/api/portraits/thumb/men/72.jpg"
                  },
                  "nat": "BR"
              },
              {
                  "gender": "female",
                  "name": {
                      "title": "Miss",
                      "first": "مهدیس",
                      "last": "رضایی"
                  },
                  "location": {
                      "street": {
                          "number": 651,
                          "name": "پارک 17 شهریور"
                      },
                      "city": "پاکدشت",
                      "state": "کرمانشاه",
                      "country": "Iran",
                      "postcode": 21102,
                      "coordinates": {
                          "latitude": "-2.2306",
                          "longitude": "-168.5522"
                      },
                      "timezone": {
                          "offset": "+7:00",
                          "description": "Bangkok, Hanoi, Jakarta"
                      }
                  },
                  "email": "mhdys.rdyy@example.com",
                  "login": {
                      "uuid": "3b8ea840-a4d4-4d9d-b8bd-110afb32c1ed",
                      "username": "tinybird701",
                      "password": "martin",
                      "salt": "iXefP1qU",
                      "md5": "f5d6d6921103b8ac9e3b8128f92597fc",
                      "sha1": "c1304d8f6327efcec4d79bd60d5cd8a030cd60d6",
                      "sha256": "c959643f8a4893a14caeb9b3a524d78879061670ed4acc59e2f4b782d49c14ab"
                  },
                  "dob": {
                      "date": "1983-12-28T05:39:13.596Z",
                      "age": 38
                  },
                  "registered": {
                      "date": "2010-08-18T18:55:20.040Z",
                      "age": 11
                  },
                  "phone": "019-57386636",
                  "cell": "0971-767-4386",
                  "id": {
                      "name": "",
                      "value": null
                  },
                  "picture": {
                      "large": "https://randomuser.me/api/portraits/women/6.jpg",
                      "medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
                      "thumbnail": "https://randomuser.me/api/portraits/thumb/women/6.jpg"
                  },
                  "nat": "IR"
              }
          ],
          "info": {
              "seed": "add",
              "results": 3,
              "page": 1,
              "version": "1.3"
          }
      }
  }))
})
]