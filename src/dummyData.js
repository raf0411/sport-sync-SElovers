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
        type: 'Public',
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
            Monday: '9:00 - 17:00',
            Tuesday: '9:00 - 17:00',
            Wednesday: '9:00 - 17:00',
            Thursday: '9:00 - 17:00',
            Friday: '9:00 - 17:00',
            Saturday: '9:00 - 17:00',
            Sunday: 'Closed'
          },
        location: 'Jalan hantu 7, Pocong hidup',
        contact: '085658980078'
    }
];

export const BookedVenues = [
    {
        id: 1,
        name: "BINUS University",
        photo: '/images/venue-image.jpg',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.306945664692!2d106.64645451100024!3d-6.22319746092441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb20a9906e13%3A0xf75c5296d0a385e4!2sBINUS%20University%2C%20Kampus%20BINUS%20%40Alam%20Sutera!5e0!3m2!1sen!2sid!4v1716559733403!5m2!1sen!2sid",
        location: 'Jl. Jalur Sutera Bar. No.Kav. 21, RT.001/RW.004, Panunggangan, Kec. Pinang, Kota Tangerang, Banten 15143',
        contact: '081122333123'
    }
];

export const Rooms = [
    {
        id: 1,
        name: "Sunib",
        memberCount: 5,
        maxMembers:6,
        RoomLeader: "Budi",
        Members: ["Budi","Kevin","Hansel","Raffi","Daniel"],
        location:'Jl. Jalur Sutera Bar. No.Kav. 21, RT.001/RW.004, Panunggangan, Kec. Pinang, Kota Tangerang, Banten 15143',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.306945664692!2d106.64645451100024!3d-6.22319746092441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb20a9906e13%3A0xf75c5296d0a385e4!2sBINUS%20University%2C%20Kampus%20BINUS%20%40Alam%20Sutera!5e0!3m2!1sen!2sid!4v1716559733403!5m2!1sen!2sid",
        contact:"08111231823",
        time: 'Sunday May 26, 15.00 - 19.00',
        Details: 'Court 2',
        RoomDescription: 'Ayo ikut main bola'
    }
];

export const Activity = [
    {
        id: 1,
        name: "Badmin Let's Go",
        memberCount: 3,
        maxMembers:4,
        RoomLeader: "Chris",
        Members: ["Chris","Jim","Eric"],
        location:'Jl. Jelupang Raya No.15, Jelupang, Kec. Serpong Utara, Kota Tangerang Selatan, Banten 15323',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9365068608267!2d106.66710697414842!3d-6.2720799937166465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f78baaaaaaab%3A0x29546002a29bc2d4!2sCandra%20Wijaya%20International%20Badminton%20Centre!5e0!3m2!1sen!2sid!4v1716822238474!5m2!1sen!2sid",
        contact:"08111231823",
        time: 'Sunday May 26, 12.00 - 14.00',
        Details: 'Court 1',
        RoomDescription: 'Ayo ikut main badmin'
    },
    {
        id: 2,
        name: "Tennis Enthusiasts",
        memberCount: 4,
        maxMembers: 6,
        RoomLeader: "Alice",
        Members: ["Alice", "Bob", "Charlie", "Dave"],
        location: 'Jl. Sudirman No.56, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10250',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.9365068608267!2d106.82010697414842!3d-6.2100799937166465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f78baaaaaaab%3A0x39546002a29bc2d4!2sTennis%20Club!5e0!3m2!1sen!2sid!4v1716822238474!5m2!1sen!2sid",
        contact: "08112233445",
        time: 'Saturday June 1, 10.00 - 12.00',
        Details: 'Court 2',
        RoomDescription: 'Join us for a fun tennis session!'
    },
    {
        id: 3,
        name: "Basketball Buddies",
        memberCount: 5,
        maxMembers: 10,
        RoomLeader: "Michael",
        Members: ["Michael", "Sarah", "Tom", "Jerry", "Anna"],
        location: 'Jl. Thamrin No.8, Kebon Melati, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10230',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9365068608267!2d106.82010697414842!3d-6.2000799937166465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f78baaaaaaab%3A0x49546002a29bc2d4!2sBasketball%20Court!5e0!3m2!1sen!2sid!4v1716822238474!5m2!1sen!2sid",
        contact: "08122334456",
        time: 'Friday June 7, 18.00 - 20.00',
        Details: 'Court 3',
        RoomDescription: 'Come play basketball with us!'
    },
    {
        id: 4,
        name: "Soccer Squad",
        memberCount: 8,
        maxMembers: 11,
        RoomLeader: "David",
        Members: ["David", "John", "Mark", "Luke", "Paul", "Matthew", "James", "Peter"],
        location: 'Jl. Rasuna Said No.15, Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9365068608267!2d106.83010697414842!3d-6.2900799937166465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f78baaaaaaab%3A0x59546002a29bc2d4!2sSoccer%20Field!5e0!3m2!1sen!2sid!4v1716822238474!5m2!1sen!2sid",
        contact: "08133445567",
        time: 'Wednesday June 12, 16.00 - 18.00',
        Details: 'Field 1',
        RoomDescription: 'Let\'s play some soccer!'
    },
    {
        id: 5,
        name: "Volleyball Vibes",
        memberCount: 6,
        maxMembers: 8,
        RoomLeader: "Emma",
        Members: ["Emma", "Olivia", "Ava", "Isabella", "Sophia", "Mia"],
        location: 'Jl. Gatot Subroto No.20, Kuningan Timur, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12950',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9365068608267!2d106.84010697414842!3d-6.2500799937166465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f78baaaaaaab%3A0x69546002a29bc2d4!2sVolleyball%20Court!5e0!3m2!1sen!2sid!4v1716822238474!5m2!1sen!2sid",
        contact: "08144556678",
        time: 'Monday June 17, 14.00 - 16.00',
        Details: 'Court 2',
        RoomDescription: 'Enjoy a game of volleyball!'
    },
    {
        id: 6,
        name: "Yoga Group",
        memberCount: 5,
        maxMembers: 10,
        RoomLeader: "Sophia",
        Members: ["Sophia", "Liam", "Noah", "William", "James"],
        location: 'Jl. M.H. Thamrin No.30, Gondangdia, Kecamatan Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350',
        map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9365068608267!2d106.85010697414842!3d-6.2600799937166465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f78baaaaaaab%3A0x79546002a29bc2d4!2sYoga%20Studio!5e0!3m2!1sen!2sid!4v1716822238474!5m2!1sen!2sid",
        contact: "08155667789",
        time: 'Sunday June 23, 08.00 - 10.00',
        Details: 'Studio 1',
        RoomDescription: 'Join our yoga session!'
    }
]
