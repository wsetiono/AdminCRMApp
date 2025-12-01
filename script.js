// Sample customer data
const customers = [
    { 
        id: 1, 
        name: 'Andi Pratamo', 
        email: 'andi@example.com', 
        whatsapp: '08123456789', 
        isLoyalty: true, 
        avatar: 'customer1', 
        loyaltyPoints: 350,
        totalTransaction: 15000000,
        joinDate: '2023-01-15',
        rank: 'Explorer',
		dob: '1988-05-09',
		profesi: 'Karyawan',
		gender: 'Male',
		status: 'Sesi Masih Berjalan'
    },
    { 
        id: 2, 
        name: 'Siti Nurhaliza', 
        email: 'siti@example.com', 
        whatsapp: '08234567890', 
        isLoyalty: false, 
        avatar: 'customer2', 
        loyaltyPoints: 120,
        totalTransaction: 3000000,
        joinDate: '2023-05-20',
        rank: 'Achiever',
		dob: '1987-03-04',
		profesi: 'Mahasiswa',
		gender: 'Female',
		status: 'Sesi Sudah Habis'
    },
    { 
        id: 3, 
        name: 'Budi Santoso', 
        email: 'budi@example.com', 
        whatsapp: '08345678901', 
        isLoyalty: true, 
        avatar: 'customer3', 
        loyaltyPoints: 480,
        totalTransaction: 25000000,
        joinDate: '2022-11-10',
        rank: 'Achiever',
		dob: '1987-06-06',
		profesi: 'Wirausaha',
		gender: 'Male',
		status: 'Sesi Masih Berjalan'
    },
    { 
        id: 4, 
        name: 'Dewi Kartika', 
        email: 'dewi@example.com', 
        whatsapp: '08456789012', 
        isLoyalty: false, 
        avatar: 'customer4', 
        loyaltyPoints: 80,
        totalTransaction: 2500000,
        joinDate: '2023-06-01',
        rank: 'Explorer',
		dob: '1999-10-10',
		profesi: 'Siswa',
		gender: 'Female',
		status: 'Sesi Masih Berjalan'
    },
    { 
        id: 5, 
        name: 'Eko Wijaya', 
        email: 'eko@example.com', 
        whatsapp: '08567890123', 
        isLoyalty: true, 
        avatar: 'customer5', 
        loyaltyPoints: 250,
        totalTransaction: 8500000,
        joinDate: '2023-02-28',
        rank: 'Legend',
		dob: '1995-09-01',
		profesi: 'Siswa',
		gender: 'Male',
		status: 'Sesi Masih Berjalan'
    },
    { 
        id: 6, 
        name: 'Fitri Handayani', 
        email: 'fitri@example.com', 
        whatsapp: '08678901234', 
        isLoyalty: false, 
        avatar: 'customer6', 
        loyaltyPoints: 150,
        totalTransaction: 5500000,
        joinDate: '2023-04-15',
            rank: 'Explorer',
			dob: '1996-01-04',
			profesi: 'Wirausaha',
		gender: 'Female',
		status: 'Sesi Masih Berjalan'
    },
    { 
        id: 7, 
        name: 'Hendra Kusuma', 
        email: 'hendra@example.com', 
        whatsapp: '08789012345', 
        isLoyalty: true, 
        avatar: 'customer7', 
        loyaltyPoints: 420,
        totalTransaction: 18500000,
        joinDate: '2022-12-05',
            rank: 'Explorer',
			dob: '2000-05-10',
			profesi: 'Wirausaha',
		gender: 'Male',
		status: 'Sesi Masih Berjalan'
    },
    { 
        id: 8, 
        name: 'Indah Permatasari', 
        email: 'indah@example.com', 
        whatsapp: '08890123456', 
        isLoyalty: false, 
        avatar: 'customer8', 
        loyaltyPoints: 90,
        totalTransaction: 2750000,
        joinDate: '2023-07-10',
            rank: 'Explorer',
			dob: '2004-04-03',
			profesi: 'Mahasiswa',
		gender: 'Female',
		status: 'Sesi Masih Berjalan'
    }
];

// Sample instructor data
const instructors = [
    { 
        id: 1, 
        name: 'Andi Pratama', 
        email: 'andi@example.com',  
		dob: '1988-05-09',
		whatsapp: 083082984934,
		gender: 'Male'
    },
    { 
        id: 1, 
        name: 'Mira Sarado', 
        email: 'mira@example.com',  
		dob: '1988-05-09',
		whatsapp: 084345345345,
		gender: 'Female'
    }
];

// Sample programs data
const programs = [
    { 
        id: 1, 
        name: 'Intro to 3d modelling', 
        /*jmlsesi: '15 jam',  
		instructor: 'Andi Pratama, Mira Sarado',
		studentEnrolled: 'Andi Pratamo, Siti Nurhaliza' */
    },
    { 
        id: 2, 
        name: 'Intro to 2d modelling', 
        /*jmlsesi: '15 jam',  
		instructor: 'Andi Pratamo, Siti Nurhaliza' */
    },
];

const enrollments = [
	{
		id: 1,
		student: 'Joni',
		program: 'Intro to 2d modelling',
		jmlSesi: '15 jam'
	},
	{
		id: 2,
		student: 'Joni',
		program: 'Intro to 3d modelling',
		jmlSesi: '17 jam'
	}
];


// Sample lead data
const leads = [
    { 
        id: 1, 
        name: 'Joni Sembiring', 
        email: 'joni@example.com', 
        whatsapp: '08123456789',
        avatar: 'customer1', 
		dob: '1988-05-09',
		profesi: 'Karyawan',
		gender: 'Male'
    },
    { 
        id: 2, 
        name: 'Anita Lewiski', 
        email: 'anita@example.com', 
        whatsapp: '08234567890', 
        avatar: 'customer2', 
		dob: '1987-03-04',
		profesi: 'Mahasiswa',
		gender: 'Female'
    }
];


// Sample purchase history data
const purchaseHistory = {
    1: [
        { id: 101, date: '2023-06-15', course: 'Web Development', location: 'Jakarta', price: 3500000, status: 'completed' },
        { id: 102, date: '2023-07-20', course: 'UI/UX Design', location: 'Bandung', price: 3000000, status: 'completed' },
        { id: 103, date: '2023-08-10', course: 'Data Science', location: 'Jakarta', price: 5000000, status: 'pending' }
    ],
    2: [
        { id: 201, date: '2023-05-10', course: 'Digital Marketing', location: 'Surabaya', price: 2500000, status: 'completed' }
    ],
    3: [
        { id: 301, date: '2023-04-05', course: 'Mobile Development', location: 'Yogyakarta', price: 4000000, status: 'completed' },
        { id: 302, date: '2023-06-25', course: 'Machine Learning', location: 'Jakarta', price: 6000000, status: 'completed' },
        { id: 303, date: '2023-07-15', course: 'Blockchain Development', location: 'Bandung', price: 5500000, status: 'completed' }
    ],
    4: [
        { id: 401, date: '2023-07-01', course: 'Graphic Design', location: 'Medan', price: 2750000, status: 'completed' }
    ],
    5: [
        { id: 501, date: '2023-03-20', course: 'Web Development', location: 'Jakarta', price: 3500000, status: 'completed' },
        { id: 502, date: '2023-05-15', course: 'UI/UX Design', location: 'Surabaya', price: 3000000, status: 'completed' },
        { id: 503, date: '2023-06-30', course: 'Data Science', location: 'Bandung', price: 5000000, status: 'completed' }
    ],
    6: [
        { id: 601, date: '2023-07-22', course: 'Digital Marketing', location: 'Yogyakarta', price: 2500000, status: 'pending' }
    ],
    7: [
        { id: 701, date: '2023-02-10', course: 'Mobile Development', location: 'Jakarta', price: 4000000, status: 'completed' },
        { id: 702, date: '2023-04-25', course: 'Machine Learning', location: 'Surabaya', price: 6000000, status: 'completed' },
        { id: 703, date: '2023-06-05', course: 'Blockchain Development', location: 'Jakarta', price: 5500000, status: 'completed' },
        { id: 704, date: '2023-07-18', course: 'Web Development', location: 'Bandung', price: 3500000, status: 'completed' }
    ],
    8: [
        { id: 801, date: '2023-07-05', course: 'Graphic Design', location: 'Medan', price: 2750000, status: 'completed' }
    ]
};

// Sample loyalty missions data
const loyaltyMissions = {
    1: [
        { id: 1001, title: 'Complete 3 Courses', description: 'Finish 3 different courses', progress: 2, total: 3, points: 100 },
        { id: 1002, title: 'Refer a Friend', description: 'Invite a friend to join a course', progress: 1, total: 1, points: 50 },
        { id: 1003, title: 'Course Review', description: 'Leave a review for completed courses', progress: 1, total: 3, points: 25 }
    ],
    2: [
        { id: 2001, title: 'Complete 5 Courses', description: 'Finish 5 different courses', progress: 1, total: 5, points: 150 },
        { id: 2002, title: 'Monthly Learner', description: 'Take a course every month for 3 months', progress: 1, total: 3, points: 75 }
    ],
    3: [
        { id: 3001, title: 'Course Expert', description: 'Complete 5 courses in same category', progress: 3, total: 5, points: 200 },
        { id: 3002, title: 'Loyalty Champion', description: 'Reach 500 loyalty points', progress: 450, total: 500, points: 100 }
    ]
};

// Completed missions data
const completedMissions = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: []
};

// Mission types data
const missionTypes = [
    { 
        id: 'buy-course', 
        title: 'Beli Kursus', 
        description: 'Membeli kursus baru', 
        points: 50,
        details: 'Pilih kursus yang telah dibeli oleh customer'
    },
    { 
        id: 'follow-instagram', 
        title: 'Follow Instagram', 
        description: 'Mengikuti akun Instagram lembaga kursus', 
        points: 10,
        details: 'Customer telah mengikuti akun Instagram resmi lembaga kursus'
    },
    { 
        id: 'like-instagram', 
        title: 'Like Instagram Post', 
        description: 'Menyukai postingan Instagram', 
        points: 5,
        details: 'Customer telah menyukai postingan terbaru di Instagram'
    },
    { 
        id: 'comment-instagram', 
        title: 'Comment Instagram Post', 
        description: 'Berkomentar pada postingan Instagram', 
        points: 15,
        details: 'Customer telah meninggalkan komentar pada postingan Instagram'
    },
    { 
        id: 'instagram-story', 
        title: 'Buat Instagram Story', 
        description: 'Membuat Instagram story tentang lembaga kursus', 
        points: 25,
        details: 'Customer telah membuat Instagram story yang menampilkan atau mereview lembaga kursus'
    },
    { 
        id: 'monopoly-game', 
        title: 'Main Mini Game Monopoly', 
        description: 'Memainkan mini game Monopoly', 
        points: 30,
        details: 'Customer telah menyelesaikan satu sesi permainan Monopoly'
    },
    { 
        id: 'google-review', 
        title: 'Review di Google My Business', 
        description: 'Memberikan review di Google My Business', 
        points: 40,
        details: 'Customer telah meninggalkan review positif di halaman Google My Business'
    },
    { 
        id: 'refer-friend', 
        title: 'Refer Teman', 
        description: 'Mereferensikan teman untuk bergabung', 
        points: 100,
        details: 'Customer telah berhasil mereferensikan teman yang mendaftar kursus'
    }
];

// Courses data for mission
const coursesForMission = [
    { id: 'web-development', name: 'Web Development', price: 3500000 },
    { id: 'mobile-development', name: 'Mobile Development', price: 4000000 },
    { id: 'ui-ux-design', name: 'UI/UX Design', price: 3000000 },
    { id: 'data-science', name: 'Data Science', price: 5000000 },
    { id: 'digital-marketing', name: 'Digital Marketing', price: 2500000 },
    { id: 'graphic-design', name: 'Graphic Design', price: 2750000 },
    { id: 'machine-learning', name: 'Machine Learning', price: 6000000 },
    { id: 'blockchain-development', name: 'Blockchain Development', price: 5500000 }
];

// Locations data
const locations = [
    { id: 'jakarta', name: 'Jakarta' },
    { id: 'bandung', name: 'Bandung' },
    { id: 'surabaya', name: 'Surabaya' },
    { id: 'yogyakarta', name: 'Yogyakarta' },
    { id: 'medan', name: 'Medan' }
];

//Master rank list
const masterRanks = [
	{
		id: 1,
		name: 'Explorer',
		pointAwal: 0,
		pointAkhir: 999,
		benefit1: 'Penambahan Poin sebanyak 50 point pada misi Absen Kehadiran',
		benefit2: 'Penambahan Poin sebanyak 20 point pada misi Main mini game monopoly',
		benefit3: 'Penambahan Poin sebanyak 30 point pada misi Absen 5 hari dalam seminggu (minimal sesi 2 jam per hari)',
		image: 'https://images.unsplash.com/vector-1743349936292-e21eab62b620?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 2,
		name: 'Achiever',
		pointAwal: 1000,
		pointAkhir: 1999,
		benefit1: 'Penambahan Poin sebanyak 70 point pada misi Absen Kehadiran',
		benefit2: 'Penambahan Poin sebanyak 40 point pada misi Main mini game monopoly',
		benefit3: 'Penambahan Poin sebanyak 50 point pada misi Absen 5 hari dalam seminggu (minimal sesi 2 jam per hari)',
		image: 'https://images.unsplash.com/vector-1743349936292-e21eab62b620?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 3,
		name: 'Champion',
		pointAwal: 2000,
		pointAkhir: 2999,
		benefit1: 'Penambahan Poin sebanyak 90 point pada misi Absen Kehadiran',
		benefit2: 'Penambahan Poin sebanyak 60 point pada misi Main mini game monopoly',
		benefit3: 'Penambahan Poin sebanyak 70 point pada misi Absen 5 hari dalam seminggu (minimal sesi 2 jam per hari)',
		image: 'https://images.unsplash.com/vector-1743349936292-e21eab62b620?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
	{
		id: 4,
		name: 'Legend',
		pointAwal: 3000,
		pointAkhir: 9999,
		benefit1: 'Penambahan Poin sebanyak 110 point pada misi Absen Kehadiran',
		benefit2: 'Penambahan Poin sebanyak 80 point pada misi Main mini game monopoly',
		benefit3: 'Penambahan Poin sebanyak 90 point pada misi Absen 5 hari dalam seminggu (minimal sesi 2 jam per hari)',
		image: 'https://images.unsplash.com/vector-1743349936292-e21eab62b620?q=80&w=80&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	},
];

//Master rank mission list
/*
const masterRankMissions = [
	{
		id: 1,
		rank: 'Explorer',
		misi: 'Absen Kehadiran',
		penambahanPoin: 50
	},
	{
		id: 2,
		rank: 'Achiever',
		misi: 'Absen Kehadiran',
		penambahanPoin: 100
	},
	{
		id: 3,
		rank: 'Champion',
		misi: 'Absen Kehadiran',
		penambahanPoin: 150
	},
	{
		id: 4,
		rank: 'Legend',
		misi: 'Absen Kehadiran',
		penambahanPoin: 200
	},
];
*/
const masterRankMissions = [
    { 
        id: 'buy-course', 
        title: 'Beli Kursus', 
        description: 'Membeli kursus baru', 
        points: 50,
        details: 'Pilih kursus yang telah dibeli oleh customer'
    },
    { 
        id: 'follow-instagram', 
        title: 'Follow Instagram', 
        description: 'Mengikuti akun Instagram lembaga kursus', 
        points: 10,
        details: 'Customer telah mengikuti akun Instagram resmi lembaga kursus'
    },
    { 
        id: 'like-instagram', 
        title: 'Like Instagram Post', 
        description: 'Menyukai postingan Instagram', 
        points: 5,
        details: 'Customer telah menyukai postingan terbaru di Instagram'
    },
    { 
        id: 'comment-instagram', 
        title: 'Comment Instagram Post', 
        description: 'Berkomentar pada postingan Instagram', 
        points: 15,
        details: 'Customer telah meninggalkan komentar pada postingan Instagram'
    },
    { 
        id: 'instagram-story', 
        title: 'Buat Instagram Story', 
        description: 'Membuat Instagram story tentang lembaga kursus', 
        points: 25,
        details: 'Customer telah membuat Instagram story yang menampilkan atau mereview lembaga kursus'
    },
    { 
        id: 'monopoly-game', 
        title: 'Main Mini Game Monopoly', 
        description: 'Memainkan mini game Monopoly', 
        points: 30,
        details: 'Customer telah menyelesaikan satu sesi permainan Monopoly'
    },
    { 
        id: 'google-review', 
        title: 'Review di Google My Business', 
        description: 'Memberikan review di Google My Business', 
        points: 40,
        details: 'Customer telah meninggalkan review positif di halaman Google My Business'
    },
    { 
        id: 'refer-friend', 
        title: 'Refer Teman', 
        description: 'Mereferensikan teman untuk bergabung', 
        points: 100,
        details: 'Customer telah berhasil mereferensikan teman yang mendaftar kursus'
    }
];

//Master game setting list
const masterGameSettings = [
	{
		id: 1,
		berapaKaliBisaDimainkanDalamSehari: 1
	}
];

const masterGameRewardSettings = [
	{
		id: 1,
		iconHadiah: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		teksHadiah: '+25 poin',
	},
	{
		id: 2,
		iconHadiah: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		teksHadiah: '+30 poin',
	},
	{
		id: 3,
		iconHadiah: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		teksHadiah: '+35 poin',
	},
	{
		id: 4,
		iconHadiah: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=120&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		teksHadiah: '+40 poin',
	}
];

//Master admin mgmt list
const masterAdmin = [
	{
		id: 1,
		email: 'toni@gmail.com',
		whatsapp: '08115654546',
		gender: 'male',
		role: 'admin',
		hakAksesMenu: [
			{
				id: 1,
				menu: 'customers'
			},
			{
				id: 2,
				menu: 'leads'
			}
		]
	},
	{
		id: 2,
		email: 'budi@gmail.com',
		whatsapp: '08115654546',
		gender: 'male',
		role: 'admin',
		hakAksesMenu: [
			{
				id: 1,
				menu: 'customers'
			},
			{
				id: 2,
				menu: 'leads'
			},
			{
				id: 3,
				menu: 'mission'
			}
		]
	},
];

//Master instructor mgmt list
const masterInstructor = [
	{
		id: 1,
		email: 'jodi@gmail.com',
		role: 'instructor'
	},
	{
		id: 2,
		email: 'supri@gmail.com',
		role: 'instructor'
	},
];

//Master loyalty member approval list
const masterLoyaltyMemberApprovals = [
	{
		id: 1,
		nama: 'Anton Wonogiri',
		email: 'anton@gmail.com',
		whatsapp: '08676767677',
		age: 30,
		profesi: 'Karyawan',
		gender: 'Male',
		tglSubmit: '2025-10-06',
		status: 'Waiting For Approval'
	},
	{
		id: 2,
		nama: 'Jakob Remanto',
		email: 'jakob@gmail.com',
		whatsapp: '08576767677',
		age: 20,
		profesi: 'Mahasiswa',
		gender: 'Male',
		tglSubmit: '2025-10-06',
		status: 'Waiting For Approval'
	}
];

//Master mission approval list
const masterMissionApprovals = [
	{
		id: 1,
		nama: 'Johan Setiandi',
		email: 'johan@gmail.com',
		whatsapp: '08676767677',
		misi: 'Beli kursus senilai 1 juta',
		fotoBuktiMisi: '',
		tglSubmit: '2024-10-06',
		status: 'Waiting For Approval'
	},
	{
		id: 2,
		nama: 'Wawan Setiandi',
		email: 'wawan@gmail.com',
		whatsapp: '08676767677',
		misi: 'Follow Instagram',
		fotoBuktiMisi: '',
		tglSubmit: '2024-10-06',
		status: 'Waiting For Approval'
	}
];

// Master missions list
const masterMissions = [
    { 
        id: 0, 
        name: 'Absen kehadiran', 
        description: 'Absen kehadiran per sesi', 
        points: 10,
        status: 'active'
    },
	 { 
        id: 1, 
        name: 'Absen 5 hari dalam seminggu (minimal sesi 2 jam per hari)', 
        description: 'Absen 5 hari dalam seminggu (minimal sesi 2 jam per hari)', 
        points: 30,
        status: 'active'
    },
    { 
        id: 2, 
        name: 'Beli kursus senilai 1 juta', 
        description: 'Membeli kursus dengan nilai minimal 1 juta rupiah', 
        points: 100,
        status: 'active'
    },
    { 
        id: 3, 
        name: 'Follow Instagram', 
        description: 'Mengikuti akun Instagram resmi lembaga kursus', 
        points: 75,
        status: 'active'
    },
    { 
        id: 4, 
        name: 'Like Instagram post', 
        description: 'Menyukai postingan Instagram resmi lembaga kursus', 
        points: 5,
        status: 'active'
    },
    { 
        id: 5, 
        name: 'Comment Instagram post', 
        description: 'Berkomentar pada postingan Instagram resmi lembaga kursus', 
        points: 20,
        status: 'active'
    },
    { 
        id: 6, 
        name: 'Buat Instagram story dengan tag lembaga kursus', 
        description: 'Membuat Instagram story dan men-tag akun resmi lembaga kursus', 
        points: 20,
        status: 'active'
    },
    { 
        id: 7, 
        name: 'Main mini game monopoly', 
        description: 'Menyelesaikan satu sesi permainan mini monopoly', 
        points: 20,
        status: 'active'
    },
    { 
        id: 8, 
        name: 'Comment di Google My Business', 
        description: 'Memberikan review positif di halaman Google My Business', 
        points: 30,
        status: 'active'
    },
    { 
        id: 9, 
        name: 'Refer 1 teman', 
        description: 'Mereferensikan 1 teman yang berhasil mendaftar kursus', 
        points: 100,
        status: 'active'
    },
	 { 
        id: 10, 
        name: 'Join Academy Program', 
        description: 'Gabung di Academy Program', 
        points: 100,
        status: 'active'
    }
];

// Master resetmissions list

const masterResetMissions = [
    { 
        id: 0, 
        name: 'Absen kehadiran', 
        type: 'DailyMission', 
        isReset: true,
		resetEvery: 'day',
		maxAttempt: 1,
        status: 'active'
    },
    { 
        id: 1, 
        name: 'Main mini game monopoly', 
        type: 'DailyMission', 
		isReset: true,
        resetEvery: 'day',
		maxAttempt: 1,
        status: 'active'
    },
	  { 
        id: 2, 
        name: 'Join Academy Program', 
        type: 'LifetimeMission', 
		isReset: false,
		maxAttempt: 1,
        resetEvery: '',
        status: 'active'
    },
    { 
        id: 3, 
        name: 'Absen 5 hari dalam seminggu (minimal sesi 2 jam per hari)', 
        type: 'WeeklyMission',
		isReset: true,
		maxAttempt: 5,
        resetEvery: 'monday',
        status: 'active'
    }
];

// Master whatsapp template list
const masterWhatsappTemplates = [
    { 
        id: 1, 
        name: 'Flash Sale', 
        description: 'Flash Sale! Diskon 50% untuk semua produk hari ini. Jangan lewatkan kesempatan ini!', 
        status: 'active'
    },
    { 
        id: 2, 
        name: 'Weekend Special', 
        description: 'Promo spesial weekend! Beli 2 gratis 1 untuk semua item. Segera kunjungi toko kami!', 
        status: 'inactive'
    },
    { 
        id: 3, 
        name: 'Thank You Promo', 
        description: 'Terima kasih telah berbelanja di toko kami! Dapatkan voucher diskon 20% untuk pembelian selanjutnya.', 
        status: 'inactive'
    },
    { 
        id: 4, 
        name: 'New Arrival', 
        description: 'New arrival! Koleksi terbaru sudah tersedia. Dapatkan potongan harga khusus untuk pembelian minggu ini.', 
        status: 'inactive'
    }
];


// Master email template list
const masterEmailTemplates = [
    { 
        id: 1, 
        name: 'Flash Sale',
		title: 'Flash Sale', 
        body: 'Flash Sale! Diskon 50% untuk semua produk hari ini. Jangan lewatkan kesempatan ini!', 
        status: 'active'
    },
    { 
        id: 2, 
        name: 'Weekend Special',
		title: 'Weekend Special',
        body: 'Promo spesial weekend! Beli 2 gratis 1 untuk semua item. Segera kunjungi toko kami!', 
        status: 'inactive'
    },
    { 
        id: 3, 
        name: 'Thank You Promo', 
		title: 'Thank You Promo',
        body: 'Terima kasih telah berbelanja di toko kami! Dapatkan voucher diskon 20% untuk pembelian selanjutnya.', 
        status: 'inactive'
    },
    { 
        id: 4, 
        name: 'New Arrival', 
		title: 'New Arrival',
        body: 'New arrival! Koleksi terbaru sudah tersedia. Dapatkan potongan harga khusus untuk pembelian minggu ini.', 
        status: 'inactive'
    }
];


// Rewards data
const rewards = [
    {
        id: 1,
        name: 'Diskon 10%',
        category: 'diskon',
        description: 'Dapatkan diskon 10% untuk pembelian kursus berikutnya',
        points: 500,
        image: 'https://picsum.photos/seed/diskon10/300/200.jpg',
        status: 'available'
    },
    {
        id: 2,
        name: 'Voucher Belanja Rp 50.000',
        category: 'voucher',
        description: 'Tukarkan poin dengan voucher belanja senilai Rp 50.000',
        points: 1000,
        image: 'https://picsum.photos/seed/voucher50k/300/200.jpg',
        status: 'available'
    },
    {
        id: 3,
        name: 'Kursus Gratis',
        category: 'kursus',
        description: 'Dapatkan 1 kursus gratis (pilih sendiri)',
        points: 2000,
        image: 'https://picsum.photos/seed/kursusgratis/300/200.jpg',
        status: 'available'
    },
    {
        id: 4,
        name: 'Special Bundle - Web + Mobile',
        category: 'diskon',
        description: 'Paket spesial Web Development + Mobile Development',
        points: 750,
        image: 'https://picsum.photos/seed/bundle/300/200.jpg',
        status: 'available'
    },
    {
        id: 5,
        name: 'VIP Membership',
        category: 'voucher',
        description: 'Membership VIP dengan akses eksklusif',
        points: 5000,
        image: 'https://picsum.photos/seed/vip/300/200.jpg',
        status: 'available'
    }
];

// Master Rewards data
const masterRewards = [
    {
        id: 1,
        name: 'Diskon 10%',
        description: 'Dapatkan diskon 10% untuk pembelian kursus berikutnya',
		image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        points: 500
    },
    {
        id: 2,
        name: 'Voucher Belanja Rp 50.000',
        description: 'Tukarkan poin dengan voucher belanja senilai Rp 50.000',
		image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        points: 1000
    },
    {
        id: 3,
        name: 'Kursus Gratis',
        description: 'Dapatkan 1 kursus gratis (pilih sendiri)',
		image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		points: 1200
    },
    {
        id: 4,
        name: 'Special Bundle - Web + Mobile',
        description: 'Paket spesial Web Development + Mobile Development',
		image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=250&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        points: 750,
    }
];

// Selected mission
let selectedMission = null;

// Menu navigation
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', function() {
        // Remove active class from all menu items and sections
        document.querySelectorAll('.menu-item').forEach(mi => mi.classList.remove('active'));
        document.querySelectorAll('.content-section').forEach(cs => cs.classList.remove('active'));
        
        // Add active class to clicked menu item
        this.classList.add('active');
        
        // Show corresponding section
        const sectionId = this.getAttribute('data-section') + '-section';
        const section = document.getElementById(sectionId);
        if (section) {
            section.classList.add('active');
        }
    });
});

// Initialize customer table
function initCustomerTable() {
    const tableBody = document.getElementById('customerTableBody');
    tableBody.innerHTML = '';
    
    customers.forEach(customer => {
        const row = document.createElement('tr');
        const customerType = customer.totalTransaction >= 10000000 ? 'VIP' : 'Regular';
        const duration = calculateDuration(customer.joinDate);
		const age = calculateAge(customer.dob);
		
		let statusColor = "black";
		
		if(customer.status == 'Sesi Sudah Habis')
			statusColor = "red";
        
        row.innerHTML = `
            <td>
                <div class="customer-name">
                    <img src="https://picsum.photos/seed/${customer.avatar}/40/40.jpg" alt="${customer.name}" class="customer-avatar">
                    ${customer.name}
                    ${customer.isLoyalty ? '<span class="loyalty-badge"><i class="bi bi-star-fill"></i> Loyalty</span>' : ''}
                </div>
            </td>
            <td>${customer.email}</td>
            <td>${customer.whatsapp}</td>
            <td><span style="color:${statusColor};">${customer.status}</span></td>
            <td><span class="customer-rank">${customer.rank}</span></td>
             <td>${customer.loyaltyPoints} pts</td>
            <td>${age}</td>
            <td>${customer.profesi}</td>
            <td>${customer.gender}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-view" onclick="viewHistory(${customer.id}, '${customer.name}', '${customer.avatar}')" title="View History">
                        <i class="bi bi-eye-fill"></i>
                    </button>

					<button class="btn-whatsapp-custom" onclick="sendWhatsAppMarketing()">
						<i class="bi bi-whatsapp"></i>
					</button>
					<button class="btn-envelope-custom" onclick="sendWhatsAppMarketing()">
						<i class="bi bi-envelope"></i>
					</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize lead table
function initLeadTable() {
    const tableBody = document.getElementById('leadTableBody');
    tableBody.innerHTML = '';
    
    leads.forEach(lead => {
        const row = document.createElement('tr');
		const age = calculateAge(lead.dob);
        
        row.innerHTML = `
            <td>
                <div class="lead-name">
                    <img src="https://picsum.photos/seed/${lead.avatar}/40/40.jpg" alt="${lead.name}" class="lead-avatar">
                    ${lead.name}
                </div>
            </td>
            <td>${lead.email}</td>
            <td>${lead.whatsapp}</td>
            <td>${age}</td>
            <td>${lead.profesi}</td>
            <td>${lead.gender}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-view" onclick="viewHistory(${lead.id}, '${lead.name}', '${lead.avatar}')" title="View History">
                        <i class="bi bi-eye-fill"></i>
                    </button>
                    <button class="btn-action btn-loyalty-mission" onclick="openLoyaltyMissionModalForCustomer(${lead.id})" title="Convert To Customer">
                        <i class="bi bi-people"></i>
                    </button>
					<button class="btn-whatsapp-custom" onclick="sendWhatsAppMarketing()">
						<i class="bi bi-whatsapp"></i>
					</button>
					<button class="btn-envelope-custom" onclick="sendWhatsAppMarketing()">
						<i class="bi bi-envelope"></i>
					</button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


// Initialize instructor table
function initInstructorTable() {
    const tableBody = document.getElementById('instructorTableBody');
    tableBody.innerHTML = '';
    
    instructors.forEach(instructor => {
        const row = document.createElement('tr');
		const age = calculateAge(instructor.dob);
        
        row.innerHTML = `
            <td>
               ${instructor.name}
            </td>
            <td>${instructor.email}</td>
            <td>${instructor.whatsapp}</td>
            <td>${age}</td>
            <td>${instructor.gender}</td>
			<td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${instructor.id})" title="Edit Mission">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${instructor.id})" title="Delete Mission">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize program table
function initProgramTable() {
    const tableBody = document.getElementById('programsTableBody');
    tableBody.innerHTML = '';
    
    programs.forEach(program => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>
               ${program.name}
            </td>
			<td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${program.id})" title="Edit Mission">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${program.id})" title="Delete Mission">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize enrollment table
function initEnrollmentTable() {
    const tableBody = document.getElementById('enrollmentsTableBody');
    tableBody.innerHTML = '';
    
    enrollments.forEach(enrollment => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
			<td>
               ${enrollment.program}
            </td>
			<td>
               ${enrollment.jmlSesi}
            </td>
			<td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${enrollment.id})" title="Edit Mission">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${enrollment.id})" title="Delete Mission">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize mission table
function initMissionTable() {
    const tableBody = document.getElementById('missionTableBody');
    tableBody.innerHTML = '';
    
    masterMissions.forEach(mission => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${mission.name}</td>
            <td>${mission.description}</td>
            <td>
                <span class="mission-status ${mission.status === 'active' ? 'status-active' : 'status-inactive'}">
                    ${mission.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${mission.id})" title="Edit Mission">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${mission.id})" title="Delete Mission">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize reset mission table
function initResetMissionTable() {
    const tableBody = document.getElementById('resetmissionTableBody');
    tableBody.innerHTML = '';
    
    masterResetMissions.forEach(resetmission => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${resetmission.name}</td>
            <td>${resetmission.type}</td>
            <td>${resetmission.isReset}</td>
			  <td>${resetmission.resetEvery}</td>
			  <td>${resetmission.maxAttempt}</td>
            <td>
                <span class="mission-status ${resetmission.status === 'active' ? 'status-active' : 'status-inactive'}">
                    ${resetmission.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${resetmission.id})" title="Edit Mission">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${resetmission.id})" title="Delete Mission">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize rank table
function initRankTable() {
    const tableBody = document.getElementById('rankTableBody');
    tableBody.innerHTML = '';
    
    masterRanks.forEach(rank => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${rank.name}</td>
            <td>${rank.pointAwal}-${rank.pointAkhir} poin</td>
			<td><img src="${rank.image}" alt="${rank.image}"></td>
			<td>${rank.benefit1}</td>
			<td>${rank.benefit2}</td>
			<td>${rank.benefit3}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${rank.id})" title="Edit Rank">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${rank.id})" title="Delete Rank">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize rank mission table
function initRankMissionTable() {
    const tableBody = document.getElementById('rankmissionTableBody');
    tableBody.innerHTML = '';
   
    masterRankMissions.forEach(rankMission => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${rankMission.title}</td>
			<td>${rankMission.description}</td>
			<td>${rankMission.points}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${rankMission.id})" title="Edit Rank">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${rankMission.id})" title="Delete Rank">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize reward table
function initRewardTable() {
    const tableBody = document.getElementById('rewardTableBody');
    tableBody.innerHTML = '';
    
    masterRewards.forEach(reward => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${reward.name}</td>
            <td>${reward.description}</td>
			<td><img src="${reward.image}" alt="${reward.image}"></td>
            <td>${reward.points} poin</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${reward.id})" title="Edit Rank">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${reward.id})" title="Delete Rank">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


// Initialize game setting table
function initGameSettingTable() {
    const tableBody = document.getElementById('gameSettingTableBody');
    tableBody.innerHTML = '';
    
    masterGameSettings.forEach(gameSetting => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${gameSetting.berapaKaliBisaDimainkanDalamSehari}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${gameSetting.id})" title="Edit Rank">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${gameSetting.id})" title="Delete Rank">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize game reward setting table
function initGameRewardSettingTable() {
    const tableBody = document.getElementById('gameRewardSettingTableBody');
    tableBody.innerHTML = '';
    
    masterGameRewardSettings.forEach(gameRewardSetting => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
			<td><img src="${gameRewardSetting.iconHadiah}" alt="${gameRewardSetting.iconHadiah}"></td>
            <td>${gameRewardSetting.teksHadiah}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${gameRewardSetting.id})" title="Edit Rank">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${gameRewardSetting.id})" title="Delete Rank">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


// Initialize Admin Mgmt table
function initAdminMgmtTable() {
    const tableBody = document.getElementById('adminMgmtTableBody');
    tableBody.innerHTML = '';
    
    masterAdmin.forEach(admin => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${admin.email}</td>
            <td>${admin.whatsapp}</td>
			<td>${admin.gender}</td>
            <td>${admin.role}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${admin.id})" title="Edit Rank">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${admin.id})" title="Delete Rank">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


// Initialize Instructor Mgmt table
function initInstructorMgmtTable() {
    const tableBody = document.getElementById('instructorMgmtTableBody');
    tableBody.innerHTML = '';
    
    masterInstructor.forEach(instructor => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${instructor.email}</td>
            <td>${instructor.role}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${instructor.id})" title="Edit Rank">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${instructor.id})" title="Delete Rank">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}


// Initialize whatsapp template table
function initWhatsappTemplateTable() {
    const tableBody = document.getElementById('whatsappTemplateTableBody');
    tableBody.innerHTML = '';
    
    masterWhatsappTemplates.forEach(whatsappTemplate => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${whatsappTemplate.name}</td>
            <td>${whatsappTemplate.description}</td>
            <td>
                <span class="mission-status ${whatsappTemplate.status === 'active' ? 'status-active' : 'status-inactive'}">
                    ${whatsappTemplate.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${whatsappTemplate.id})" title="Edit Mission">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${whatsappTemplate.id})" title="Delete Mission">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize Email template table
function initEmailTemplateTable() {
    const tableBody = document.getElementById('emailTemplateTableBody');
    tableBody.innerHTML = '';
    
    masterEmailTemplates.forEach(emailTemplate => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${emailTemplate.name}</td>
            <td>${emailTemplate.title}</td>
			<td>${emailTemplate.body}</td>
            <td>
                <span class="mission-status ${emailTemplate.status === 'active' ? 'status-active' : 'status-inactive'}">
                    ${emailTemplate.status === 'active' ? 'Aktif' : 'Tidak Aktif'}
                </span>
            </td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${emailTemplate.id})" title="Edit Mission">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${emailTemplate.id})" title="Delete Mission">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}




// Initialize reward grid
function initRewardGrid() {
    /*const rewardGrid = document.querySelector('.reward-grid');
    rewardGrid.innerHTML = '';
    
    rewards.forEach(reward => {
        const rewardCard = document.createElement('div');
        rewardCard.className = `reward-card ${reward.category}`;
        rewardCard.innerHTML = `
            <div class="reward-header">
                <div>
                    <div class="reward-title">${reward.name}</div>
                    <span class="reward-category ${reward.category}">${reward.category.toUpperCase()}</span>
                </div>
                <div class="reward-points">${reward.points} poin</div>
            </div>
            <div class="reward-description">${reward.description}</div>
            <img src="${reward.image}" alt="${reward.name}" class="reward-image">
            <div class="reward-status ${reward.status === 'available' ? 'reward-status.available' : 'reward-status.unavailable'}">
                ${reward.status === 'available' ? 'Tersedia' : 'Tidak Tersedia'}
            </div>
            <div class="reward-actions">
                <button class="btn-primary-custom" onclick="claimReward(${reward.id})">
                    ${reward.category === 'kursus' ? 'Pilih Kursus' : 'Klaim Hadiah'}
                </button>
            </div>
        `;
        rewardGrid.appendChild(rewardCard);
    });*/
}

// Initialize loyalty member approval table
function initLoyaltyMemberApprovalTable() {
    const tableBody = document.getElementById('loyaltymember-approvalTableBody');
    tableBody.innerHTML = '';
    
    masterLoyaltyMemberApprovals.forEach(loyaltyMemberApproval => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${loyaltyMemberApproval.nama}</td>
            <td>${loyaltyMemberApproval.email}</td>
            <td>${loyaltyMemberApproval.whatsapp}</td>
            <td>${loyaltyMemberApproval.age}</td>
			<td>${loyaltyMemberApproval.profesi}</td>
            <td>${loyaltyMemberApproval.gender}</td>
			  <td>${loyaltyMemberApproval.tglSubmit}</td>
            <td>${loyaltyMemberApproval.status}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${loyaltyMemberApproval.id})" title="Approve">
                        <i class="bi bi-check-circle"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${loyaltyMemberApproval.id})" title="Reject">
                        <i class="bi bi-x-circle"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Initialize mission approval table
function initMissionApprovalTable() {
    const tableBody = document.getElementById('mission-approvalTableBody');
    tableBody.innerHTML = '';
    
    masterMissionApprovals.forEach(missionApproval => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${missionApproval.nama}</td>
            <td>${missionApproval.email}</td>
            <td>${missionApproval.whatsapp}</td>
            <td>${missionApproval.misi}</td>
			<td><img src='https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?q=80&w=100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></td>
			  <td>${missionApproval.tglSubmit}</td>
            <td>${missionApproval.status}</td>
            <td>
                <div class="action-buttons">
                    <button class="btn-action btn-edit" onclick="editMission(${missionApproval.id})" title="Approve">
                        <i class="bi bi-check-circle"></i>
                    </button>
                    <button class="btn-action btn-delete" onclick="deleteMission(${missionApproval.id})" title="Reject">
                        <i class="bi bi-x-circle"></i>
                    </button>
                </div>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Fungsi untuk toggle dropdown profil
function toggleDropdown(event) {
	const profileDropdown = document.getElementById('profileDropdown');
	
	event.stopPropagation(); // Mencegah event click di luar menutup dropdown
	profileDropdown.classList.toggle('hidden');
}

// Fungsi untuk menutup dropdown jika klik di luar
function closeDropdownIfClickOutside(event) {
	    const profileDropdown = document.getElementById('profileDropdown');
	
	if (!userInfo.contains(event.target)) {
		profileDropdown.classList.add('hidden');
	}
}

function initUserProfileMenu() {
	const userInfo = document.getElementById('userInfo');
    userInfo.addEventListener('click', toggleDropdown);
    window.addEventListener('click', closeDropdownIfClickOutside);
}

// Calculate duration in months
function calculateDuration(joinDate) {
    const join = new Date(joinDate);
    const now = new Date();
    const months = (now.getFullYear() - join.getFullYear()) * 12 + (now.getMonth() - join.getMonth());
    return months;
}

function calculateAge(birthDateString) {
  // Convert the birth date string to a Date object
  const birthDate = new Date(birthDateString);

  // Get today's date
  const today = new Date();

  // Calculate the difference in years
  let age = today.getFullYear() - birthDate.getFullYear();

  // Adjust the age if the birthday hasn't occurred yet this year
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
}

// Initialize mission list
function initMissionList() {
    const missionList = document.getElementById('missionList');
    missionList.innerHTML = '';
    
    missionTypes.forEach(mission => {
        const missionItem = document.createElement('div');
        missionItem.className = 'mission-item';
        missionItem.dataset.missionId = mission.id;
        
        missionItem.innerHTML = `
            <div class="mission-header">
                <div class="mission-title">${mission.title}</div>
                <div class="mission-points">+${mission.points} pts</div>
            </div>
            <div class="mission-description">${mission.description}</div>
            <div class="mission-details">
                <p>${mission.details}</p>
                <div id="mission-form-${mission.id}">
                    <!-- Mission-specific form will be populated here -->
                </div>
            </div>
        `;
        
        missionItem.addEventListener('click', function(e) {
            // Prevent event bubbling when clicking on form elements
            if (e.target.closest('.mission-form-' + mission.id)) {
                return;
            }
            selectMission(mission.id);
        });
        
        missionList.appendChild(missionItem);
    });
}

// Select a mission
function selectMission(missionId) {
    // Remove selected class from all missions
    document.querySelectorAll('.mission-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Add selected class to clicked mission
    const selectedMissionElement = document.querySelector(`[data-mission-id="${missionId}"]`);
    selectedMissionElement.classList.add('selected');
    
    // Store selected mission
    selectedMission = missionTypes.find(m => m.id === missionId);
    
    // Show mission details
    showMissionDetails(missionId);
}

// Show mission details based on mission type
function showMissionDetails(missionId) {
    const missionDetails = document.getElementById('missionDetails');
    missionDetails.innerHTML = '';
    
    const missionFormContainer = document.getElementById(`mission-form-${missionId}`);
    missionFormContainer.innerHTML = '';
    
    if (missionId === 'buy-course') {
        missionFormContainer.innerHTML = `
            <div class="form-group mt-3">
                <label for="missionLocation">Lokasi Kursus</label>
                <select class="form-control" id="missionLocation">
                    <option value="">Pilih Lokasi</option>
                    ${locations.map(location => 
                        `<option value="${location.id}">${location.name}</option>`
                    ).join('')}
                </select>
            </div>
            <div class="form-group">
                <label for="missionCourse">Pilih Kursus</label>
                <select class="form-control" id="missionCourse">
                    <option value="">Pilih Kursus</option>
                    ${coursesForMission.map(course => 
                        `<option value="${course.id}" data-price="${course.price}">${course.name} - ${formatCurrency(course.price)}</option>`
                    ).join('')}
                </select>
            </div>
            <div class="form-group">
                <label for="missionPrice">Harga</label>
                <input type="text" class="form-control" id="missionPrice" readonly placeholder="Harga akan muncul setelah memilih kursus">
            </div>
            <div class="form-group">
                <label for="missionDate">Tanggal Beli</label>
                <input type="date" class="form-control" id="missionDate">
            </div>
        `;
        
        // Add event listener for course selection
        setTimeout(() => {
            const courseSelect = document.getElementById('missionCourse');
            if (courseSelect) {
                courseSelect.addEventListener('change', function() {
                    const selectedOption = this.options[this.selectedIndex];
                    const price = selectedOption.getAttribute('data-price');
                    
                    const priceInput = document.getElementById('missionPrice');
                    if (price && priceInput) {
                        priceInput.value = formatCurrency(parseInt(price));
                    } else if (priceInput) {
                        priceInput.value = '';
                    }
                });
            }
        }, 100);
    } else if (missionId === 'refer-friend') {
        missionFormContainer.innerHTML = `
            <div class="form-group mt-3">
                <label for="referredFriend">Nama Teman yang Direferensikan</label>
                <input type="text" class="form-control" id="referredFriend" placeholder="Masukkan nama teman">
            </div>
            <div class="form-group">
                <label for="referredFriendEmail">Email Teman</label>
                <input type="email" class="form-control" id="referredFriendEmail" placeholder="Masukkan email teman">
            </div>
        `;
    } else if (missionId === 'instagram-story' || missionId === 'comment-instagram') {
        missionFormContainer.innerHTML = `
            <div class="form-group mt-3">
                <label for="instagramLink">Link Instagram Post/Story</label>
                <input type="text" class="form-control" id="instagramLink" placeholder="https://instagram.com/p/...">
            </div>
        `;
    } else if (missionId === 'google-review') {
        missionFormContainer.innerHTML = `
            <div class="form-group mt-3">
                <label for="googleReviewLink">Link Google Review</label>
                <input type="text" class="form-control" id="googleReviewLink" placeholder="Link ke review Google">
            </div>
        `;
    } else if (missionId === 'monopoly-game') {
        missionFormContainer.innerHTML = `
            <div class="form-group mt-3">
                <label for="gameScore">Skor Permainan</label>
                <input type="number" class="form-control" id="gameScore" placeholder="Masukkan skor permainan">
            </div>
        `;
    } else {
        // For simple missions like follow, like
        missionFormContainer.innerHTML = `
            <div class="mt-3">
                <p class="text-success"><i class="bi bi-check-circle-fill"></i> Misi telah diselesaikan</p>
            </div>
        `;
    }
}

// Open customer modal
function openCustomerModal() {
    document.getElementById('customerModal').classList.add('active');
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('purchaseDate').value = today;
}

function openEnrollmentModal() {
	document.getElementById('enrollmentModal').classList.add('active');
}

function openProgramModal() {
	document.getElementById('programModal').classList.add('active');
}

function openAddRankModal() {
	//alert('add rank');
	document.getElementById('addRankModal').classList.add('active');
}

function openAddMissionModal() {
	//alert('add mission');
	document.getElementById('addMissionModal').classList.add('active');
}

// Open instructor modal
function openInstructorModal() {
	document.getElementById('instructorModal').classList.add('active');
    //document.getElementById('instructorModal').classList.add('active');
}

function openAddEmailTemplateModal() {
	document.getElementById('addEmailTemplateModal').classList.add('active');
}

function openAddGameSettingModal() {
	document.getElementById('addGameSettingModal').classList.add('active');
}

function openAddAdminMgmtModal() {
	document.getElementById('adminMgmtModal').classList.add('active');
}

// Open purchase modal with pre-selected customer
function openPurchaseModalForCustomer(customerId) {
    openPurchaseModal();
    const customer = customers.find(c => c.id === customerId);
    if (customer) {
        document.getElementById('customerName').value = customer.name.toLowerCase().replace(' ', '-');
    }
}

// Close customer modal
function closeCustomerModal() {
    document.getElementById('customerModal').classList.remove('active');
    // Reset form
    document.getElementById('location').value = '';
    document.getElementById('customerName').value = '';
    document.getElementById('course').value = '';
    document.getElementById('price').value = '';
    document.getElementById('paymentMethod').value = '';
}

// Open lead modal
function openLeadModal() {
    document.getElementById('leadModal').classList.add('active');
    // Set today's date as default
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('purchaseDate').value = today;
}

// Close lead modal
function closeLeadModal() {
    document.getElementById('leadModal').classList.remove('active');
    // Reset form
    document.getElementById('location').value = '';
    document.getElementById('leadName').value = '';
    document.getElementById('course').value = '';
    document.getElementById('price').value = '';
    document.getElementById('paymentMethod').value = '';
}

// Open loyalty mission modal
function openLoyaltyMissionModal() {
    document.getElementById('loyaltyMissionModal').classList.add('active');
    initMissionList();
}

// Open loyalty mission modal with pre-selected customer
function openLoyaltyMissionModalForCustomer(customerId) {
    openLoyaltyMissionModal();
    document.getElementById('missionCustomer').value = customerId;
}

// Close loyalty mission modal
function closeLoyaltyMissionModal() {
    document.getElementById('loyaltyMissionModal').classList.remove('active');
    // Reset form
    document.getElementById('missionCustomer').value = '';
    document.getElementById('missionNotes').value = '';
    selectedMission = null;
}

// Close add mission modal
function closeAddMissionModal() {
    document.getElementById('addMissionModal').classList.remove('active');
    // Reset form
    document.getElementById('newMissionName').value = '';
    document.getElementById('newMissionDescription').value = '';
    document.getElementById('newMissionPoints').value = '';
    document.getElementById('newMissionStatus').value = 'active';
}


// Add new mission
function addNewMission() {
    const name = document.getElementById('newMissionName').value;
    const description = document.getElementById('newMissionDescription').value;
    const points = document.getElementById('newMissionPoints').value;
    const status = document.getElementById('newMissionStatus').value;
    
    if (!name || !description || !points) {
        showNotification('Please fill all required fields', 'error');
        return;
    }
    
    // Create new mission object
    const newMission = {
        id: masterMissions.length + 1,
        name: name,
        description: description,
        points: parseInt(points),
        status: status
    };
    
    // Add to master missions
    masterMissions.push(newMission);
    
    // Refresh mission table
    initMissionTable();
    
    // Close modal and show success notification
    closeAddMissionModal();
    showNotification('Mission added successfully!', 'success');
}


// Open add whatsapp template modal
function openAddWhatsappTemplateModal() {
    document.getElementById('addWhatsappTemplateModal').classList.add('active');
}

// Close add whatsapp template modal
function closeAddWhatsappTemplateModal() {
    document.getElementById('addWhatsappTemplateModal').classList.remove('active');
    // Reset form
    document.getElementById('newWhatsappTemplateName').value = '';
    document.getElementById('newWhatsappTemplateDescription').value = '';
    document.getElementById('newWhatsappTemplateStatus').value = 'active';
}

// Add new whatsapp template
function addNewWhatsappTemplate() {
    const name = document.getElementById('newWhatsappTemplateName').value;
    const description = document.getElementById('newWhatsappTemplateDescription').value;
    const status = document.getElementById('newWhatsappTemplateStatus').value;
    
    if (!name || !description) {
        showNotification('Please fill all required fields', 'error');
        return;
    }
    
    // Create new whatsapp template object
    const newWhatsappTemplate = {
        id: masterWhatsappTemplates.length + 1,
        name: name,
        description: description,
        status: status
    };
    
    // Add to master whatsapp templates
    masterWhatsappTemplates.push(newWhatsappTemplate);
    
    // Refresh whatsapp template table
    initWhatsappTemplateTableTable();
    
    // Close modal and show success notification
    closeAddMissionModal();
    showNotification('Whatsapp Template added successfully!', 'success');
}

// Open add reset mission modal
function openAddResetMissionModal() {
    document.getElementById('addResetMissionModal').classList.add('active');
}

// Open add rank mission modal
function openAddRankMissionModal() {
    document.getElementById('addRankMissionModal').classList.add('active');
}

// Open add reward modal
function openAddRewardModal() {
    document.getElementById('addRewardModal').classList.add('active');
}

// Close add reward modal
function closeAddRewardModal() {
    document.getElementById('addRewardModal').classList.remove('active');
    // Reset form
    document.getElementById('rewardName').value = '';
    document.getElementById('rewardCategory').value = '';
    document.getElementById('rewardDescription').value = '';
    document.getElementById('rewardPoints').value = '';
    document.getElementById('rewardImage').value = '';
    document.getElementById('rewardStatus').value = 'available';
}

// Add new reward
function addNewReward() {
    const name = document.getElementById('rewardName').value;
    const category = document.getElementById('rewardCategory').value;
    const description = document.getElementById('rewardDescription').value;
    const points = document.getElementById('rewardPoints').value;
    const image = document.getElementById('rewardImage').value;
    const status = document.getElementById('rewardStatus').value;
    
    if (!name || !category || !description || !points) {
        showNotification('Please fill all required fields', 'error');
        return;
    }
    
    // Create new reward object
    const newReward = {
        id: rewards.length + 1,
        name: name,
        category: category,
        description: description,
        points: parseInt(points),
        image: image,
        status: status
    };
    
    // Add to rewards
    rewards.push(newReward);
    
    // Refresh reward grid
    initRewardGrid();
    
    // Close modal and show success notification
    closeAddRewardModal();
    showNotification('Reward added successfully!', 'success');
}

// Claim reward
function claimReward(rewardId) {
    const reward = rewards.find(r => r.id === rewardId);
    
    if (!reward) {
        showNotification('Reward not found', 'error');
        return;
    }
    
    if (reward.status === 'unavailable') {
        showNotification('Reward is not available', 'error');
        return;
    }
    
    if (reward.category === 'kursus') {
        // Open course selection modal
        showNotification('Silakan pilih kursus yang diinginkan', 'info');
        return;
    }
    
    // Update reward status
    reward.status = 'claimed';
    
    // Show success notification
    showNotification(`Reward "${reward.name}" berhasil diklaim!`, 'success');
    
    // Refresh reward grid
    initRewardGrid();
}

// Edit mission
function editMission(missionId) {
    const mission = masterMissions.find(m => m.id === missionId);
    
    if (!mission) {
        showNotification('Mission not found', 'error');
        return;
    }
    
    // Fill form with mission data
    document.getElementById('newMissionName').value = mission.name;
    document.getElementById('newMissionDescription').value = mission.description;
    document.getElementById('newMissionPoints').value = mission.points;
    document.getElementById('newMissionStatus').value = mission.status;
    
    // Open modal
    openAddMissionModal();
}

// Delete mission
function deleteMission(missionId) {
    const missionIndex = masterMissions.findIndex(m => m.id === missionId);
    
    if (missionIndex === -1) {
        showNotification('Mission not found', 'error');
        return;
    }
    
    // Remove mission from array
    masterMissions.splice(missionIndex, 1);
    
    // Refresh mission table
    initMissionTable();
    
    // Show success notification
    showNotification('Mission deleted successfully!', 'success');
}

// Submit loyalty mission
function submitLoyaltyMission() {
    const customerId = document.getElementById('missionCustomer').value;
    const notes = document.getElementById('missionNotes').value;
    
    if (!customerId || !selectedMission) {
        showNotification('Please select a customer and a mission', 'error');
        return;
    }
    
    // Get customer
    const customer = customers.find(c => c.id === parseInt(customerId));
    
    // Validate mission-specific fields
    let missionData = {
        customerId: parseInt(customerId),
        missionId: selectedMission.id,
        missionTitle: selectedMission.title,
        points: selectedMission.points,
        date: new Date().toISOString().split('T')[0],
        notes: notes
    };
    
    if (selectedMission.id === 'buy-course') {
        const location = document.getElementById('missionLocation').value;
        const courseId = document.getElementById('missionCourse').value;
        const price = document.getElementById('missionPrice').value;
        const purchaseDate = document.getElementById('missionDate').value;
        
        if (!location || !courseId || !purchaseDate) {
            showNotification('Please fill all required fields', 'error');
            return;
        }
        
        const course = coursesForMission.find(c => c.id === courseId);
        missionData.locationId = location;
        missionData.locationName = locations.find(l => l.id === location).name;
        missionData.courseId = courseId;
        missionData.courseName = course.name;
        missionData.coursePrice = course.price;
        missionData.purchaseDate = purchaseDate;
    } else if (selectedMission.id === 'refer-friend') {
        const friendName = document.getElementById('referredFriend').value;
        const friendEmail = document.getElementById('referredFriendEmail').value;
        if (!friendName || !friendEmail) {
            showNotification('Please fill in friend information', 'error');
            return;
        }
        missionData.friendName = friendName;
        missionData.friendEmail = friendEmail;
    } else if (selectedMission.id === 'instagram-story' || selectedMission.id === 'comment-instagram') {
        const instagramLink = document.getElementById('instagramLink').value;
        if (!instagramLink) {
            showNotification('Please provide Instagram link', 'error');
            return;
        }
        missionData.instagramLink = instagramLink;
    } else if (selectedMission.id === 'google-review') {
        const reviewLink = document.getElementById('googleReviewLink').value;
        if (!reviewLink) {
            showNotification('Please provide Google review link', 'error');
            return;
        }
        missionData.reviewLink = reviewLink;
    } else if (selectedMission.id === 'monopoly-game') {
        const gameScore = document.getElementById('gameScore').value;
        if (!gameScore) {
            showNotification('Please provide game score', 'error');
            return;
        }
        missionData.gameScore = gameScore;
    }
    
    // Add to completed missions
    if (!completedMissions[customerId]) {
        completedMissions[customerId] = [];
    }
    completedMissions[customerId].push(missionData);
    
    // Update customer loyalty points
    customer.loyaltyPoints += selectedMission.points;
    
    // Update customer total transaction if it's a course purchase
    if (selectedMission.id === 'buy-course' && missionData.coursePrice) {
        customer.totalTransaction += missionData.coursePrice;
    }
    
    // Show points animation
    showPointsAnimation(selectedMission.points);
    
    // Close modal and show success notification
    closeLoyaltyMissionModal();
    showNotification(`Mission "${selectedMission.title}" submitted successfully! +${selectedMission.points} points added to ${customer.name}`, 'success');
    
    // Refresh customer table
    initCustomerTable();
}

// Send WhatsApp marketing promo
function sendWhatsAppMarketing() {
    const customerId = document.getElementById('missionCustomer').value;
    
    if (!customerId) {
        showNotification('Please select a customer first', 'error');
        return;
    }
    
    // Get customer
    const customer = customers.find(c => c.id === parseInt(customerId));
    
    if (!customer) {
        showNotification('Customer not found', 'error');
        return;
    }
    
    // Prepare message
    const message = "Enroll in Advanced Animation this weekend—20% off for new member, 30% off for alumni!";
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${customer.whatsapp.replace(/^0/, '62')}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    // Show notification
    showNotification(`Opening WhatsApp to send marketing promo to ${customer.name}`, 'success');
}

// Show points animation
function showPointsAnimation(points) {
    const animation = document.createElement('div');
    animation.className = 'points-animation';
    animation.textContent = `+${points} pts`;
    animation.style.left = '50%';
    animation.style.top = '50%';
    document.body.appendChild(animation);
    
    setTimeout(() => {
        animation.remove();
    }, 2000);
}

// View customer history
function viewHistory(customerId, customerName, customerAvatar) {
    document.getElementById('historyModal').classList.add('active');
    document.getElementById('historyCustomerName').textContent = customerName;
    
    // Update avatar
    const avatarElement = document.querySelector('#historyModal .customer-avatar');
    avatarElement.src = `https://picsum.photos/seed/${customerAvatar}/40/40.jpg`;
    
    // Get customer
    const customer = customers.find(c => c.id === customerId);
    
    // Update loyalty points
    document.getElementById('loyaltyPoints').textContent = `${customer.loyaltyPoints}/500 Points`;
    
    // Update progress bar
    const progressBar = document.querySelector('#historyModal .progress-fill');
    const percentage = Math.min((customer.loyaltyPoints / 500) * 100, 100);
    progressBar.style.width = `${percentage}%`;
    
    // Populate purchase history
	
    const historyItems = document.getElementById('historyItems');
    historyItems.innerHTML = '';
    
    const customerHistory = purchaseHistory[customerId] || [];
    
    if (customerHistory.length === 0) {
        historyItems.innerHTML = '<p>No purchase history found.</p>';
    } else {
        customerHistory.forEach(item => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div class="history-header">
                    <span class="history-date">${formatDate(item.date)}</span>
                    <span class="history-status ${item.status === 'completed' ? 'status-completed' : 'status-pending'}">
                        ${item.status === 'completed' ? 'Completed' : 'Pending'}
                    </span>
                </div>
                <div class="history-details">
                    <div class="detail-item">
                        <span class="detail-label">Course</span>
                        <span class="detail-value">${item.course}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Location</span>
                        <span class="detail-value">${item.location}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Price</span>
                        <span class="detail-value">${formatCurrency(item.price)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Transaction ID</span>
                        <span class="detail-value">#${item.id}</span>
                    </div>
                </div>
            `;
            historyItems.appendChild(historyItem);
        });
    }
	
    
    // Populate loyalty missions
	
    const missionsContainer = document.getElementById('loyaltyMissions');
    missionsContainer.innerHTML = '';
    
    const customerMissions = loyaltyMissions[customerId] || [];
    
    if (customerMissions.length === 0) {
        missionsContainer.innerHTML = '<p>No loyalty missions available.</p>';
    } else {
        customerMissions.forEach(mission => {
            const missionItem = document.createElement('div');
            missionItem.className = 'history-item';
            const progressPercentage = (mission.progress / mission.total) * 100;
            
            missionItem.innerHTML = `
                <div class="history-header">
                    <span>${mission.title}</span>
                    <span>${mission.points} pts</span>
                </div>
                <p class="mb-2">${mission.description}</p>
                <div class="loyalty-progress">
                    <div class="loyalty-progress-header">
                        <span>Progress</span>
                        <span>${mission.progress}/${mission.total}</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progressPercentage}%"></div>
                    </div>
                </div>
            `;
            missionsContainer.appendChild(missionItem);
        });
		
    }
    
    // Populate completed missions
    const customerCompletedMissions = completedMissions[customerId] || [];
    
    if (customerCompletedMissions.length > 0) {
        const completedMissionsHeader = document.createElement('h4');
        completedMissionsHeader.className = 'mt-4 mb-3';
        completedMissionsHeader.textContent = 'Completed Missions';
        missionsContainer.appendChild(completedMissionsHeader);
        
        customerCompletedMissions.forEach(mission => {
            const missionItem = document.createElement('div');
            missionItem.className = 'history-item';
            
            let missionDetails = '';
            if (mission.courseName) {
                missionDetails = `<div class="detail-item">
                    <span class="detail-label">Course</span>
                    <span class="detail-value">${mission.courseName}</span>
                </div>`;
            } else if (mission.friendName) {
                missionDetails = `<div class="detail-item">
                    <span class="detail-label">Referred Friend</span>
                    <span class="detail-value">${mission.friendName}</span>
                </div>`;
            }
            
            missionItem.innerHTML = `
                <div class="history-header">
                    <span>${mission.missionTitle}</span>
                    <span class="history-status status-completed">+${mission.points} pts</span>
                </div>
                <div class="history-details">
                    <div class="detail-item">
                        <span class="detail-label">Date</span>
                        <span class="detail-value">${formatDate(mission.date)}</span>
                    </div>
                    ${missionDetails}
                </div>
            `;
            missionsContainer.appendChild(missionItem);
        });
    }
}

// Close history modal
function closeHistoryModal() {
    document.getElementById('historyModal').classList.remove('active');
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');
    const notificationIcon = notification.querySelector('.notification-icon');
    
    notificationMessage.textContent = message;
    
    if (type === 'error') {
        notificationIcon.className = 'notification-icon error';
        notificationIcon.style.backgroundColor = 'rgba(251, 86, 7, 0.1)';
        notificationIcon.style.color = 'var(--danger-color)';
        notificationIcon.innerHTML = '<i class="bi bi-exclamation-circle-fill"></i>';
    } else {
        notificationIcon.className = 'notification-icon success';
        notificationIcon.style.backgroundColor = 'rgba(6, 255, 165, 0.1)';
        notificationIcon.style.color = 'var(--success-color)';
        notificationIcon.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    }
    
    notification.classList.add('show');
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Format date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Filter rewards
function filterRewards() {
    const category = document.getElementById('rewardCategoryFilter').value;
    const rewardCards = document.querySelectorAll('.reward-card');
    
    rewardCards.forEach(card => {
        if (category === '' || card.classList.contains(category)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Search functionality for customers
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('#customerTableBody tr');
    
    rows.forEach(row => {
        const customerName = row.querySelector('.customer-name').textContent.toLowerCase();
        const email = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        const whatsapp = row.querySelector('td:nth-child(3)').textContent.toLowerCase();
        
        if (customerName.includes(searchTerm) || email.includes(searchTerm) || whatsapp.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Search functionality for missions
document.getElementById('missionSearchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('#missionTableBody tr');
    
    rows.forEach(row => {
        const missionName = row.querySelector('td:nth-child(1)').textContent.toLowerCase();
        const missionDescription = row.querySelector('td:nth-child(2)').textContent.toLowerCase();
        
        if (missionName.includes(searchTerm) || missionDescription.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initCustomerTable();
	initLeadTable();
	initInstructorTable();
	initProgramTable();
	initEnrollmentTable();
    initMissionTable();
	initResetMissionTable();
	initWhatsappTemplateTable();
	initEmailTemplateTable();
    //initRewardGrid();
	initRewardTable();
	initRankTable();
	initRankMissionTable();
	initLoyaltyMemberApprovalTable();
	initAdminMgmtTable();
	initInstructorMgmtTable();
	initMissionApprovalTable();
	initGameSettingTable();
	initGameRewardSettingTable();
	initUserProfileMenu();
});

// Close modals when clicking outside
document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', function(e) {
        if (e.target === this) {
            this.classList.remove('active');
        }
    });
});

