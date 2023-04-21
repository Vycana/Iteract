import Iteract from "../src/index.js";
describe('Iteract Testing', () => {
    test("Showing data", () => {
        const data = new Iteract([1, 2, 3, 4]);
        expect(data.all()).toStrictEqual([1, 2, 3, 4]);
    })

    test("Filter data using Where function", () => {
        const data = new Iteract([1, 2, 3, 4]);
        const dataString = new Iteract(["bagas", "alex", "budi", "joko", "joki", "ibnu"]);
        expect(data.where("=", 3).all()).toStrictEqual([3]);
        expect(data.where("!=", 3).all()).toStrictEqual([1, 2, 4]);
        expect(data.where(">", 1).all()).toStrictEqual([2, 3, 4]);
        expect(data.where(">=", 2).all()).toStrictEqual([2, 3, 4]);
        expect(data.where("<", 3).all()).toStrictEqual([1, 2]);
        expect(data.where("<=", 1).all()).toStrictEqual([1]);
        expect(dataString.where("like", "jo").all()).toStrictEqual(["joko", "joki"]);
        expect(dataString.where("not like", "jo").all()).toStrictEqual(["bagas", "alex", "budi", "ibnu"]);
        expect(dataString.where("in", ["joki", "ibnu"]).all()).toStrictEqual(["joki", "ibnu"]);
        expect(dataString.where("not in", ["joki", "ibnu"]).all()).toStrictEqual(["bagas", "alex", "budi", "joko"]);
    })

    test("Filter data with key using Where function", () => {
        const data = new Iteract(
            [
                {
                    "id": 1,
                    "full_name": "Alla Blackster",
                    "email": "ablackster0@sitemeter.com",
                    "gender": "Polygender",
                    "age": 38,
                    "ip_address": "183.61.141.149"
                }, {
                    "id": 2,
                    "full_name": "Bessie Hubbart",
                    "email": "bhubbart1@abc.net.au",
                    "gender": "Female",
                    "age": 20,
                    "ip_address": "102.122.163.55"
                }, {
                    "id": 3,
                    "full_name": "Friederike Larby",
                    "email": "flarby2@netscape.com",
                    "gender": "Female",
                    "age": 46,
                    "ip_address": "155.229.153.173"
                }, {
                    "id": 4,
                    "full_name": "Guthrie Storch",
                    "email": "gstorch3@bandcamp.com",
                    "gender": "Male",
                    "age": 25,
                    "ip_address": "109.237.74.237"
                }, {
                    "id": 5,
                    "full_name": "Inger Laborde",
                    "email": "ilaborde4@statcounter.com",
                    "gender": "Female",
                    "age": 53,
                    "ip_address": "30.192.162.86"
                }, {
                    "id": 6,
                    "full_name": "Wandie Austick",
                    "email": "waustick5@abc.net.au",
                    "gender": "Female",
                    "age": 29,
                    "ip_address": "95.221.224.182"
                }, {
                    "id": 7,
                    "full_name": "Stewart Revely",
                    "email": "srevely6@ucoz.ru",
                    "gender": "Male",
                    "age": 44,
                    "ip_address": "222.83.61.84"
                }, {
                    "id": 8,
                    "full_name": "Heath Dennerley",
                    "email": "hdennerley7@nifty.com",
                    "gender": "Male",
                    "age": 58,
                    "ip_address": "244.140.135.26"
                }, {
                    "id": 9,
                    "full_name": "Emerson Roseby",
                    "email": "eroseby8@virginia.edu",
                    "gender": "Male",
                    "age": 20,
                    "ip_address": "89.11.71.183"
                }, {
                    "id": 10,
                    "full_name": "Brander Kundt",
                    "email": "bkundt9@bloomberg.com",
                    "gender": "Male",
                    "age": 58,
                    "ip_address": "137.9.44.165"
                }, {
                    "id": 11,
                    "full_name": "Gail Crates",
                    "email": "gcratesa@google.com.hk",
                    "gender": "Male",
                    "age": 24,
                    "ip_address": "178.63.36.103"
                }, {
                    "id": 12,
                    "full_name": "Parrnell Tuny",
                    "email": "ptunyb@cornell.edu",
                    "gender": "Male",
                    "age": 37,
                    "ip_address": "89.124.198.167"
                }, {
                    "id": 13,
                    "full_name": "Amalle Safhill",
                    "email": "asafhillc@patch.com",
                    "gender": "Female",
                    "age": 25,
                    "ip_address": "12.130.179.199"
                }, {
                    "id": 14,
                    "full_name": "Carol Ahrend",
                    "email": "cahrendd@unc.edu",
                    "gender": "Female",
                    "age": 41,
                    "ip_address": "172.113.5.184"
                }, {
                    "id": 15,
                    "full_name": "Brnaby McCheyne",
                    "email": "bmccheynee@dailymail.co.uk",
                    "gender": "Male",
                    "age": 50,
                    "ip_address": "1.42.172.237"
                }, {
                    "id": 16,
                    "full_name": "Jayne Grannell",
                    "email": "jgrannellf@php.net",
                    "gender": "Female",
                    "age": 54,
                    "ip_address": "14.81.73.172"
                }, {
                    "id": 17,
                    "full_name": "Nolly Tissier",
                    "email": "ntissierg@cyberchimps.com",
                    "gender": "Male",
                    "age": 60,
                    "ip_address": "254.57.101.2"
                }, {
                    "id": 18,
                    "full_name": "Ev Saladin",
                    "email": "esaladinh@whitehouse.gov",
                    "gender": "Genderfluid",
                    "age": 48,
                    "ip_address": "10.111.31.51"
                }, {
                    "id": 19,
                    "full_name": "Koral Rigglesford",
                    "email": "krigglesfordi@linkedin.com",
                    "gender": "Genderqueer",
                    "age": 20,
                    "ip_address": "46.146.80.11"
                }, {
                    "id": 20,
                    "full_name": "Minette Pickerin",
                    "email": "mpickerinj@npr.org",
                    "gender": "Female",
                    "age": 46,
                    "ip_address": "144.122.100.199"
                }, {
                    "id": 21,
                    "full_name": "Alex Roofe",
                    "email": "aroofek@dot.gov",
                    "gender": "Genderqueer",
                    "age": 36,
                    "ip_address": "37.223.114.163"
                }, {
                    "id": 22,
                    "full_name": "Terra Island",
                    "email": "tislandl@uol.com.br",
                    "gender": "Female",
                    "age": 22,
                    "ip_address": "126.163.127.25"
                }, {
                    "id": 23,
                    "full_name": "Tori Brownsworth",
                    "email": "tbrownsworthm@rambler.ru",
                    "gender": "Non-binary",
                    "age": 20,
                    "ip_address": "201.227.179.158"
                }, {
                    "id": 24,
                    "full_name": "Catarina Hatley",
                    "email": "chatleyn@infoseek.co.jp",
                    "gender": "Genderqueer",
                    "age": 38,
                    "ip_address": "192.10.24.5"
                }, {
                    "id": 25,
                    "full_name": "Aliza Colebourn",
                    "email": "acolebourno@usgs.gov",
                    "gender": "Female",
                    "age": 25,
                    "ip_address": "185.127.44.144"
                }, {
                    "id": 26,
                    "full_name": "Morry Yitzowitz",
                    "email": "myitzowitzp@canalblog.com",
                    "gender": "Male",
                    "age": 28,
                    "ip_address": "204.17.30.208"
                }, {
                    "id": 27,
                    "full_name": "Gilburt Shatliffe",
                    "email": "gshatliffeq@facebook.com",
                    "gender": "Male",
                    "age": 34,
                    "ip_address": "168.14.66.106"
                }, {
                    "id": 28,
                    "full_name": "Harman Aylin",
                    "email": "haylinr@icq.com",
                    "gender": "Male",
                    "age": 38,
                    "ip_address": "190.48.13.15"
                }, {
                    "id": 29,
                    "full_name": "Otis Castan",
                    "email": "ocastans@dmoz.org",
                    "gender": "Male",
                    "age": 39,
                    "ip_address": "180.174.217.128"
                }, {
                    "id": 30,
                    "full_name": "Gale Amys",
                    "email": "gamyst@facebook.com",
                    "gender": "Polygender",
                    "age": 40,
                    "ip_address": "79.177.140.249"
                }, {
                    "id": 31,
                    "full_name": "Vito Petel",
                    "email": "vpetelu@indiatimes.com",
                    "gender": "Male",
                    "age": 34,
                    "ip_address": "60.170.96.152"
                }, {
                    "id": 32,
                    "full_name": "Sydelle O'Kelly",
                    "email": "sokellyv@vk.com",
                    "gender": "Female",
                    "age": 42,
                    "ip_address": "190.148.146.121"
                }, {
                    "id": 33,
                    "full_name": "Brooks Chippindale",
                    "email": "bchippindalew@feedburner.com",
                    "gender": "Male",
                    "age": 51,
                    "ip_address": "115.115.191.185"
                }, {
                    "id": 34,
                    "full_name": "Uta Schuck",
                    "email": "uschuckx@mapquest.com",
                    "gender": "Female",
                    "age": 54,
                    "ip_address": "172.153.67.54"
                }, {
                    "id": 35,
                    "full_name": "Helsa Proudlove",
                    "email": "hproudlovey@time.com",
                    "gender": "Female",
                    "age": 27,
                    "ip_address": "233.111.198.76"
                }, {
                    "id": 36,
                    "full_name": "Jaquenette Kincade",
                    "email": "jkincadez@csmonitor.com",
                    "gender": "Female",
                    "age": 48,
                    "ip_address": "146.250.31.139"
                }, {
                    "id": 37,
                    "full_name": "Mylo Dewey",
                    "email": "mdewey10@phpbb.com",
                    "gender": "Male",
                    "age": 39,
                    "ip_address": "96.20.117.59"
                }, {
                    "id": 38,
                    "full_name": "Muffin Luckett",
                    "email": "mluckett11@i2i.jp",
                    "gender": "Male",
                    "age": 47,
                    "ip_address": "206.223.161.132"
                }, {
                    "id": 39,
                    "full_name": "Guss Lightbourne",
                    "email": "glightbourne12@g.co",
                    "gender": "Male",
                    "age": 35,
                    "ip_address": "36.18.104.95"
                }, {
                    "id": 40,
                    "full_name": "Jervis Murty",
                    "email": "jmurty13@xinhuanet.com",
                    "gender": "Male",
                    "age": 56,
                    "ip_address": "131.45.73.111"
                }, {
                    "id": 41,
                    "full_name": "Elsinore Badrock",
                    "email": "ebadrock14@vkontakte.ru",
                    "gender": "Female",
                    "age": 52,
                    "ip_address": "238.5.63.182"
                }, {
                    "id": 42,
                    "full_name": "Benton Udall",
                    "email": "budall15@geocities.jp",
                    "gender": "Male",
                    "age": 50,
                    "ip_address": "192.60.29.227"
                }, {
                    "id": 43,
                    "full_name": "Talbert Rettie",
                    "email": "trettie16@booking.com",
                    "gender": "Male",
                    "age": 25,
                    "ip_address": "127.234.94.60"
                }, {
                    "id": 44,
                    "full_name": "Dania Uzzell",
                    "email": "duzzell17@ning.com",
                    "gender": "Agender",
                    "age": 34,
                    "ip_address": "235.238.143.85"
                }, {
                    "id": 45,
                    "full_name": "Kimmy Cornier",
                    "email": "kcornier18@hugedomains.com",
                    "gender": "Female",
                    "age": 21,
                    "ip_address": "112.252.160.31"
                }, {
                    "id": 46,
                    "full_name": "Julius Kane",
                    "email": "jkane19@apple.com",
                    "gender": "Genderfluid",
                    "age": 24,
                    "ip_address": "83.245.248.180"
                }, {
                    "id": 47,
                    "full_name": "Terrence Reuben",
                    "email": "treuben1a@soundcloud.com",
                    "gender": "Male",
                    "age": 60,
                    "ip_address": "248.68.70.42"
                }, {
                    "id": 48,
                    "full_name": "Pieter Mowsdill",
                    "email": "pmowsdill1b@sphinn.com",
                    "gender": "Male",
                    "age": 44,
                    "ip_address": "6.120.50.206"
                }, {
                    "id": 49,
                    "full_name": "Meaghan Drakard",
                    "email": "mdrakard1c@ft.com",
                    "gender": "Female",
                    "age": 60,
                    "ip_address": "94.155.158.127"
                }, {
                    "id": 50,
                    "full_name": "King Fincken",
                    "email": "kfincken1d@mac.com",
                    "gender": "Male",
                    "age": 45,
                    "ip_address": "245.183.136.183"
                }
            ]
        );

        expect(data.where("age", "<=", 21).all()).toStrictEqual(
            [
                {
                    "id": 2,
                    "full_name": "Bessie Hubbart",
                    "email": "bhubbart1@abc.net.au",
                    "gender": "Female",
                    "age": 20,
                    "ip_address": "102.122.163.55"
                },
                {
                    "id": 9,
                    "full_name": "Emerson Roseby",
                    "email": "eroseby8@virginia.edu",
                    "gender": "Male",
                    "age": 20,
                    "ip_address": "89.11.71.183"
                },
                {
                    "id": 19,
                    "full_name": "Koral Rigglesford",
                    "email": "krigglesfordi@linkedin.com",
                    "gender": "Genderqueer",
                    "age": 20,
                    "ip_address": "46.146.80.11"
                },
                {
                    "id": 23,
                    "full_name": "Tori Brownsworth",
                    "email": "tbrownsworthm@rambler.ru",
                    "gender": "Non-binary",
                    "age": 20,
                    "ip_address": "201.227.179.158"
                },
                {
                    "id": 45,
                    "full_name": "Kimmy Cornier",
                    "email": "kcornier18@hugedomains.com",
                    "gender": "Female",
                    "age": 21,
                    "ip_address": "112.252.160.31"
                }
            ]
        );
        expect(data.where("id", "=", "1").all()).toStrictEqual(
            [
                {
                    "id": 1,
                    "full_name": "Alla Blackster",
                    "email": "ablackster0@sitemeter.com",
                    "gender": "Polygender",
                    "age": 38,
                    "ip_address": "183.61.141.149"
                }
            ]
        );

        expect(data.where("email", "like", "au").all()).toStrictEqual(
            [
                {
                    "id": 2,
                    "full_name": "Bessie Hubbart",
                    "email": "bhubbart1@abc.net.au",
                    "gender": "Female",
                    "age": 20,
                    "ip_address": "102.122.163.55"
                },
                {
                    "id": 6,
                    "full_name": "Wandie Austick",
                    "email": "waustick5@abc.net.au",
                    "gender": "Female",
                    "age": 29,
                    "ip_address": "95.221.224.182"
                }
            ]
        );

        expect(data.where("email", "not like", "au").all()).toStrictEqual(
            [
                {
                    "id": 1,
                    "full_name": "Alla Blackster",
                    "email": "ablackster0@sitemeter.com",
                    "gender": "Polygender",
                    "age": 38,
                    "ip_address": "183.61.141.149"
                },
                {
                    "id": 3,
                    "full_name": "Friederike Larby",
                    "email": "flarby2@netscape.com",
                    "gender": "Female",
                    "age": 46,
                    "ip_address": "155.229.153.173"
                },
                {
                    "id": 4,
                    "full_name": "Guthrie Storch",
                    "email": "gstorch3@bandcamp.com",
                    "gender": "Male",
                    "age": 25,
                    "ip_address": "109.237.74.237"
                },
                {
                    "id": 5,
                    "full_name": "Inger Laborde",
                    "email": "ilaborde4@statcounter.com",
                    "gender": "Female",
                    "age": 53,
                    "ip_address": "30.192.162.86"
                },
                {
                    "id": 7,
                    "full_name": "Stewart Revely",
                    "email": "srevely6@ucoz.ru",
                    "gender": "Male",
                    "age": 44,
                    "ip_address": "222.83.61.84"
                },
                {
                    "id": 8,
                    "full_name": "Heath Dennerley",
                    "email": "hdennerley7@nifty.com",
                    "gender": "Male",
                    "age": 58,
                    "ip_address": "244.140.135.26"
                },
                {
                    "id": 9,
                    "full_name": "Emerson Roseby",
                    "email": "eroseby8@virginia.edu",
                    "gender": "Male",
                    "age": 20,
                    "ip_address": "89.11.71.183"
                },
                {
                    "id": 10,
                    "full_name": "Brander Kundt",
                    "email": "bkundt9@bloomberg.com",
                    "gender": "Male",
                    "age": 58,
                    "ip_address": "137.9.44.165"
                },
                {
                    "id": 11,
                    "full_name": "Gail Crates",
                    "email": "gcratesa@google.com.hk",
                    "gender": "Male",
                    "age": 24,
                    "ip_address": "178.63.36.103"
                },
                {
                    "id": 12,
                    "full_name": "Parrnell Tuny",
                    "email": "ptunyb@cornell.edu",
                    "gender": "Male",
                    "age": 37,
                    "ip_address": "89.124.198.167"
                },
                {
                    "id": 13,
                    "full_name": "Amalle Safhill",
                    "email": "asafhillc@patch.com",
                    "gender": "Female",
                    "age": 25,
                    "ip_address": "12.130.179.199"
                },
                {
                    "id": 14,
                    "full_name": "Carol Ahrend",
                    "email": "cahrendd@unc.edu",
                    "gender": "Female",
                    "age": 41,
                    "ip_address": "172.113.5.184"
                },
                {
                    "id": 15,
                    "full_name": "Brnaby McCheyne",
                    "email": "bmccheynee@dailymail.co.uk",
                    "gender": "Male",
                    "age": 50,
                    "ip_address": "1.42.172.237"
                },
                {
                    "id": 16,
                    "full_name": "Jayne Grannell",
                    "email": "jgrannellf@php.net",
                    "gender": "Female",
                    "age": 54,
                    "ip_address": "14.81.73.172"
                },
                {
                    "id": 17,
                    "full_name": "Nolly Tissier",
                    "email": "ntissierg@cyberchimps.com",
                    "gender": "Male",
                    "age": 60,
                    "ip_address": "254.57.101.2"
                },
                {
                    "id": 18,
                    "full_name": "Ev Saladin",
                    "email": "esaladinh@whitehouse.gov",
                    "gender": "Genderfluid",
                    "age": 48,
                    "ip_address": "10.111.31.51"
                },
                {
                    "id": 19,
                    "full_name": "Koral Rigglesford",
                    "email": "krigglesfordi@linkedin.com",
                    "gender": "Genderqueer",
                    "age": 20,
                    "ip_address": "46.146.80.11"
                },
                {
                    "id": 20,
                    "full_name": "Minette Pickerin",
                    "email": "mpickerinj@npr.org",
                    "gender": "Female",
                    "age": 46,
                    "ip_address": "144.122.100.199"
                },
                {
                    "id": 21,
                    "full_name": "Alex Roofe",
                    "email": "aroofek@dot.gov",
                    "gender": "Genderqueer",
                    "age": 36,
                    "ip_address": "37.223.114.163"
                },
                {
                    "id": 22,
                    "full_name": "Terra Island",
                    "email": "tislandl@uol.com.br",
                    "gender": "Female",
                    "age": 22,
                    "ip_address": "126.163.127.25"
                },
                {
                    "id": 23,
                    "full_name": "Tori Brownsworth",
                    "email": "tbrownsworthm@rambler.ru",
                    "gender": "Non-binary",
                    "age": 20,
                    "ip_address": "201.227.179.158"
                },
                {
                    "id": 24,
                    "full_name": "Catarina Hatley",
                    "email": "chatleyn@infoseek.co.jp",
                    "gender": "Genderqueer",
                    "age": 38,
                    "ip_address": "192.10.24.5"
                },
                {
                    "id": 25,
                    "full_name": "Aliza Colebourn",
                    "email": "acolebourno@usgs.gov",
                    "gender": "Female",
                    "age": 25,
                    "ip_address": "185.127.44.144"
                },
                {
                    "id": 26,
                    "full_name": "Morry Yitzowitz",
                    "email": "myitzowitzp@canalblog.com",
                    "gender": "Male",
                    "age": 28,
                    "ip_address": "204.17.30.208"
                },
                {
                    "id": 27,
                    "full_name": "Gilburt Shatliffe",
                    "email": "gshatliffeq@facebook.com",
                    "gender": "Male",
                    "age": 34,
                    "ip_address": "168.14.66.106"
                },
                {
                    "id": 28,
                    "full_name": "Harman Aylin",
                    "email": "haylinr@icq.com",
                    "gender": "Male",
                    "age": 38,
                    "ip_address": "190.48.13.15"
                },
                {
                    "id": 29,
                    "full_name": "Otis Castan",
                    "email": "ocastans@dmoz.org",
                    "gender": "Male",
                    "age": 39,
                    "ip_address": "180.174.217.128"
                },
                {
                    "id": 30,
                    "full_name": "Gale Amys",
                    "email": "gamyst@facebook.com",
                    "gender": "Polygender",
                    "age": 40,
                    "ip_address": "79.177.140.249"
                },
                {
                    "id": 31,
                    "full_name": "Vito Petel",
                    "email": "vpetelu@indiatimes.com",
                    "gender": "Male",
                    "age": 34,
                    "ip_address": "60.170.96.152"
                },
                {
                    "id": 32,
                    "full_name": "Sydelle O'Kelly",
                    "email": "sokellyv@vk.com",
                    "gender": "Female",
                    "age": 42,
                    "ip_address": "190.148.146.121"
                },
                {
                    "id": 33,
                    "full_name": "Brooks Chippindale",
                    "email": "bchippindalew@feedburner.com",
                    "gender": "Male",
                    "age": 51,
                    "ip_address": "115.115.191.185"
                },
                {
                    "id": 34,
                    "full_name": "Uta Schuck",
                    "email": "uschuckx@mapquest.com",
                    "gender": "Female",
                    "age": 54,
                    "ip_address": "172.153.67.54"
                },
                {
                    "id": 35,
                    "full_name": "Helsa Proudlove",
                    "email": "hproudlovey@time.com",
                    "gender": "Female",
                    "age": 27,
                    "ip_address": "233.111.198.76"
                },
                {
                    "id": 36,
                    "full_name": "Jaquenette Kincade",
                    "email": "jkincadez@csmonitor.com",
                    "gender": "Female",
                    "age": 48,
                    "ip_address": "146.250.31.139"
                },
                {
                    "id": 37,
                    "full_name": "Mylo Dewey",
                    "email": "mdewey10@phpbb.com",
                    "gender": "Male",
                    "age": 39,
                    "ip_address": "96.20.117.59"
                },
                {
                    "id": 38,
                    "full_name": "Muffin Luckett",
                    "email": "mluckett11@i2i.jp",
                    "gender": "Male",
                    "age": 47,
                    "ip_address": "206.223.161.132"
                },
                {
                    "id": 39,
                    "full_name": "Guss Lightbourne",
                    "email": "glightbourne12@g.co",
                    "gender": "Male",
                    "age": 35,
                    "ip_address": "36.18.104.95"
                },
                {
                    "id": 40,
                    "full_name": "Jervis Murty",
                    "email": "jmurty13@xinhuanet.com",
                    "gender": "Male",
                    "age": 56,
                    "ip_address": "131.45.73.111"
                },
                {
                    "id": 41,
                    "full_name": "Elsinore Badrock",
                    "email": "ebadrock14@vkontakte.ru",
                    "gender": "Female",
                    "age": 52,
                    "ip_address": "238.5.63.182"
                },
                {
                    "id": 42,
                    "full_name": "Benton Udall",
                    "email": "budall15@geocities.jp",
                    "gender": "Male",
                    "age": 50,
                    "ip_address": "192.60.29.227"
                },
                {
                    "id": 43,
                    "full_name": "Talbert Rettie",
                    "email": "trettie16@booking.com",
                    "gender": "Male",
                    "age": 25,
                    "ip_address": "127.234.94.60"
                },
                {
                    "id": 44,
                    "full_name": "Dania Uzzell",
                    "email": "duzzell17@ning.com",
                    "gender": "Agender",
                    "age": 34,
                    "ip_address": "235.238.143.85"
                },
                {
                    "id": 45,
                    "full_name": "Kimmy Cornier",
                    "email": "kcornier18@hugedomains.com",
                    "gender": "Female",
                    "age": 21,
                    "ip_address": "112.252.160.31"
                },
                {
                    "id": 46,
                    "full_name": "Julius Kane",
                    "email": "jkane19@apple.com",
                    "gender": "Genderfluid",
                    "age": 24,
                    "ip_address": "83.245.248.180"
                },
                {
                    "id": 47,
                    "full_name": "Terrence Reuben",
                    "email": "treuben1a@soundcloud.com",
                    "gender": "Male",
                    "age": 60,
                    "ip_address": "248.68.70.42"
                },
                {
                    "id": 48,
                    "full_name": "Pieter Mowsdill",
                    "email": "pmowsdill1b@sphinn.com",
                    "gender": "Male",
                    "age": 44,
                    "ip_address": "6.120.50.206"
                },
                {
                    "id": 49,
                    "full_name": "Meaghan Drakard",
                    "email": "mdrakard1c@ft.com",
                    "gender": "Female",
                    "age": 60,
                    "ip_address": "94.155.158.127"
                },
                {
                    "id": 50,
                    "full_name": "King Fincken",
                    "email": "kfincken1d@mac.com",
                    "gender": "Male",
                    "age": 45,
                    "ip_address": "245.183.136.183"
                }
            ]
        );

        expect(data.where("id", "in", [1, 2, 3]).all()).toStrictEqual(
            [
                {
                    "id": 1,
                    "full_name": "Alla Blackster",
                    "email": "ablackster0@sitemeter.com",
                    "gender": "Polygender",
                    "age": 38,
                    "ip_address": "183.61.141.149"
                },
                {
                    "id": 2,
                    "full_name": "Bessie Hubbart",
                    "email": "bhubbart1@abc.net.au",
                    "gender": "Female",
                    "age": 20,
                    "ip_address": "102.122.163.55"
                },
                {
                    "id": 3,
                    "full_name": "Friederike Larby",
                    "email": "flarby2@netscape.com",
                    "gender": "Female",
                    "age": 46,
                    "ip_address": "155.229.153.173"
                }
            ]
        )

        expect(data.where("id", "not in", [1, 2, 3]).all()).toStrictEqual(
            [
                {
                    "id": 4,
                    "full_name": "Guthrie Storch",
                    "email": "gstorch3@bandcamp.com",
                    "gender": "Male",
                    "age": 25,
                    "ip_address": "109.237.74.237"
                },
                {
                    "id": 5,
                    "full_name": "Inger Laborde",
                    "email": "ilaborde4@statcounter.com",
                    "gender": "Female",
                    "age": 53,
                    "ip_address": "30.192.162.86"
                },
                {
                    "id": 6,
                    "full_name": "Wandie Austick",
                    "email": "waustick5@abc.net.au",
                    "gender": "Female",
                    "age": 29,
                    "ip_address": "95.221.224.182"
                },
                {
                    "id": 7,
                    "full_name": "Stewart Revely",
                    "email": "srevely6@ucoz.ru",
                    "gender": "Male",
                    "age": 44,
                    "ip_address": "222.83.61.84"
                },
                {
                    "id": 8,
                    "full_name": "Heath Dennerley",
                    "email": "hdennerley7@nifty.com",
                    "gender": "Male",
                    "age": 58,
                    "ip_address": "244.140.135.26"
                },
                {
                    "id": 9,
                    "full_name": "Emerson Roseby",
                    "email": "eroseby8@virginia.edu",
                    "gender": "Male",
                    "age": 20,
                    "ip_address": "89.11.71.183"
                },
                {
                    "id": 10,
                    "full_name": "Brander Kundt",
                    "email": "bkundt9@bloomberg.com",
                    "gender": "Male",
                    "age": 58,
                    "ip_address": "137.9.44.165"
                },
                {
                    "id": 11,
                    "full_name": "Gail Crates",
                    "email": "gcratesa@google.com.hk",
                    "gender": "Male",
                    "age": 24,
                    "ip_address": "178.63.36.103"
                },
                {
                    "id": 12,
                    "full_name": "Parrnell Tuny",
                    "email": "ptunyb@cornell.edu",
                    "gender": "Male",
                    "age": 37,
                    "ip_address": "89.124.198.167"
                },
                {
                    "id": 13,
                    "full_name": "Amalle Safhill",
                    "email": "asafhillc@patch.com",
                    "gender": "Female",
                    "age": 25,
                    "ip_address": "12.130.179.199"
                },
                {
                    "id": 14,
                    "full_name": "Carol Ahrend",
                    "email": "cahrendd@unc.edu",
                    "gender": "Female",
                    "age": 41,
                    "ip_address": "172.113.5.184"
                },
                {
                    "id": 15,
                    "full_name": "Brnaby McCheyne",
                    "email": "bmccheynee@dailymail.co.uk",
                    "gender": "Male",
                    "age": 50,
                    "ip_address": "1.42.172.237"
                },
                {
                    "id": 16,
                    "full_name": "Jayne Grannell",
                    "email": "jgrannellf@php.net",
                    "gender": "Female",
                    "age": 54,
                    "ip_address": "14.81.73.172"
                },
                {
                    "id": 17,
                    "full_name": "Nolly Tissier",
                    "email": "ntissierg@cyberchimps.com",
                    "gender": "Male",
                    "age": 60,
                    "ip_address": "254.57.101.2"
                },
                {
                    "id": 18,
                    "full_name": "Ev Saladin",
                    "email": "esaladinh@whitehouse.gov",
                    "gender": "Genderfluid",
                    "age": 48,
                    "ip_address": "10.111.31.51"
                },
                {
                    "id": 19,
                    "full_name": "Koral Rigglesford",
                    "email": "krigglesfordi@linkedin.com",
                    "gender": "Genderqueer",
                    "age": 20,
                    "ip_address": "46.146.80.11"
                },
                {
                    "id": 20,
                    "full_name": "Minette Pickerin",
                    "email": "mpickerinj@npr.org",
                    "gender": "Female",
                    "age": 46,
                    "ip_address": "144.122.100.199"
                },
                {
                    "id": 21,
                    "full_name": "Alex Roofe",
                    "email": "aroofek@dot.gov",
                    "gender": "Genderqueer",
                    "age": 36,
                    "ip_address": "37.223.114.163"
                },
                {
                    "id": 22,
                    "full_name": "Terra Island",
                    "email": "tislandl@uol.com.br",
                    "gender": "Female",
                    "age": 22,
                    "ip_address": "126.163.127.25"
                },
                {
                    "id": 23,
                    "full_name": "Tori Brownsworth",
                    "email": "tbrownsworthm@rambler.ru",
                    "gender": "Non-binary",
                    "age": 20,
                    "ip_address": "201.227.179.158"
                },
                {
                    "id": 24,
                    "full_name": "Catarina Hatley",
                    "email": "chatleyn@infoseek.co.jp",
                    "gender": "Genderqueer",
                    "age": 38,
                    "ip_address": "192.10.24.5"
                },
                {
                    "id": 25,
                    "full_name": "Aliza Colebourn",
                    "email": "acolebourno@usgs.gov",
                    "gender": "Female",
                    "age": 25,
                    "ip_address": "185.127.44.144"
                },
                {
                    "id": 26,
                    "full_name": "Morry Yitzowitz",
                    "email": "myitzowitzp@canalblog.com",
                    "gender": "Male",
                    "age": 28,
                    "ip_address": "204.17.30.208"
                },
                {
                    "id": 27,
                    "full_name": "Gilburt Shatliffe",
                    "email": "gshatliffeq@facebook.com",
                    "gender": "Male",
                    "age": 34,
                    "ip_address": "168.14.66.106"
                },
                {
                    "id": 28,
                    "full_name": "Harman Aylin",
                    "email": "haylinr@icq.com",
                    "gender": "Male",
                    "age": 38,
                    "ip_address": "190.48.13.15"
                },
                {
                    "id": 29,
                    "full_name": "Otis Castan",
                    "email": "ocastans@dmoz.org",
                    "gender": "Male",
                    "age": 39,
                    "ip_address": "180.174.217.128"
                },
                {
                    "id": 30,
                    "full_name": "Gale Amys",
                    "email": "gamyst@facebook.com",
                    "gender": "Polygender",
                    "age": 40,
                    "ip_address": "79.177.140.249"
                },
                {
                    "id": 31,
                    "full_name": "Vito Petel",
                    "email": "vpetelu@indiatimes.com",
                    "gender": "Male",
                    "age": 34,
                    "ip_address": "60.170.96.152"
                },
                {
                    "id": 32,
                    "full_name": "Sydelle O'Kelly",
                    "email": "sokellyv@vk.com",
                    "gender": "Female",
                    "age": 42,
                    "ip_address": "190.148.146.121"
                },
                {
                    "id": 33,
                    "full_name": "Brooks Chippindale",
                    "email": "bchippindalew@feedburner.com",
                    "gender": "Male",
                    "age": 51,
                    "ip_address": "115.115.191.185"
                },
                {
                    "id": 34,
                    "full_name": "Uta Schuck",
                    "email": "uschuckx@mapquest.com",
                    "gender": "Female",
                    "age": 54,
                    "ip_address": "172.153.67.54"
                },
                {
                    "id": 35,
                    "full_name": "Helsa Proudlove",
                    "email": "hproudlovey@time.com",
                    "gender": "Female",
                    "age": 27,
                    "ip_address": "233.111.198.76"
                },
                {
                    "id": 36,
                    "full_name": "Jaquenette Kincade",
                    "email": "jkincadez@csmonitor.com",
                    "gender": "Female",
                    "age": 48,
                    "ip_address": "146.250.31.139"
                },
                {
                    "id": 37,
                    "full_name": "Mylo Dewey",
                    "email": "mdewey10@phpbb.com",
                    "gender": "Male",
                    "age": 39,
                    "ip_address": "96.20.117.59"
                },
                {
                    "id": 38,
                    "full_name": "Muffin Luckett",
                    "email": "mluckett11@i2i.jp",
                    "gender": "Male",
                    "age": 47,
                    "ip_address": "206.223.161.132"
                },
                {
                    "id": 39,
                    "full_name": "Guss Lightbourne",
                    "email": "glightbourne12@g.co",
                    "gender": "Male",
                    "age": 35,
                    "ip_address": "36.18.104.95"
                },
                {
                    "id": 40,
                    "full_name": "Jervis Murty",
                    "email": "jmurty13@xinhuanet.com",
                    "gender": "Male",
                    "age": 56,
                    "ip_address": "131.45.73.111"
                },
                {
                    "id": 41,
                    "full_name": "Elsinore Badrock",
                    "email": "ebadrock14@vkontakte.ru",
                    "gender": "Female",
                    "age": 52,
                    "ip_address": "238.5.63.182"
                },
                {
                    "id": 42,
                    "full_name": "Benton Udall",
                    "email": "budall15@geocities.jp",
                    "gender": "Male",
                    "age": 50,
                    "ip_address": "192.60.29.227"
                },
                {
                    "id": 43,
                    "full_name": "Talbert Rettie",
                    "email": "trettie16@booking.com",
                    "gender": "Male",
                    "age": 25,
                    "ip_address": "127.234.94.60"
                },
                {
                    "id": 44,
                    "full_name": "Dania Uzzell",
                    "email": "duzzell17@ning.com",
                    "gender": "Agender",
                    "age": 34,
                    "ip_address": "235.238.143.85"
                },
                {
                    "id": 45,
                    "full_name": "Kimmy Cornier",
                    "email": "kcornier18@hugedomains.com",
                    "gender": "Female",
                    "age": 21,
                    "ip_address": "112.252.160.31"
                },
                {
                    "id": 46,
                    "full_name": "Julius Kane",
                    "email": "jkane19@apple.com",
                    "gender": "Genderfluid",
                    "age": 24,
                    "ip_address": "83.245.248.180"
                },
                {
                    "id": 47,
                    "full_name": "Terrence Reuben",
                    "email": "treuben1a@soundcloud.com",
                    "gender": "Male",
                    "age": 60,
                    "ip_address": "248.68.70.42"
                },
                {
                    "id": 48,
                    "full_name": "Pieter Mowsdill",
                    "email": "pmowsdill1b@sphinn.com",
                    "gender": "Male",
                    "age": 44,
                    "ip_address": "6.120.50.206"
                },
                {
                    "id": 49,
                    "full_name": "Meaghan Drakard",
                    "email": "mdrakard1c@ft.com",
                    "gender": "Female",
                    "age": 60,
                    "ip_address": "94.155.158.127"
                },
                {
                    "id": 50,
                    "full_name": "King Fincken",
                    "email": "kfincken1d@mac.com",
                    "gender": "Male",
                    "age": 45,
                    "ip_address": "245.183.136.183"
                }
            ]
        )
    })

    test("Check if operator not exist", () => {
        const data = new Iteract([1, 2, 3, 4]);
        const operator = "not likes";
        expect(() => data.where(operator, "jo").all()).toThrow("The operator does not exist");
    });

    test('Sorting data without key', () => {
        const data = new Iteract([4, 3, 2, 1]);
        expect(data.sort().all()).toStrictEqual([1, 2, 3, 4]);
        expect(data.sort(false).all()).toStrictEqual([4, 3, 2, 1]);
    });

    test('Sorting data with key', () => {
        const data = new Iteract(
            [
                {
                    "id": 1,
                    "full_name": "Alla Blackster",
                    "email": "ablackster0@sitemeter.com",
                    "gender": "Polygender",
                    "age": 38,
                    "ip_address": "183.61.141.149"
                }, {
                    "id": 2,
                    "full_name": "Bessie Hubbart",
                    "email": "bhubbart1@abc.net.au",
                    "gender": "Female",
                    "age": 20,
                    "ip_address": "102.122.163.55"
                }, {
                    "id": 3,
                    "full_name": "Friederike Larby",
                    "email": "flarby2@netscape.com",
                    "gender": "Female",
                    "age": 46,
                    "ip_address": "155.229.153.173"
                }
            ]
        )
        expect(data.sort(true, "id").all()).toStrictEqual(data.all());
        expect(data.sort(false, "id").all()).toStrictEqual(
            [
                {
                    "id": 3,
                    "full_name": "Friederike Larby",
                    "email": "flarby2@netscape.com",
                    "gender": "Female",
                    "age": 46,
                    "ip_address": "155.229.153.173"
                },
                {
                    "id": 2,
                    "full_name": "Bessie Hubbart",
                    "email": "bhubbart1@abc.net.au",
                    "gender": "Female",
                    "age": 20,
                    "ip_address": "102.122.163.55"
                },
                {
                    "id": 1,
                    "full_name": "Alla Blackster",
                    "email": "ablackster0@sitemeter.com",
                    "gender": "Polygender",
                    "age": 38,
                    "ip_address": "183.61.141.149"
                }
            ]
        );
    });

    test("Unique values without keys", () => {
        const data = new Iteract([1, 1, 2, 2, 3, 4]);
        expect(data.unique().all()).toStrictEqual([1, 2, 3, 4]);
    })

    test("Unique values with keys", () => {
        const data = new Iteract(
            [
                {
                    "id": 1,
                    "full_name": "Alla Blackster",
                    "email": "ablackster0@sitemeter.com",
                    "gender": "Polygender",
                    "age": 38,
                    "ip_address": "183.61.141.149"
                },
                {
                    "id": 2,
                    "full_name": "Bessie Hubbart",
                    "email": "bhubbart1@abc.net.au",
                    "gender": "Female",
                    "age": 20,
                    "ip_address": "102.122.163.55"
                },
                {
                    "id": 3,
                    "full_name": "Friederike Larby",
                    "email": "flarby2@netscape.com",
                    "gender": "Female",
                    "age": 46,
                    "ip_address": "155.229.153.173"
                },
                {
                    "id": 4,
                    "full_name": "Guthrie Storch",
                    "email": "gstorch3@bandcamp.com",
                    "gender": "Male",
                    "age": 25,
                    "ip_address": "109.237.74.237"
                },
                {
                    "id": 5,
                    "full_name": "Inger Laborde",
                    "email": "ilaborde4@statcounter.com",
                    "gender": "Female",
                    "age": 53,
                    "ip_address": "30.192.162.86"
                },
                {
                    "id": 6,
                    "full_name": "Wandie Austick",
                    "email": "waustick5@abc.net.au",
                    "gender": "Female",
                    "age": 29,
                    "ip_address": "95.221.224.182"
                },
            ]
        );
        expect(data.unique("gender").all()).toStrictEqual(
            [
                {
                    id: 1,
                    full_name: 'Alla Blackster',
                    email: 'ablackster0@sitemeter.com',
                    gender: 'Polygender',
                    age: 38,
                    ip_address: '183.61.141.149'
                },
                {
                    id: 2,
                    full_name: 'Bessie Hubbart',
                    email: 'bhubbart1@abc.net.au',
                    gender: 'Female',
                    age: 20,
                    ip_address: '102.122.163.55'
                },
                {
                    id: 4,
                    full_name: 'Guthrie Storch',
                    email: 'gstorch3@bandcamp.com',
                    gender: 'Male',
                    age: 25,
                    ip_address: '109.237.74.237'
                }
            ]
        );
    });

    test('Pushing value', () => {
        const data = new Iteract();
        expect(data.push(1).all()).toStrictEqual([1]);
        data.pop();
        expect(data.push({ id: 1, name: "bagas" }).all()).toStrictEqual([{ id: 1, name: "bagas" }]);
    });

    test('Pooping value', () => {
        const data = new Iteract();
        expect(data.push(1).all()).toStrictEqual([1]);
        expect(data.pop()).toBe(1);
        expect(data.push({ id: 1, name: "bagas" }).all()).toStrictEqual([{ id: 1, name: "bagas" }]);
        expect(data.pop()).toStrictEqual({ id: 1, name: "bagas" });
    });

    test('Show length of the array', () => {
        const data = new Iteract([1, 2, 3, 4]);
        expect(data.length()).toBe(4);
    });

    test('Check if array contains specific key', () => {
        const data = new Iteract({
            id: 1,
            name: "bagas",
        });
        expect(data.has("name")).toBe(true);
    });

    test('Check if array not contains specific key', () => {
        const data = new Iteract({
            id: 1,
            name: "bagas",
        });
        expect(data.has("test")).toBe(false);
    });

    test('Check if array contains any keys', () => {
        const data = new Iteract({
            id: 1,
            name: "bagas",
        });
        expect(data.hasKeys()).toBe(true);
    });

    test('Check if array contains any keys', () => {
        const data = new Iteract([1, 2, 3, 4]);
        expect(data.hasKeys()).toBe(false);
    });

    test('Get first and last element', () => {
        const data = new Iteract([1, 2, 3, 4]);
        const dataObject = new Iteract([{
            id: 1,
            name: "bagas",
        }, {
            id: 2,
            name: "joko",
        }]);
        expect(data.first()).toBe(1);
        expect(data.last()).toBe(4);
        expect(dataObject.first()).toStrictEqual({
            id: 1,
            name: "bagas",
        });
        expect(dataObject.last()).toStrictEqual({
            id: 2,
            name: "joko",
        });
    });

    test('Get Json from API', async () => {
        const fetchData = await Iteract.fromAsync("https://dummyjson.com/carts");
        expect(JSON.stringify(fetchData.first())).toBe(JSON.stringify({
            "carts": [
                {
                    "id": 1,
                    "products": [
                        {
                            "id": 59,
                            "title": "Spring and summershoes",
                            "price": 20,
                            "quantity": 3,
                            "total": 60,
                            "discountPercentage": 8.71,
                            "discountedPrice": 55
                        },
                        {
                            "id": 88,
                            "title": "TC Reusable Silicone Magic Washing Gloves",
                            "price": 29,
                            "quantity": 2,
                            "total": 58,
                            "discountPercentage": 3.19,
                            "discountedPrice": 56
                        },
                        {
                            "id": 18,
                            "title": "Oil Free Moisturizer 100ml",
                            "price": 40,
                            "quantity": 2,
                            "total": 80,
                            "discountPercentage": 13.1,
                            "discountedPrice": 70
                        },
                        {
                            "id": 95,
                            "title": "Wholesale cargo lashing Belt",
                            "price": 930,
                            "quantity": 1,
                            "total": 930,
                            "discountPercentage": 17.67,
                            "discountedPrice": 766
                        },
                        {
                            "id": 39,
                            "title": "Women Sweaters Wool",
                            "price": 600,
                            "quantity": 2,
                            "total": 1200,
                            "discountPercentage": 17.2,
                            "discountedPrice": 994
                        }
                    ],
                    "total": 2328,
                    "discountedTotal": 1941,
                    "userId": 97,
                    "totalProducts": 5,
                    "totalQuantity": 10
                },
                {
                    "id": 2,
                    "products": [
                        {
                            "id": 96,
                            "title": "lighting ceiling kitchen",
                            "price": 30,
                            "quantity": 2,
                            "total": 60,
                            "discountPercentage": 14.89,
                            "discountedPrice": 51
                        },
                        {
                            "id": 91,
                            "title": "Black Motorbike",
                            "price": 569,
                            "quantity": 3,
                            "total": 1707,
                            "discountPercentage": 13.63,
                            "discountedPrice": 1474
                        },
                        {
                            "id": 9,
                            "title": "Infinix INBOOK",
                            "price": 1099,
                            "quantity": 1,
                            "total": 1099,
                            "discountPercentage": 11.83,
                            "discountedPrice": 969
                        },
                        {
                            "id": 16,
                            "title": "Hyaluronic Acid Serum",
                            "price": 19,
                            "quantity": 1,
                            "total": 19,
                            "discountPercentage": 13.31,
                            "discountedPrice": 16
                        },
                        {
                            "id": 54,
                            "title": "Pubg Printed Graphic T-Shirt",
                            "price": 46,
                            "quantity": 3,
                            "total": 138,
                            "discountPercentage": 16.44,
                            "discountedPrice": 115
                        }
                    ],
                    "total": 3023,
                    "discountedTotal": 2625,
                    "userId": 30,
                    "totalProducts": 5,
                    "totalQuantity": 10
                },
                {
                    "id": 3,
                    "products": [
                        {
                            "id": 37,
                            "title": "ank Tops for Womens/Girls",
                            "price": 50,
                            "quantity": 2,
                            "total": 100,
                            "discountPercentage": 12.05,
                            "discountedPrice": 88
                        },
                        {
                            "id": 80,
                            "title": "Chain Pin Tassel Earrings",
                            "price": 45,
                            "quantity": 3,
                            "total": 135,
                            "discountPercentage": 17.75,
                            "discountedPrice": 111
                        },
                        {
                            "id": 68,
                            "title": "Stylish Luxury Digital Watch",
                            "price": 57,
                            "quantity": 3,
                            "total": 171,
                            "discountPercentage": 9.03,
                            "discountedPrice": 156
                        },
                        {
                            "id": 81,
                            "title": "Round Silver Frame Sun Glasses",
                            "price": 19,
                            "quantity": 1,
                            "total": 19,
                            "discountPercentage": 10.1,
                            "discountedPrice": 17
                        },
                        {
                            "id": 90,
                            "title": "Cycle Bike Glow",
                            "price": 35,
                            "quantity": 1,
                            "total": 35,
                            "discountPercentage": 11.08,
                            "discountedPrice": 31
                        }
                    ],
                    "total": 460,
                    "discountedTotal": 403,
                    "userId": 63,
                    "totalProducts": 5,
                    "totalQuantity": 10
                },
                {
                    "id": 4,
                    "products": [
                        {
                            "id": 36,
                            "title": "Sleeve Shirt Womens",
                            "price": 90,
                            "quantity": 1,
                            "total": 90,
                            "discountPercentage": 10.89,
                            "discountedPrice": 80
                        },
                        {
                            "id": 54,
                            "title": "Pubg Printed Graphic T-Shirt",
                            "price": 46,
                            "quantity": 1,
                            "total": 46,
                            "discountPercentage": 16.44,
                            "discountedPrice": 38
                        },
                        {
                            "id": 11,
                            "title": "perfume Oil",
                            "price": 13,
                            "quantity": 3,
                            "total": 39,
                            "discountPercentage": 8.4,
                            "discountedPrice": 36
                        },
                        {
                            "id": 47,
                            "title": "Sneaker shoes",
                            "price": 120,
                            "quantity": 2,
                            "total": 240,
                            "discountPercentage": 10.37,
                            "discountedPrice": 215
                        },
                        {
                            "id": 64,
                            "title": "Leather Strap Skeleton Watch",
                            "price": 46,
                            "quantity": 3,
                            "total": 138,
                            "discountPercentage": 10.2,
                            "discountedPrice": 124
                        }
                    ],
                    "total": 553,
                    "discountedTotal": 493,
                    "userId": 83,
                    "totalProducts": 5,
                    "totalQuantity": 10
                },
                {
                    "id": 5,
                    "products": [
                        {
                            "id": 23,
                            "title": "Orange Essence Food Flavou",
                            "price": 14,
                            "quantity": 3,
                            "total": 42,
                            "discountPercentage": 8.04,
                            "discountedPrice": 39
                        },
                        {
                            "id": 91,
                            "title": "Black Motorbike",
                            "price": 569,
                            "quantity": 1,
                            "total": 569,
                            "discountPercentage": 13.63,
                            "discountedPrice": 491
                        },
                        {
                            "id": 45,
                            "title": "Malai Maxi Dress",
                            "price": 50,
                            "quantity": 2,
                            "total": 100,
                            "discountPercentage": 5.07,
                            "discountedPrice": 95
                        },
                        {
                            "id": 84,
                            "title": "Square Sunglasses",
                            "price": 28,
                            "quantity": 1,
                            "total": 28,
                            "discountPercentage": 13.89,
                            "discountedPrice": 24
                        },
                        {
                            "id": 70,
                            "title": "Stainless Steel Women",
                            "price": 35,
                            "quantity": 3,
                            "total": 105,
                            "discountPercentage": 8.98,
                            "discountedPrice": 96
                        }
                    ],
                    "total": 844,
                    "discountedTotal": 745,
                    "userId": 58,
                    "totalProducts": 5,
                    "totalQuantity": 10
                },
                {
                    "id": 6,
                    "products": [
                        {
                            "id": 53,
                            "title": "printed high quality T shirts",
                            "price": 35,
                            "quantity": 3,
                            "total": 105,
                            "discountPercentage": 7.54,
                            "discountedPrice": 97
                        },
                        {
                            "id": 61,
                            "title": "Leather Straps Wristwatch",
                            "price": 120,
                            "quantity": 2,
                            "total": 240,
                            "discountPercentage": 7.14,
                            "discountedPrice": 223
                        },
                        {
                            "id": 92,
                            "title": "HOT SALE IN EUROPE electric racing motorcycle",
                            "price": 920,
                            "quantity": 1,
                            "total": 920,
                            "discountPercentage": 14.4,
                            "discountedPrice": 788
                        },
                        {
                            "id": 11,
                            "title": "perfume Oil",
                            "price": 13,
                            "quantity": 3,
                            "total": 39,
                            "discountPercentage": 8.4,
                            "discountedPrice": 36
                        },
                        {
                            "id": 37,
                            "title": "ank Tops for Womens/Girls",
                            "price": 50,
                            "quantity": 3,
                            "total": 150,
                            "discountPercentage": 12.05,
                            "discountedPrice": 132
                        }
                    ],
                    "total": 1454,
                    "discountedTotal": 1276,
                    "userId": 26,
                    "totalProducts": 5,
                    "totalQuantity": 12
                },
                {
                    "id": 7,
                    "products": [
                        {
                            "id": 61,
                            "title": "Leather Straps Wristwatch",
                            "price": 120,
                            "quantity": 1,
                            "total": 120,
                            "discountPercentage": 7.14,
                            "discountedPrice": 111
                        },
                        {
                            "id": 80,
                            "title": "Chain Pin Tassel Earrings",
                            "price": 45,
                            "quantity": 2,
                            "total": 90,
                            "discountPercentage": 17.75,
                            "discountedPrice": 74
                        },
                        {
                            "id": 99,
                            "title": "American Vintage Wood Pendant Light",
                            "price": 46,
                            "quantity": 3,
                            "total": 138,
                            "discountPercentage": 8.84,
                            "discountedPrice": 126
                        },
                        {
                            "id": 14,
                            "title": "Non-Alcoholic Concentrated Perfume Oil",
                            "price": 120,
                            "quantity": 1,
                            "total": 120,
                            "discountPercentage": 15.6,
                            "discountedPrice": 101
                        },
                        {
                            "id": 48,
                            "title": "Women Strip Heel",
                            "price": 40,
                            "quantity": 3,
                            "total": 120,
                            "discountPercentage": 10.83,
                            "discountedPrice": 107
                        }
                    ],
                    "total": 588,
                    "discountedTotal": 519,
                    "userId": 56,
                    "totalProducts": 5,
                    "totalQuantity": 10
                },
                {
                    "id": 8,
                    "products": [
                        {
                            "id": 45,
                            "title": "Malai Maxi Dress",
                            "price": 50,
                            "quantity": 1,
                            "total": 50,
                            "discountPercentage": 5.07,
                            "discountedPrice": 47
                        },
                        {
                            "id": 83,
                            "title": "Wiley X Night Vision Yellow Glasses",
                            "price": 30,
                            "quantity": 3,
                            "total": 90,
                            "discountPercentage": 6.33,
                            "discountedPrice": 84
                        },
                        {
                            "id": 96,
                            "title": "lighting ceiling kitchen",
                            "price": 30,
                            "quantity": 1,
                            "total": 30,
                            "discountPercentage": 14.89,
                            "discountedPrice": 26
                        },
                        {
                            "id": 21,
                            "title": "- Daal Masoor 500 grams",
                            "price": 20,
                            "quantity": 3,
                            "total": 60,
                            "discountPercentage": 4.81,
                            "discountedPrice": 57
                        },
                        {
                            "id": 2,
                            "title": "iphone X",
                            "price": 899,
                            "quantity": 1,
                            "total": 899,
                            "discountPercentage": 17.94,
                            "discountedPrice": 738
                        }
                    ],
                    "total": 1129,
                    "discountedTotal": 952,
                    "userId": 1,
                    "totalProducts": 5,
                    "totalQuantity": 9
                },
                {
                    "id": 9,
                    "products": [
                        {
                            "id": 74,
                            "title": "Leather Hand Bag",
                            "price": 57,
                            "quantity": 3,
                            "total": 171,
                            "discountPercentage": 11.19,
                            "discountedPrice": 152
                        },
                        {
                            "id": 10,
                            "title": "HP Pavilion 15-DK1056WM",
                            "price": 1099,
                            "quantity": 3,
                            "total": 3297,
                            "discountPercentage": 6.18,
                            "discountedPrice": 3093
                        },
                        {
                            "id": 19,
                            "title": "Skin Beauty Serum.",
                            "price": 46,
                            "quantity": 2,
                            "total": 92,
                            "discountPercentage": 10.68,
                            "discountedPrice": 82
                        },
                        {
                            "id": 53,
                            "title": "printed high quality T shirts",
                            "price": 35,
                            "quantity": 1,
                            "total": 35,
                            "discountPercentage": 7.54,
                            "discountedPrice": 32
                        },
                        {
                            "id": 13,
                            "title": "Fog Scent Xpressio Perfume",
                            "price": 13,
                            "quantity": 1,
                            "total": 13,
                            "discountPercentage": 8.14,
                            "discountedPrice": 12
                        }
                    ],
                    "total": 3608,
                    "discountedTotal": 3371,
                    "userId": 91,
                    "totalProducts": 5,
                    "totalQuantity": 10
                },
                {
                    "id": 10,
                    "products": [
                        {
                            "id": 75,
                            "title": "Seven Pocket Women Bag",
                            "price": 68,
                            "quantity": 1,
                            "total": 68,
                            "discountPercentage": 14.87,
                            "discountedPrice": 58
                        },
                        {
                            "id": 39,
                            "title": "Women Sweaters Wool",
                            "price": 600,
                            "quantity": 1,
                            "total": 600,
                            "discountPercentage": 17.2,
                            "discountedPrice": 497
                        },
                        {
                            "id": 3,
                            "title": "Samsung Universe 9",
                            "price": 1249,
                            "quantity": 3,
                            "total": 3747,
                            "discountPercentage": 15.46,
                            "discountedPrice": 3168
                        },
                        {
                            "id": 7,
                            "title": "Samsung Galaxy Book",
                            "price": 1499,
                            "quantity": 1,
                            "total": 1499,
                            "discountPercentage": 4.15,
                            "discountedPrice": 1437
                        },
                        {
                            "id": 93,
                            "title": "Automatic Motor Gas Motorcycles",
                            "price": 1050,
                            "quantity": 3,
                            "total": 3150,
                            "discountPercentage": 3.34,
                            "discountedPrice": 3045
                        }
                    ],
                    "total": 9064,
                    "discountedTotal": 8205,
                    "userId": 13,
                    "totalProducts": 5,
                    "totalQuantity": 9
                },
                {
                    "id": 11,
                    "products": [
                        {
                            "id": 71,
                            "title": "Women Shoulder Bags",
                            "price": 46,
                            "quantity": 3,
                            "total": 138,
                            "discountPercentage": 14.65,
                            "discountedPrice": 118
                        },
                        {
                            "id": 25,
                            "title": "Gulab Powder 50 Gram",
                            "price": 70,
                            "quantity": 2,
                            "total": 140,
                            "discountPercentage": 13.58,
                            "discountedPrice": 121
                        },
                        {
                            "id": 65,
                            "title": "Stainless Steel Wrist Watch",
                            "price": 47,
                            "quantity": 3,
                            "total": 141,
                            "discountPercentage": 17.79,
                            "discountedPrice": 116
                        },
                        {
                            "id": 58,
                            "title": "formal offices shoes",
                            "price": 57,
                            "quantity": 1,
                            "total": 57,
                            "discountPercentage": 12,
                            "discountedPrice": 50
                        },
                        {
                            "id": 53,
                            "title": "printed high quality T shirts",
                            "price": 35,
                            "quantity": 3,
                            "total": 105,
                            "discountPercentage": 7.54,
                            "discountedPrice": 97
                        }
                    ],
                    "total": 581,
                    "discountedTotal": 502,
                    "userId": 66,
                    "totalProducts": 5,
                    "totalQuantity": 12
                },
                {
                    "id": 12,
                    "products": [
                        {
                            "id": 32,
                            "title": "Sofa for Coffe Cafe",
                            "price": 50,
                            "quantity": 2,
                            "total": 100,
                            "discountPercentage": 15.59,
                            "discountedPrice": 84
                        },
                        {
                            "id": 41,
                            "title": "NIGHT SUIT",
                            "price": 55,
                            "quantity": 3,
                            "total": 165,
                            "discountPercentage": 15.05,
                            "discountedPrice": 140
                        },
                        {
                            "id": 69,
                            "title": "Golden Watch Pearls Bracelet Watch",
                            "price": 47,
                            "quantity": 1,
                            "total": 47,
                            "discountPercentage": 17.55,
                            "discountedPrice": 39
                        },
                        {
                            "id": 98,
                            "title": "3 lights lndenpant kitchen islang",
                            "price": 34,
                            "quantity": 3,
                            "total": 102,
                            "discountPercentage": 5.92,
                            "discountedPrice": 96
                        },
                        {
                            "id": 67,
                            "title": "Fashion Magnetic Wrist Watch",
                            "price": 60,
                            "quantity": 2,
                            "total": 120,
                            "discountPercentage": 16.69,
                            "discountedPrice": 100
                        }
                    ],
                    "total": 534,
                    "discountedTotal": 459,
                    "userId": 52,
                    "totalProducts": 5,
                    "totalQuantity": 11
                },
                {
                    "id": 13,
                    "products": [
                        {
                            "id": 81,
                            "title": "Round Silver Frame Sun Glasses",
                            "price": 19,
                            "quantity": 1,
                            "total": 19,
                            "discountPercentage": 10.1,
                            "discountedPrice": 17
                        },
                        {
                            "id": 42,
                            "title": "Stiched Kurta plus trouser",
                            "price": 80,
                            "quantity": 2,
                            "total": 160,
                            "discountPercentage": 15.37,
                            "discountedPrice": 135
                        },
                        {
                            "id": 29,
                            "title": "Handcraft Chinese style",
                            "price": 60,
                            "quantity": 3,
                            "total": 180,
                            "discountPercentage": 15.34,
                            "discountedPrice": 152
                        },
                        {
                            "id": 64,
                            "title": "Leather Strap Skeleton Watch",
                            "price": 46,
                            "quantity": 2,
                            "total": 92,
                            "discountPercentage": 10.2,
                            "discountedPrice": 83
                        },
                        {
                            "id": 54,
                            "title": "Pubg Printed Graphic T-Shirt",
                            "price": 46,
                            "quantity": 1,
                            "total": 46,
                            "discountPercentage": 16.44,
                            "discountedPrice": 38
                        }
                    ],
                    "total": 497,
                    "discountedTotal": 425,
                    "userId": 79,
                    "totalProducts": 5,
                    "totalQuantity": 9
                },
                {
                    "id": 14,
                    "products": [
                        {
                            "id": 64,
                            "title": "Leather Strap Skeleton Watch",
                            "price": 46,
                            "quantity": 2,
                            "total": 92,
                            "discountPercentage": 10.2,
                            "discountedPrice": 83
                        },
                        {
                            "id": 76,
                            "title": "Silver Ring Set Women",
                            "price": 70,
                            "quantity": 2,
                            "total": 140,
                            "discountPercentage": 13.57,
                            "discountedPrice": 121
                        },
                        {
                            "id": 30,
                            "title": "Key Holder",
                            "price": 30,
                            "quantity": 2,
                            "total": 60,
                            "discountPercentage": 2.92,
                            "discountedPrice": 58
                        },
                        {
                            "id": 88,
                            "title": "TC Reusable Silicone Magic Washing Gloves",
                            "price": 29,
                            "quantity": 1,
                            "total": 29,
                            "discountPercentage": 3.19,
                            "discountedPrice": 28
                        },
                        {
                            "id": 94,
                            "title": "new arrivals Fashion motocross goggles",
                            "price": 900,
                            "quantity": 2,
                            "total": 1800,
                            "discountPercentage": 3.85,
                            "discountedPrice": 1731
                        }
                    ],
                    "total": 2121,
                    "discountedTotal": 2021,
                    "userId": 76,
                    "totalProducts": 5,
                    "totalQuantity": 9
                },
                {
                    "id": 15,
                    "products": [
                        {
                            "id": 4,
                            "title": "OPPOF19",
                            "price": 280,
                            "quantity": 1,
                            "total": 280,
                            "discountPercentage": 17.91,
                            "discountedPrice": 230
                        },
                        {
                            "id": 100,
                            "title": "Crystal chandelier maria theresa for 12 light",
                            "price": 47,
                            "quantity": 3,
                            "total": 141,
                            "discountPercentage": 16,
                            "discountedPrice": 118
                        },
                        {
                            "id": 1,
                            "title": "iPhone 9",
                            "price": 549,
                            "quantity": 2,
                            "total": 1098,
                            "discountPercentage": 12.96,
                            "discountedPrice": 956
                        },
                        {
                            "id": 48,
                            "title": "Women Strip Heel",
                            "price": 40,
                            "quantity": 3,
                            "total": 120,
                            "discountPercentage": 10.83,
                            "discountedPrice": 107
                        },
                        {
                            "id": 94,
                            "title": "new arrivals Fashion motocross goggles",
                            "price": 900,
                            "quantity": 3,
                            "total": 2700,
                            "discountPercentage": 3.85,
                            "discountedPrice": 2596
                        }
                    ],
                    "total": 4339,
                    "discountedTotal": 4007,
                    "userId": 47,
                    "totalProducts": 5,
                    "totalQuantity": 12
                },
                {
                    "id": 16,
                    "products": [
                        {
                            "id": 3,
                            "title": "Samsung Universe 9",
                            "price": 1249,
                            "quantity": 3,
                            "total": 3747,
                            "discountPercentage": 15.46,
                            "discountedPrice": 3168
                        },
                        {
                            "id": 50,
                            "title": "Women Shoes",
                            "price": 36,
                            "quantity": 3,
                            "total": 108,
                            "discountPercentage": 16.87,
                            "discountedPrice": 90
                        },
                        {
                            "id": 67,
                            "title": "Fashion Magnetic Wrist Watch",
                            "price": 60,
                            "quantity": 2,
                            "total": 120,
                            "discountPercentage": 16.69,
                            "discountedPrice": 100
                        },
                        {
                            "id": 86,
                            "title": "Bluetooth Aux",
                            "price": 25,
                            "quantity": 1,
                            "total": 25,
                            "discountPercentage": 10.56,
                            "discountedPrice": 22
                        },
                        {
                            "id": 12,
                            "title": "Brown Perfume",
                            "price": 40,
                            "quantity": 1,
                            "total": 40,
                            "discountPercentage": 15.66,
                            "discountedPrice": 34
                        }
                    ],
                    "total": 4040,
                    "discountedTotal": 3414,
                    "userId": 15,
                    "totalProducts": 5,
                    "totalQuantity": 10
                },
                {
                    "id": 17,
                    "products": [
                        {
                            "id": 12,
                            "title": "Brown Perfume",
                            "price": 40,
                            "quantity": 3,
                            "total": 120,
                            "discountPercentage": 15.66,
                            "discountedPrice": 101
                        },
                        {
                            "id": 25,
                            "title": "Gulab Powder 50 Gram",
                            "price": 70,
                            "quantity": 1,
                            "total": 70,
                            "discountPercentage": 13.58,
                            "discountedPrice": 60
                        },
                        {
                            "id": 24,
                            "title": "cereals muesli fruit nuts",
                            "price": 46,
                            "quantity": 2,
                            "total": 92,
                            "discountPercentage": 16.8,
                            "discountedPrice": 77
                        },
                        {
                            "id": 90,
                            "title": "Cycle Bike Glow",
                            "price": 35,
                            "quantity": 1,
                            "total": 35,
                            "discountPercentage": 11.08,
                            "discountedPrice": 31
                        },
                        {
                            "id": 97,
                            "title": "Metal Ceramic Flower",
                            "price": 35,
                            "quantity": 1,
                            "total": 35,
                            "discountPercentage": 10.94,
                            "discountedPrice": 31
                        }
                    ],
                    "total": 352,
                    "discountedTotal": 300,
                    "userId": 56,
                    "totalProducts": 5,
                    "totalQuantity": 8
                },
                {
                    "id": 18,
                    "products": [
                        {
                            "id": 23,
                            "title": "Orange Essence Food Flavou",
                            "price": 14,
                            "quantity": 2,
                            "total": 28,
                            "discountPercentage": 8.04,
                            "discountedPrice": 26
                        },
                        {
                            "id": 25,
                            "title": "Gulab Powder 50 Gram",
                            "price": 70,
                            "quantity": 2,
                            "total": 140,
                            "discountPercentage": 13.58,
                            "discountedPrice": 121
                        },
                        {
                            "id": 9,
                            "title": "Infinix INBOOK",
                            "price": 1099,
                            "quantity": 2,
                            "total": 2198,
                            "discountPercentage": 11.83,
                            "discountedPrice": 1938
                        },
                        {
                            "id": 78,
                            "title": "Rhinestone Korean Style Open Rings",
                            "price": 30,
                            "quantity": 2,
                            "total": 60,
                            "discountPercentage": 8.02,
                            "discountedPrice": 55
                        },
                        {
                            "id": 63,
                            "title": "Royal Blue Premium Watch",
                            "price": 50,
                            "quantity": 1,
                            "total": 50,
                            "discountPercentage": 2.56,
                            "discountedPrice": 49
                        }
                    ],
                    "total": 2476,
                    "discountedTotal": 2189,
                    "userId": 42,
                    "totalProducts": 5,
                    "totalQuantity": 9
                },
                {
                    "id": 19,
                    "products": [
                        {
                            "id": 43,
                            "title": "frock gold printed",
                            "price": 600,
                            "quantity": 3,
                            "total": 1800,
                            "discountPercentage": 15.55,
                            "discountedPrice": 1520
                        },
                        {
                            "id": 77,
                            "title": "Rose Ring",
                            "price": 100,
                            "quantity": 3,
                            "total": 300,
                            "discountPercentage": 3.22,
                            "discountedPrice": 290
                        },
                        {
                            "id": 50,
                            "title": "Women Shoes",
                            "price": 36,
                            "quantity": 3,
                            "total": 108,
                            "discountPercentage": 16.87,
                            "discountedPrice": 90
                        },
                        {
                            "id": 31,
                            "title": "Mornadi Velvet Bed",
                            "price": 40,
                            "quantity": 2,
                            "total": 80,
                            "discountPercentage": 17,
                            "discountedPrice": 66
                        },
                        {
                            "id": 75,
                            "title": "Seven Pocket Women Bag",
                            "price": 68,
                            "quantity": 3,
                            "total": 204,
                            "discountPercentage": 14.87,
                            "discountedPrice": 174
                        }
                    ],
                    "total": 2492,
                    "discountedTotal": 2140,
                    "userId": 5,
                    "totalProducts": 5,
                    "totalQuantity": 14
                },
                {
                    "id": 20,
                    "products": [
                        {
                            "id": 66,
                            "title": "Steel Analog Couple Watches",
                            "price": 35,
                            "quantity": 3,
                            "total": 105,
                            "discountPercentage": 3.23,
                            "discountedPrice": 102
                        },
                        {
                            "id": 59,
                            "title": "Spring and summershoes",
                            "price": 20,
                            "quantity": 1,
                            "total": 20,
                            "discountPercentage": 8.71,
                            "discountedPrice": 18
                        },
                        {
                            "id": 29,
                            "title": "Handcraft Chinese style",
                            "price": 60,
                            "quantity": 1,
                            "total": 60,
                            "discountPercentage": 15.34,
                            "discountedPrice": 51
                        },
                        {
                            "id": 32,
                            "title": "Sofa for Coffe Cafe",
                            "price": 50,
                            "quantity": 1,
                            "total": 50,
                            "discountPercentage": 15.59,
                            "discountedPrice": 42
                        },
                        {
                            "id": 46,
                            "title": "women's shoes",
                            "price": 40,
                            "quantity": 2,
                            "total": 80,
                            "discountPercentage": 16.96,
                            "discountedPrice": 66
                        }
                    ],
                    "total": 315,
                    "discountedTotal": 279,
                    "userId": 75,
                    "totalProducts": 5,
                    "totalQuantity": 8
                }
            ],
            "total": 20,
            "skip": 0,
            "limit": 20
        }));
    });

    test("Error while getting json from API", async () => {
        try {
            await Iteract.fromAsync("https://dummyjson.com/ca");
        } catch (e) {
            expect(e).toEqual(new Error("Fetching data failed"));
        }
    })


    test("values function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        expect(objectData.values().all()).toStrictEqual([
            "foo", 20,
            "bagas", 25,
            "bar", 25,
            "alex", 30,
            "joko", 15,
            "dafli", 55,
            "sutra", 35,
        ]);
    });

    test("keys function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        expect(objectData.keys().all()).toStrictEqual(["name", "age"]);
    });

    test("isEmpty function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        const emptyData = new Iteract();
        expect(emptyData.isEmpty()).toBe(true);
        expect(objectData.isEmpty()).toBe(false);
    });

    test("isNotEmpty function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        const emptyData = new Iteract();
        expect(emptyData.isNotEmpty()).toBe(false);
        expect(objectData.isNotEmpty()).toBe(true);
    });

    test("contains function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        const data = new Iteract([1, 2, 3, 4]);
        expect(data.contains(item => item == 1)).toBe(true);
        expect(data.contains(item => item == 10)).toBe(false);
        expect(objectData.contains(item => item.age > 30)).toStrictEqual(true);
        expect(objectData.contains(item => item.age > 60)).toStrictEqual(false);
    });

    test("lengthBy function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        const data = new Iteract([1, 2, 2, 3, 4, 4, 4, 3, 4]);
        expect(data.lengthBy()).toStrictEqual({ "1": 1, "2": 2, "3": 2, "4": 4 });
        expect(objectData.lengthBy(item => item.age)).toStrictEqual({ "15": 1, "20": 1, "25": 2, "30": 1, "35": 1, "55": 1 });
        expect(objectData.lengthBy(item => item.name.substring(0, 2))).toStrictEqual({ "al": 1, "ba": 2, "da": 1, "fo": 1, "jo": 1, "su": 1 });
    });

    test("merge function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bar", age: 20 },
        ]);
        const data = new Iteract([1, 2, 3, 4]);
        // console.log(data.merge([5, 6, 7, 8]));
        expect(data.merge([5, 6, 7, 8]).all()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(objectData.merge([{ name: "bagas", gender: "Male" }]).all()).toStrictEqual([{ name: 'bagas', age: 20, gender: 'Male' }, { name: "bar", age: 20 }]);
        expect(objectData.merge([{}, { gender: "Female" }]).all()).toStrictEqual([{ name: 'bagas', age: 20, gender: 'Male' }, { name: "bar", gender: 'Female', age: 20 }]);
        expect(() => objectData.merge(123).all()).toThrow("Parameter must passing the array values.");
    });

    test("mergeRecursive function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bar", age: 20 },
        ]);
        // const data = new Iteract([1, 2, 3, 4]);
        expect(objectData.mergeRecursive([{ name: "bagas" }, { age: [19, 20, 21] }]).all()).toStrictEqual([
            { name: ['foo', 'bagas'], age: 20 },
            { name: 'bar', age: [20, 19, 20, 21] }
        ]);
        expect(() => objectData.merge(123).all()).toThrow("Parameter must passing the array values.");
    });

    test("values function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        expect(objectData.values().all()).toStrictEqual([
            "foo", 20,
            "bagas", 25,
            "bar", 25,
            "alex", 30,
            "joko", 15,
            "dafli", 55,
            "sutra", 35,
        ]);
    });

    test("keys function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        expect(objectData.keys().all()).toStrictEqual(["name", "age"]);
    });

    test("isEmpty function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        const emptyData = new Iteract();
        expect(emptyData.isEmpty()).toBe(true);
        expect(objectData.isEmpty()).toBe(false);
    });

    test("isNotEmpty function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        const emptyData = new Iteract();
        expect(emptyData.isNotEmpty()).toBe(false);
        expect(objectData.isNotEmpty()).toBe(true);
    });

    test("contains function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        const data = new Iteract([1, 2, 3, 4]);
        expect(data.contains(item => item == 1)).toBe(true);
        expect(data.contains(item => item == 10)).toBe(false);
        expect(objectData.contains(item => item.age > 30)).toStrictEqual(true);
        expect(objectData.contains(item => item.age > 60)).toStrictEqual(false);
    });

    test("lengthBy function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bagas", age: 25 },
            { name: "bar", age: 25 },
            { name: "alex", age: 30 },
            { name: "joko", age: 15 },
            { name: "dafli", age: 55 },
            { name: "sutra", age: 35 },
        ]);
        const data = new Iteract([1, 2, 2, 3, 4, 4, 4, 3, 4]);
        expect(data.lengthBy()).toStrictEqual({ "1": 1, "2": 2, "3": 2, "4": 4 });
        expect(objectData.lengthBy(item => item.age)).toStrictEqual({ "15": 1, "20": 1, "25": 2, "30": 1, "35": 1, "55": 1 });
        expect(objectData.lengthBy(item => item.name.substring(0, 2))).toStrictEqual({ "al": 1, "ba": 2, "da": 1, "fo": 1, "jo": 1, "su": 1 });
    });

    test("merge function", () => {
        const objectData = new Iteract([
            { name: "foo", age: 20 },
            { name: "bar", age: 20 },
        ]);
        const data = new Iteract([1, 2, 3, 4]);
        // console.log(data.merge([5, 6, 7, 8]));
        expect(data.merge([5, 6, 7, 8]).all()).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8]);
        expect(objectData.merge([{ name: "bagas", gender: "Male" }]).all()).toStrictEqual([{ name: 'bagas', age: 20, gender: 'Male' }, {name: "bar", age: 20}]);
        expect(objectData.merge([{}, { gender: "Female" }]).all()).toStrictEqual([{ name: 'bagas', age: 20, gender: 'Male'  }, {name: "bar", gender: 'Female', age: 20}]);
        expect(() => objectData.merge(123).all()).toThrow("Parameter must passing the array values.");
    });

});

