export const Users = [
    {
        id: 1,
        profilePic: "/images/user-1.png",
        group: "Yang Penting Bayar",
        username: "rudi123",
    },
    {
        id: 2,
        profilePic: "/images/user-2.png",
        group: "The Berakers",
        username: "kevkev22",
    },
    {
        id: 3,
        profilePic: "/images/user-3.png",
        group: "Dewa Family",
        username: "123ovo123",
    },
];

export const Posts = [
    {
        id: 1,
        desc: "Lagi sepedahan nich..",
        photo: "/images/post-img.jpg",
        userId: 1,
        like: 32,
    },
    {
        id: 2,
        desc: "Yuk lari yuk lari..",
        photo: "/images/running.jpg",
        userId: 2,
        like: 29,
    },
    {
        id: 3,
        desc: "mbak mbak nge-gym..",
        photo: "/images/fitness.jpg",
        userId: 3,
        like: 12,
    },
];

export const Groups = [
    {
        id: 1,
        name: "Dewa Family",
        memberCount: 23,
        photo: '/images/group-tennis.jpg',
        type: 'Private',
        admins: '',
        members: '',
        location: 'Depok, Jawa Barat',
        description: 'bukan dewa sih, keren aja namanya.'
    },
    {
        id: 2,
        name: "The Berakers",
        memberCount: 59,
        photo: '/images/group-futsall.jpg',
        type: 'Public',
        admins: '',
        members: '',
        location: 'Ciledug, Banten',
        description: 'Mari kita berak bersama.'
    },
    {
        id: 3,
        name: "Anak Mamih",
        memberCount: 69,
        photo: '/images/group-basketball.jpg',
        type: 'Public',
        admins: '',
        members: '',
        location: 'Surabaya, Jawa Timur',
        description: 'Anak papih ga boleh join'
    },
]

export const Venues = [
    {
        id: 1,
        name: "BINUS University",
        photo: '/images/venue-image.jpg',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.306945664692!2d106.64645451100024!3d-6.22319746092441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb20a9906e13%3A0xf75c5296d0a385e4!2sBINUS%20University%2C%20Kampus%20BINUS%20%40Alam%20Sutera!5e0!3m2!1sen!2sid!4v1716559733403!5m2!1sen!2sid",
        open_time: {
            Monday: '9:00 - 17:00',
            Tuesday: '9:00 - 17:00',
            Wednesday: '9:00 - 17:00',
            Thursday: '9:00 - 17:00',
            Friday: '9:00 - 17:00',
            Saturday: '9:00 - 17:00',
            Sunday: 'Closed'
          },
        location: 'Jl. Jalur Sutera Bar. No.Kav. 21, RT.001/RW.004, Panunggangan, Kec. Pinang, Kota Tangerang, Banten 15143',
        contact: '081122333123'
    },
    {
        id: 2,
        name: "Lapangan Boongan",
        photo: '/images/venue-image.jpg',
        open_time: {
            Monday: '9:30 - 20:30',
            Tuesday: '9:30 - 20:30',
            Wednesday: '9:30 - 20:30',
            Thursday: '9:30 - 20:30',
            Friday: '9:30 - 20:30',
            Saturday: '10:00 - 19:00',
            Sunday: 'Closed'
          },
        location: 'Jalan hantu 7, Pocong hidup',
        contact: '085658980078'
    }
];