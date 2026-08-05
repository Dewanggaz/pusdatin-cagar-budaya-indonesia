// Data budaya per provinsi
// Sumber: rangkuman pengetahuan umum kebudayaan Indonesia, disusun ulang untuk keperluan edukasi.

export const kategoriList = [
  {
    slug: 'pakaian-adat',
    nama: 'Pakaian Adat',
    deskripsi: 'Busana tradisional yang dikenakan dalam upacara adat, pernikahan, dan perayaan resmi di tiap daerah.',
    ikon: 'pakaian'
  },
  {
    slug: 'bahasa-daerah',
    nama: 'Bahasa Daerah',
    deskripsi: 'Ragam bahasa ibu yang dipakai dalam percakapan sehari-hari masyarakat di berbagai wilayah Nusantara.',
    ikon: 'bahasa'
  },
  {
    slug: 'rumah-adat',
    nama: 'Rumah Adat',
    deskripsi: 'Arsitektur tradisional yang mencerminkan filosofi hidup, iklim, dan struktur sosial masyarakat setempat.',
    ikon: 'rumah'
  },
  {
    slug: 'seni-lukis',
    nama: 'Seni Lukis & Motif',
    deskripsi: 'Karya visual, motif kain, dan lukisan tradisional yang menjadi identitas estetika suatu daerah.',
    ikon: 'lukisan'
  },
  {
    slug: 'alat-musik',
    nama: 'Alat Musik Tradisional',
    deskripsi: 'Instrumen musik khas yang mengiringi upacara adat, tarian, dan pertunjukan seni daerah.',
    ikon: 'musik'
  },
  {
    slug: 'makanan-tradisional',
    nama: 'Makanan Tradisional',
    deskripsi: 'Hidangan khas daerah yang mencerminkan budaya kuliner dan bahan lokal setempat.',
    ikon: 'makanan'
  }
  
]

export const provinsiList = [
  {
    slug: 'aceh',
    nama: 'Aceh',
    pulau: 'Sumatera',
    warna: '#0F5C4A',
    ringkasan: 'Provinsi paling barat Indonesia yang dikenal dengan julukan Serambi Mekkah dan tradisi Islam yang kuat.',
    pakaianAdat: {
      nama: 'Ulee Balang',
      deskripsi: 'Busana kebesaran bangsawan Aceh, untuk pria berupa jas tertutup dengan celana panjang dan kain sarung songket, dilengkapi penutup kepala meukeutop. Untuk perempuan berupa baju kurung dengan sulaman benang emas.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Aceh',
      deskripsi: 'Termasuk rumpun bahasa Austronesia, dituturkan mayoritas masyarakat di pesisir dan pedalaman Aceh, memiliki dialek yang bervariasi antar kabupaten.'
    },
    rumahAdat: {
      nama: 'Rumoh Aceh',
      deskripsi: 'Rumah panggung memanjang dari timur ke barat dengan tangga di bagian depan, dibangun tanpa paku menggunakan sistem pasak kayu agar tahan gempa.'
    },
    senilukis: {
      nama: 'Motif Pintu Aceh',
      deskripsi: 'Ornamen ukiran khas berbentuk lengkung dengan pola sulur tumbuhan, banyak diaplikasikan pada gerbang rumah, kain, dan kerajinan logam.'
    },
    alatMusik: {
      nama: 'Serune Kalee',
      deskripsi: 'Alat musik tiup sejenis seruling ganda yang mengiringi tarian Seudati dan Saman dengan nada yang khas dan melengking.'
    },
    makananTradicional: {
      nama: 'Nasi Padang',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Padang, memiliki cita rasa yang khas dan pedas.'
    }
  },
  {
    slug: 'sumatera-utara',
    nama: 'Sumatera Utara',
    pulau: 'Sumatera',
    warna: '#7A2E2E',
    ringkasan: 'Rumah bagi suku Batak dengan tradisi ulos dan danau vulkanik terbesar di Asia Tenggara, Danau Toba.',
    pakaianAdat: {
      nama: 'Ulos',
      deskripsi: 'Kain tenun khas Batak yang dipakai sebagai selendang atau selimut dalam upacara adat, melambangkan restu dan kasih sayang antar generasi.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Batak',
      deskripsi: 'Terdiri dari beberapa sub-dialek seperti Batak Toba, Karo, dan Simalungun, digunakan luas di kawasan sekitar Danau Toba.'
    },
    rumahAdat: {
      nama: 'Rumah Bolon',
      deskripsi: 'Rumah panggung besar berbentuk persegi dengan atap melengkung menyerupai pelana kuda, dihuni bersama oleh beberapa keluarga.'
    },
    senilukis: {
      nama: 'Motif Gorga',
      deskripsi: 'Ukiran khas Batak dengan pola geometris dan simbol flora-fauna yang menghiasi dinding rumah adat, sarat makna filosofis.'
    },
    alatMusik: {
      nama: 'Gondang Sabangunan',
      deskripsi: 'Ansambel musik pukul yang terdiri dari beberapa gendang bernada berbeda, dimainkan dalam upacara adat Batak.'
    },
    makananTradicional: {
      nama: 'Sate Batak',
      deskripsi: 'Sate yang dibuat dengan daging sapi atau ayam, disajikan dengan bumbu kacang khas Batak yang memiliki cita rasa yang khas.'
    }
  },
  {
    slug: 'dki-jakarta',
    nama: 'DKI Jakarta',
    pulau: 'Jawa',
    warna: '#1B4B6B',
    ringkasan: 'Ibu kota Indonesia dengan budaya Betawi yang lahir dari percampuran berbagai etnis pendatang.',
    pakaianAdat: {
      nama: 'Baju Sadariah & Kebaya Encim',
      deskripsi: 'Pria mengenakan baju sadariah dengan sarung dan peci, perempuan mengenakan kebaya encim bermotif bunga yang dipengaruhi budaya Tionghoa-Peranakan.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Betawi',
      deskripsi: 'Dialek Melayu kreol yang berkembang dari percampuran bahasa penduduk asli, Tionghoa, Arab, dan Eropa di Batavia.'
    },
    rumahAdat: {
      nama: 'Rumah Kebaya',
      deskripsi: 'Rumah dengan atap berbentuk pelana terlipat yang menyerupai lipatan kebaya, memiliki teras luas untuk menerima tamu.'
    },
    senilukis: {
      nama: 'Ondel-Ondel',
      deskripsi: 'Boneka besar berwajah dekoratif dengan hiasan warna-warni, aslinya digunakan sebagai penolak bala, kini menjadi ikon seni pertunjukan Betawi.'
    },
    alatMusik: {
      nama: 'Tanjidor',
      deskripsi: 'Orkes musik tiup logam yang dipengaruhi budaya Eropa, sering mengiringi arak-arakan pengantin dan perayaan rakyat.'
    },
    makananTradicional: {
      nama: 'Nasi Timbel',
      deskripsi: 'Nasi yang disajikan dengan lauk pauk khas Betawi, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'jawa-barat',
    nama: 'Jawa Barat',
    pulau: 'Jawa',
    warna: '#8A5A1E',
    ringkasan: 'Tanah Pasundan yang menjunjung tinggi kesenian Sunda, dari angklung hingga tari jaipong.',
    pakaianAdat: {
      nama: 'Kebaya Sunda',
      deskripsi: 'Kebaya dengan kain batik motif khas Sunda, dipadukan selendang, sering dikenakan bersama sanggul dan bunga melati.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Sunda',
      deskripsi: 'Bahasa dengan tingkatan kesopanan (undak usuk basa) yang mengatur pilihan kata sesuai lawan bicara, dituturkan luas di tatar Sunda.'
    },
    rumahAdat: {
      nama: 'Rumah Kasepuhan / Julang Ngapak',
      deskripsi: 'Rumah panggung dengan atap menyerupai sayap burung mengepak, dibangun dari bambu dan kayu yang menyatu dengan alam.'
    },
    senilukis: {
      nama: 'Motif Batik Megamendung',
      deskripsi: 'Motif awan bergaris lengkung khas Cirebon dengan gradasi warna, melambangkan kesejukan dan pengendalian emosi.'
    },
    alatMusik: {
      nama: 'Angklung',
      deskripsi: 'Alat musik bambu yang dimainkan dengan cara digoyangkan, telah diakui UNESCO sebagai warisan budaya takbenda dunia.'
    },
    makananTradicional: {
      nama: 'Nasi Kuning',
      deskripsi: 'Nasi yang dimasak dengan santan dan kunyit, disajikan dengan lauk pauk khas Sunda yang memiliki cita rasa yang khas.'
    }
  },
  {
    slug: 'jawa-tengah',
    nama: 'Jawa Tengah',
    pulau: 'Jawa',
    warna: '#5C4A1E',
    ringkasan: 'Pusat kebudayaan Jawa klasik dengan warisan keraton, batik, dan wayang kulit yang mendunia.',
    pakaianAdat: {
      nama: 'Kebaya Jawa & Beskap',
      deskripsi: 'Perempuan mengenakan kebaya dengan kain jarik batik, pria mengenakan beskap tertutup berkerah dengan blangkon di kepala.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Jawa',
      deskripsi: 'Memiliki tingkatan ngoko, krama madya, dan krama inggil yang mencerminkan kesantunan dan strata sosial dalam berkomunikasi.'
    },
    rumahAdat: {
      nama: 'Joglo',
      deskripsi: 'Rumah dengan atap tumpang bersusun dan empat tiang utama (soko guru), melambangkan kosmologi dan keseimbangan hidup Jawa.'
    },
    senilukis: {
      nama: 'Batik Klasik Solo-Yogya',
      deskripsi: 'Batik dengan motif parang, kawung, dan sido mukti yang memiliki makna filosofis dan aturan pemakaian tersendiri di lingkungan keraton.'
    },
    alatMusik: {
      nama: 'Gamelan Jawa',
      deskripsi: 'Ansambel alat musik pukul perunggu seperti saron, bonang, dan gong, membentuk laras slendro dan pelog yang khas.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Jawa Tengah, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'jawa-timur',
    nama: 'Jawa Timur',
    pulau: 'Jawa',
    warna: '#6B4A2E',
    ringkasan: 'Tanah kelahiran kerajaan Majapahit dengan tradisi seni yang beragam, dari ludruk hingga reog Ponorogo.',
    pakaianAdat: {
      nama: 'Kebaya & Beskap Jawa Timur',
      deskripsi: 'Kebaya dengan kain batik motif khas Madura atau Surabaya, pria mengenakan beskap dengan blangkon dan keris sebagai simbol keberanian.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Jawa Dialek Timur',
      deskripsi: 'Varian bahasa Jawa dengan intonasi lebih keras dan kosakata unik, digunakan dalam percakapan sehari-hari di wilayah timur Pulau Jawa.'
    },
    rumahAdat: {
      nama: 'Rumah Limasan',
      deskripsi: 'Rumah panggung dengan atap limas bertingkat, memiliki teras luas dan ruang utama yang digunakan untuk menerima tamu.'
    },
    senilukis: {
      nama: 'Motif Batik Madura',
      deskripsi: 'Batik dengan warna cerah dan motif flora-fauna yang mencerminkan kehidupan masyarakat pesisir, sering dipakai dalam upacara adat dan pernikahan.'
    },
    alatMusik: {
      nama: 'Gamelan Madura',
      deskripsi: 'Ansambel musik tradisional dengan instrumen pukul dan tiup, mengiringi tarian dan pertunjukan rakyat di Madura dan sekitarnya.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Madura, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'di-yogyakarta',
    nama: 'DI Yogyakarta',
    pulau: 'Jawa',
    warna: '#6B2E1A',
    ringkasan: 'Daerah istimewa yang menjadi pusat pelestarian seni tradisi Jawa di bawah naungan Keraton Ngayogyakarta.',
    pakaianAdat: {
      nama: 'Peranakan & Kebaya Yogyakarta',
      deskripsi: 'Busana adat dengan pakem keraton yang ketat, memiliki aturan warna dan motif berbeda untuk tiap acara resmi.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Jawa dialek Yogyakarta',
      deskripsi: 'Varian bahasa Jawa dengan intonasi khas, banyak dipengaruhi tata krama lingkungan keraton dalam penggunaan sehari-hari.'
    },
    rumahAdat: {
      nama: 'Bangsal Kencono',
      deskripsi: 'Bangunan utama keraton berbentuk joglo dengan ukiran dan warna keemasan, menjadi pusat kegiatan seremonial kesultanan.'
    },
    senilukis: {
      nama: 'Wayang Beber',
      deskripsi: 'Lukisan di atas kertas atau kain panjang yang digulung, menceritakan kisah epik dengan cara dibeber sambil didalangi.'
    },
    alatMusik: {
      nama: 'Gamelan Sekaten',
      deskripsi: 'Perangkat gamelan pusaka keraton yang dimainkan khusus saat perayaan Sekaten memperingati kelahiran Nabi Muhammad SAW.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Yogyakarta, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'bali',
    nama: 'Bali',
    pulau: 'Nusa Tenggara',
    warna: '#B5651D',
    ringkasan: 'Pulau Dewata dengan tradisi Hindu yang kental, mewarnai setiap aspek seni dan kehidupan masyarakatnya.',
    pakaianAdat: {
      nama: 'Payas Adat Bali',
      deskripsi: 'Busana upacara dengan kain kamen, selendang, dan udeng (ikat kepala) bagi pria, serta kebaya dan sanggul bunga bagi perempuan.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Bali',
      deskripsi: 'Memiliki tingkatan bahasa halus dan kasar (anggah-ungguhing basa) yang digunakan sesuai konteks sosial dan keagamaan.'
    },
    rumahAdat: {
      nama: 'Rumah Adat Bali (Angkul-angkul)',
      deskripsi: 'Kompleks hunian dengan gerbang angkul-angkul dan pembagian ruang berdasarkan konsep Tri Hita Karana yang menyeimbangkan alam, manusia, dan Tuhan.'
    },
    senilukis: {
      nama: 'Lukisan Gaya Kamasan',
      deskripsi: 'Lukisan klasik Bali dengan pewarnaan alami dan garis tegas, umumnya menggambarkan kisah pewayangan dan mitologi Hindu.'
    },
    alatMusik: {
      nama: 'Gamelan Gong Kebyar',
      deskripsi: 'Ansambel gamelan Bali dengan tempo dinamis dan perubahan dinamika cepat, mengiringi tari-tarian sakral maupun hiburan.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Bali, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'kalimantan-selatan',
    nama: 'Kalimantan Selatan',
    pulau: 'Kalimantan',
    warna: '#2E5C4A',
    ringkasan: 'Provinsi dengan tradisi Suku Banjar yang kuat, dikenal dengan pasar terapung dan seni tenun sasirangan.',
    pakaianAdat: {
      nama: 'Baamar Galung Pancar Matahari',
      deskripsi: 'Busana pengantin Banjar dengan mahkota berbentuk pancaran matahari, melambangkan kemuliaan dan harapan hidup bahagia.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Banjar',
      deskripsi: 'Bahasa rumpun Melayik yang menjadi lingua franca di sebagian besar wilayah Kalimantan Selatan dan sekitarnya.'
    },
    rumahAdat: {
      nama: 'Rumah Bubungan Tinggi',
      deskripsi: 'Rumah panggung dengan atap curam menjulang tinggi, dahulu menjadi kediaman bangsawan dan pejabat kesultanan Banjar.'
    },
    senilukis: {
      nama: 'Kain Sasirangan',
      deskripsi: 'Kain celup ikat dengan motif khas yang dahulu dipercaya memiliki nilai penyembuhan, kini menjadi busana khas Kalimantan Selatan.'
    },
    alatMusik: {
      nama: 'Panting',
      deskripsi: 'Alat musik petik mirip gambus berdawai tiga hingga enam, menjadi ciri khas orkes tradisional Banjar.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Kalimantan Selatan, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'sulawesi-selatan',
    nama: 'Sulawesi Selatan',
    pulau: 'Sulawesi',
    warna: '#7A1E2E',
    ringkasan: 'Tanah para pelaut Bugis-Makassar dengan tradisi maritim dan kapal phinisi yang legendaris.',
    pakaianAdat: {
      nama: 'Baju Bodo',
      deskripsi: 'Busana perempuan berlengan pendek dari kain tipis dengan warna mencolok, salah satu busana tertua di Nusantara.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Bugis & Makassar',
      deskripsi: 'Dua bahasa utama dengan aksara lontara sendiri, digunakan dalam naskah kuno seperti I La Galigo.'
    },
    rumahAdat: {
      nama: 'Rumah Tongkonan / Rumah Panggung Bugis',
      deskripsi: 'Rumah panggung kayu dengan atap pelana melengkung, ruang terbagi berdasarkan fungsi sosial dan spiritual keluarga.'
    },
    senilukis: {
      nama: 'Ukiran Toraja',
      deskripsi: 'Ukiran geometris berwarna hitam, merah, kuning, dan putih yang menghiasi rumah Tongkonan, tiap motif memiliki makna simbolis.'
    },
    alatMusik: {
      nama: 'Kacaping',
      deskripsi: 'Alat musik petik berbentuk perahu kecil yang biasa mengiringi nyanyian dan syair kelong pada acara adat Makassar.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Sulawesi Selatan, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'papua',
    nama: 'Papua',
    pulau: 'Papua',
    warna: '#1E4A2E',
    ringkasan: 'Wilayah paling timur Indonesia dengan keragaman suku, bahasa, dan seni ukir yang sangat kaya.',
    pakaianAdat: {
      nama: 'Koteka & Rok Rumbai',
      deskripsi: 'Busana tradisional berbahan alami seperti kulit kayu, daun sagu, dan bulu burung cendrawasih untuk hiasan kepala pada upacara adat.'
    },
    bahasaDaerah: {
      nama: 'Rumpun Bahasa Papua',
      deskripsi: 'Terdiri dari ratusan bahasa daerah berbeda seperti Dani, Biak, dan Asmat yang menjadikan Papua wilayah paling multibahasa di Indonesia.'
    },
    rumahAdat: {
      nama: 'Honai',
      deskripsi: 'Rumah bundar beratap jerami dengan dinding kayu tersusun rapat, dirancang menahan hawa dingin dataran tinggi pegunungan.'
    },
    senilukis: {
      nama: 'Ukiran Asmat',
      deskripsi: 'Ukiran kayu tiga dimensi dengan motif leluhur dan alam, dianggap sebagai media penghubung dunia manusia dan roh nenek moyang.'
    },
    alatMusik: {
      nama: 'Tifa',
      deskripsi: 'Gendang tabung berbahan kayu dan kulit hewan, dimainkan dalam hampir setiap upacara adat dan tarian perang Papua.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Papua, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'papua-pegunungan',
    nama: 'Papua Pegunungan',
    pulau: 'Papua',
    warna: '#2E5C4A',
    ringkasan: 'Wilayah pegunungan tengah Papua yang terkenal dengan suku Dani, Lani, dan Yali serta tradisi perang suku dan festival budaya.',
    pakaianAdat: {
      nama: 'Koteka & Hiasan Bulu',
      deskripsi: 'Pria mengenakan koteka (penutup alat kelamin) dan hiasan bulu burung cendrawasih, perempuan mengenakan rok rumbai dari serat alam.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Dani & Lani',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku pegunungan, memiliki sistem kata kerja yang kompleks dan kosakata yang kaya akan istilah alam.'
    },
    rumahAdat: {
      nama: 'Honai Pegunungan',
      deskripsi: 'Rumah bundar beratap jerami yang dibangun di dataran tinggi, berfungsi sebagai tempat tinggal dan pusat kegiatan sosial.'
    },
    senilukis: {
      nama: 'Ukiran dan Lukisan Tubuh',
      deskripsi: 'Motif ukiran pada peralatan rumah dan lukisan tubuh yang melambangkan status sosial, keberanian, dan identitas suku.'
    },
    alatMusik: {
      nama: 'Tifa Pegunungan',
      deskripsi: 'Gendang tabung yang dimainkan dalam upacara adat, tarian perang, dan festival budaya di wilayah pegunungan Papua.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Papua Pegunungan, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'sumatera-barat',
    nama: 'Sumatera Barat',
    pulau: 'Sumatera',
    warna: '#4A2E1E',
    ringkasan: 'Kampung halaman suku Minangkabau dengan sistem kekerabatan matrilineal dan filosofi alam takambang jadi guru.',
    pakaianAdat: {
      nama: 'Bundo Kanduang',
      deskripsi: 'Busana perempuan dengan penutup kepala tinggi berbentuk tanduk kerbau (tingkuluak), melambangkan kedudukan perempuan dalam adat Minang.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Minangkabau',
      deskripsi: 'Bahasa dengan tradisi tutur pantun dan pepatah-petitih yang kuat, banyak digunakan dalam upacara adat dan musyawarah nagari.'
    },
    rumahAdat: {
      nama: 'Rumah Gadang',
      deskripsi: 'Rumah panggung dengan atap runcing menyerupai tanduk kerbau (gonjong), menjadi pusat kehidupan sosial keluarga besar matrilineal.'
    },
    senilukis: {
      nama: 'Motif Songket Minang',
      deskripsi: 'Kain tenun bersulam benang emas dengan motif flora dan geometris, dipakai dalam upacara adat dan pernikahan.'
    },
    alatMusik: {
      nama: 'Saluang',
      deskripsi: 'Alat musik tiup bambu sejenis suling tanpa lidah getar, menghasilkan nada mendayu yang mengiringi lagu-lagu Minang.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Sumatera Barat, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'nusa-tenggara-timur',
    nama: 'Nusa Tenggara Timur',
    pulau: 'Nusa Tenggara',
    warna: '#8A4A1E',
    ringkasan: 'Gugusan kepulauan dengan tenun ikat khas tiap pulau dan tradisi megalitik yang masih terjaga.',
    pakaianAdat: {
      nama: 'Tenun Ikat NTT',
      deskripsi: 'Kain tenun dengan motif berbeda di tiap pulau seperti Sumba, Flores, dan Timor, ditenun dengan teknik ikat pakan yang rumit.'
    },
    bahasaDaerah: {
      nama: 'Rumpun Bahasa NTT',
      deskripsi: 'Meliputi bahasa Dawan, Manggarai, dan Sumba, mencerminkan keragaman etnis di antara ratusan pulau wilayah ini.'
    },
    rumahAdat: {
      nama: 'Mbaru Niang',
      deskripsi: 'Rumah adat berbentuk kerucut tinggi khas Wae Rebo, Flores, tersusun lima lantai dengan fungsi berbeda tiap tingkatnya.'
    },
    senilukis: {
      nama: 'Motif Tenun Sumba',
      deskripsi: 'Corak tenun dengan gambar kuda, manusia, dan pohon kehidupan, sarat cerita leluhur dan status sosial pemakainya.'
    },
    alatMusik: {
      nama: 'Sasando',
      deskripsi: 'Alat musik petik dari daun lontar dan bambu asal Pulau Rote, menghasilkan suara khas menyerupai gitar akustik.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Nusa Tenggara Timur, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'maluku',
    nama: 'Maluku',
    pulau: 'Maluku',
    warna: '#4A6B2E',
    ringkasan: 'Kepulauan rempah dengan sejarah perdagangan global, kaya akan musik tradisional dan tarian perang.',
    pakaianAdat: {
      nama: 'Baju Cele',
      deskripsi: 'Busana adat Maluku yang dikenakan dalam upacara adat dan pernikahan, biasanya berwarna cerah dengan hiasan manik-manik.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Ambon & Ternate',
      deskripsi: 'Bahasa Melayu Ambon sebagai lingua franca, serta bahasa lokal seperti Ternate dan Tidore yang masih digunakan di pulau-pulau sekitarnya.'
    },
    rumahAdat: {
      nama: 'Rumah Baileo',
      deskripsi: 'Bangunan komunitas besar berbentuk panggung dengan atap tinggi, digunakan untuk pertemuan adat dan upacara keagamaan.'
    },
    senilukis: {
      nama: 'Motif Ukiran Maluku',
      deskripsi: 'Ukiran kayu dengan pola flora-fauna yang menghiasi rumah adat dan perahu tradisional, mencerminkan hubungan masyarakat dengan laut.'
    },
    alatMusik: {
      nama: 'Tifa Maluku',
      deskripsi: 'Gendang tabung yang dimainkan dengan cara dipukul, menjadi pengiring tarian perang dan upacara adat di Maluku.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Maluku, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'papua-barat',
    nama: 'Papua Barat',
    pulau: 'Papua',
    warna: '#2E4A6B',
    ringkasan: 'Wilayah barat Pulau Papua dengan suku Arfak, Maybrat, dan Manokwari yang memiliki tradisi seni ukir dan tarian perang.',
    pakaianAdat: {
      nama: 'Koteka & Hiasan Kepala',
      deskripsi: 'Pria mengenakan koteka dan hiasan kepala dari bulu burung cendrawasih, perempuan mengenakan rok rumbai dari serat alam.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Arfak & Maybrat',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Papua Barat, memiliki kosakata yang kaya akan istilah alam dan budaya.'
    },
    rumahAdat: {
      nama: 'Rumah Honai Papua Barat',
      deskripsi: 'Rumah bundar beratap jerami yang dibangun di dataran tinggi, berfungsi sebagai tempat tinggal dan pusat kegiatan sosial masyarakat setempat.'
    },
    senilukis: {
      nama: 'Ukiran dan Lukisan Tubuh Papua Barat',
      deskripsi: 'Motif ukiran pada peralatan rumah dan lukisan tubuh yang melambangkan status sosial, keberanian, dan identitas suku di Papua Barat.'
    },
    alatMusik: {
      nama: 'Tifa Papua Barat',
      deskripsi: 'Gendang tabung yang dimainkan dalam upacara adat, tarian perang, dan festival budaya di wilayah Papua Barat.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Papua Barat, memiliki cita rasa yang khas dan lezat.'
    } 
  },
  {
    slug: 'kalimantan-tengah',
    nama: 'Kalimantan Tengah',
    pulau: 'Kalimantan',
    warna: '#4A6B4A',
    ringkasan: 'Tanah Dayak dengan tradisi panjang rumah panjang, seni ukir kayu, dan ritual adat yang masih lestari.',
    pakaianAdat: {
      nama: 'Pakaian Adat Dayak',
      deskripsi: 'Busana adat dengan hiasan manik-manik, bulu burung, dan kain tenun khas Dayak yang dipakai dalam upacara adat dan tarian.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Dayak',
      deskripsi: 'Rumpun bahasa Austronesia yang digunakan oleh berbagai sub-suku Dayak di Kalimantan Tengah, memiliki dialek yang beragam.'
    },
    rumahAdat: {
      nama: 'Rumah Panjang',
      deskripsi: 'Bangunan panjang berbentuk panggung yang dihuni oleh beberapa keluarga besar, menjadi pusat kegiatan sosial dan ritual adat Dayak.'
    },
    senilukis: {
      nama: 'Motif Ukiran Dayak',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panjang, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Sape',
      deskripsi: 'Alat musik petik tradisional berbentuk seperti gitar kecil, dimainkan dalam upacara adat dan pertunjukan seni Dayak.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Dayak, memiliki cita rasa yang khas dan lezat.'
    } 
  },
  {
    slug: 'kalimantan-barat',
    nama: 'Kalimantan Barat',
    pulau: 'Kalimantan',
    warna: '#2E6B4A',
    ringkasan: 'Provinsi dengan tradisi Melayu dan Dayak yang kaya, terkenal dengan seni ukir, tenun, dan rumah panggung.',
    pakaianAdat: {
      nama: 'Pakaian Adat Melayu & Dayak',
      deskripsi: 'Busana adat Melayu dengan kain songket dan hiasan kepala, serta busana adat Dayak dengan manik-manik dan bulu burung.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Melayu & Dayak',
      deskripsi: 'Bahasa Melayu sebagai lingua franca, serta berbagai bahasa Dayak yang digunakan oleh suku-suku di Kalimantan Barat.'
    },
    rumahAdat: {
      nama: 'Rumah Betang & Rumah Melayu',
      deskripsi: 'Rumah panjang Dayak (betang) dan rumah panggung Melayu yang mencerminkan arsitektur tradisional dan filosofi hidup masyarakat setempat.'
    },
    senilukis: {
      nama: 'Motif Ukiran Kalimantan Barat',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panjang, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Gendang & Sape',
      deskripsi: 'Alat musik tradisional seperti gendang tabung dan sape yang dimainkan dalam upacara adat dan pertunjukan seni di Kalimantan Barat.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Kalimantan Barat, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'kalimantan-timur',
    nama: 'Kalimantan Timur',
    pulau: 'Kalimantan',
    warna: '#4A6B6B',
    ringkasan: 'Tanah Dayak dan Kutai dengan tradisi kerajaan, seni ukir, dan ritual adat yang masih dijaga.',
    pakaianAdat: {
      nama: 'Pakaian Adat Dayak & Kutai',
      deskripsi: 'Busana adat dengan hiasan manik-manik, bulu burung, dan kain tenun khas Dayak dan Kutai yang dipakai dalam upacara adat dan tarian.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Dayak & Kutai',
      deskripsi: 'Berbagai bahasa Dayak dan Kutai yang digunakan oleh suku-suku di Kalimantan Timur.'
    },
    rumahAdat: {
      nama: 'Rumah Panjang & Rumah Kutai',
      deskripsi: 'Bangunan panjang berbentuk panggung yang dihuni oleh beberapa keluarga besar, menjadi pusat kegiatan sosial dan ritual adat Dayak dan Kutai.'
    },
    senilukis: {
      nama: 'Motif Ukiran Kalimantan Timur',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panjang, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Gendang & Sape',
      deskripsi: 'Alat musik tradisional seperti gendang tabung dan sape yang dimainkan dalam upacara adat dan pertunjukan seni di Kalimantan Timur.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Kalimantan Timur, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'sulawesi-utara',
    nama: 'Sulawesi Utara',
    pulau: 'Sulawesi',
    warna: '#6B4A4A',
    ringkasan: 'Tanah Minahasa dan Gorontalo dengan tradisi maritim, tarian perang, dan kuliner khas yang pedas.',
    pakaianAdat: {
      nama: 'Baju Bodo & Baju Adat Gorontalo',
      deskripsi: 'Busana adat Minahasa dengan baju bodo tipis dan sarung, serta busana adat Gorontalo dengan kain songket dan hiasan kepala.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Minahasa & Gorontalo',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Sulawesi Utara, memiliki kosakata yang kaya akan istilah maritim dan budaya lokal.'
    },
    rumahAdat: {
      nama: 'Rumah Walewangko & Rumah Adat Gorontalo',
      deskripsi: 'Rumah panggung dengan atap melengkung khas Minahasa dan rumah panggung Gorontalo yang mencerminkan arsitektur tradisional dan filosofi hidup masyarakat setempat.'
    },
    senilukis: {
      nama: 'Motif Ukiran Minahasa & Gorontalo',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panggung, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Kolintang & Gendang Gorontalo',
      deskripsi: 'Alat musik tradisional seperti kolintang (alat musik pukul) dan gendang yang dimainkan dalam upacara adat dan pertunjukan seni di Sulawesi Utara.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Sulawesi Utara, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'sulawesi-tengah',
    nama: 'Sulawesi Tengah',
    pulau: 'Sulawesi',
    warna: '#4A6B6B',
    ringkasan: 'Tanah Kaili dan Lore dengan tradisi maritim, tarian perang, dan kuliner khas yang pedas.',
    pakaianAdat: {
      nama: 'Baju Bodo & Baju Adat Lore',
      deskripsi: 'Busana adat Kaili dengan baju bodo tipis dan sarung, serta busana adat Lore dengan kain songket dan hiasan kepala.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Kaili & Lore',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Sulawesi Tengah, memiliki kosakata yang kaya akan istilah maritim dan budaya lokal.'
    },
    rumahAdat: {
      nama: 'Rumah Walewangko & Rumah Adat Lore',
      deskripsi: 'Rumah panggung dengan atap melengkung khas Kaili dan rumah panggung Lore yang mencerminkan arsitektur tradisional dan filosofi hidup masyarakat setempat.'
    },
    senilukis: {
      nama: 'Motif Ukiran Kaili & Lore',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panggung, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Kolintang & Gendang Lore',
      deskripsi: 'Alat musik tradisional seperti kolintang (alat musik pukul) dan gendang yang dimainkan dalam upacara adat dan pertunjukan seni di Sulawesi Tengah.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Sulawesi Tengah, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'sulawesi-tenggara',
    nama: 'Sulawesi Tenggara',
    pulau: 'Sulawesi',
    warna: '#6B4A2E',
    ringkasan: 'Tanah Buton dan Muna dengan tradisi maritim, tarian perang, dan kuliner khas yang pedas.',
    pakaianAdat: {
      nama: 'Baju Bodo & Baju Adat Buton',
      deskripsi: 'Busana adat Buton dengan baju bodo tipis dan sarung, serta busana adat Muna dengan kain songket dan hiasan kepala.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Buton & Muna',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Sulawesi Tenggara, memiliki kosakata yang kaya akan istilah maritim dan budaya lokal.'
    },
    rumahAdat: {
      nama: 'Rumah Walewangko & Rumah Adat Muna',
      deskripsi: 'Rumah panggung dengan atap melengkung khas Buton dan rumah panggung Muna yang mencerminkan arsitektur tradisional dan filosofi hidup masyarakat setempat.'
    },
    senilukis: {
      nama: 'Motif Ukiran Buton & Muna',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panggung, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Kolintang & Gendang Muna',
      deskripsi: 'Alat musik tradisional seperti kolintang (alat musik pukul) dan gendang yang dimainkan dalam upacara adat dan pertunjukan seni di Sulawesi Tenggara.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Sulawesi Tenggara, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'maluku-utara',
    nama: 'Maluku Utara',
    pulau: 'Maluku',
    warna: '#4A6B2E',
    ringkasan: 'Kepulauan rempah dengan sejarah perdagangan global, kaya akan musik tradisional dan tarian perang.',
    pakaianAdat: {
      nama: 'Baju Cele',
      deskripsi: 'Busana adat Maluku yang dikenakan dalam upacara adat dan pernikahan, biasanya berwarna cerah dengan hiasan manik-manik.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Ternate & Tidore',
      deskripsi: 'Bahasa Melayu Ambon sebagai lingua franca, serta bahasa lokal seperti Ternate dan Tidore yang masih digunakan di pulau-pulau sekitarnya.'
    },
    rumahAdat: {
      nama: 'Rumah Baileo',
      deskripsi: 'Bangunan komunitas besar berbentuk panggung dengan atap tinggi, digunakan untuk pertemuan adat dan upacara keagamaan.'
    },
    senilukis: {
      nama: 'Motif Ukiran Maluku',
      deskripsi: 'Ukiran kayu dengan pola flora-fauna yang menghiasi rumah adat dan perahu tradisional, mencerminkan hubungan masyarakat dengan laut.'
    },
    alatMusik: {
      nama: 'Tifa Maluku',
      deskripsi: 'Gendang tabung yang dimainkan dengan cara dipukul, menjadi pengiring tarian perang dan upacara adat di Maluku.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Maluku Utara, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'papua-selatan',
    nama: 'Papua Selatan',
    pulau: 'Papua',
    warna: '#2E4A6B',
    ringkasan: 'Wilayah selatan Pulau Papua dengan suku Asmat, Marind, dan Sawi yang memiliki tradisi seni ukir dan tarian perang.',
    pakaianAdat: {
      nama: 'Koteka & Hiasan Kepala',
      deskripsi: 'Pria mengenakan koteka dan hiasan kepala dari bulu burung cendrawasih, perempuan mengenakan rok rumbai dari serat alam.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Asmat & Marind',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Papua Selatan, memiliki kosakata yang kaya akan istilah alam dan budaya.'
    },
    rumahAdat: {
      nama: 'Rumah Honai Papua Selatan',
      deskripsi: 'Rumah bundar beratap jerami yang dibangun di dataran tinggi, berfungsi sebagai tempat tinggal dan pusat kegiatan sosial masyarakat setempat.'
    },
    senilukis: {
      nama: 'Ukiran dan Lukisan Tubuh Papua Selatan',
      deskripsi: 'Motif ukiran pada peralatan rumah dan lukisan tubuh yang melambangkan status sosial, keberanian, dan identitas suku di Papua Selatan.'
    },
    alatMusik: {
      nama: 'Tifa Papua Selatan',
      deskripsi: 'Gendang tabung yang dimainkan dalam upacara adat, tarian perang, dan festival budaya di wilayah Papua Selatan.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Papua Selatan, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'papua-utara',
    nama: 'Papua Utara',
    pulau: 'Papua',
    warna: '#2E4A6B',
    ringkasan: 'Wilayah utara Pulau Papua dengan suku Biak, Yapen, dan Waropen yang memiliki tradisi seni ukir dan tarian perang.',
    pakaianAdat: {
      nama: 'Koteka & Hiasan Kepala',
      deskripsi: 'Pria mengenakan koteka dan hiasan kepala dari bulu burung cendrawasih, perempuan mengenakan rok rumbai dari serat alam.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Biak & Yapen',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Papua Utara, memiliki kosakata yang kaya akan istilah alam dan budaya.'
    },
    rumahAdat: {
      nama: 'Rumah Honai Papua Utara',
      deskripsi: 'Rumah bundar beratap jerami yang dibangun di dataran tinggi, berfungsi sebagai tempat tinggal dan pusat kegiatan sosial masyarakat setempat.'
    },
    senilukis: {
      nama: 'Ukiran dan Lukisan Tubuh Papua Utara',
      deskripsi: 'Motif ukiran pada peralatan rumah dan lukisan tubuh yang melambangkan status sosial, keberanian, dan identitas suku di Papua Utara.'
    },
    alatMusik: {
      nama: 'Tifa Papua Utara',
      deskripsi: 'Gendang tabung yang dimainkan dalam upacara adat, tarian perang, dan festival budaya di wilayah Papua Utara.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Papua Utara, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'papua-tengah',
    nama: 'Papua Tengah',
    pulau: 'Papua',
    warna: '#2E4A6B',
    ringkasan: 'Wilayah tengah Pulau Papua dengan suku Mee, Moni, dan Nduga yang memiliki tradisi seni ukir dan tarian perang.',
    pakaianAdat: {
      nama: 'Koteka & Hiasan Kepala',
      deskripsi: 'Pria mengenakan koteka dan hiasan kepala dari bulu burung cendrawasih, perempuan mengenakan rok rumbai dari serat alam.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Mee & Moni',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Papua Tengah, memiliki kosakata yang kaya akan istilah alam dan budaya.'
    },
    rumahAdat: {
      nama: 'Rumah Honai Papua Tengah',
      deskripsi: 'Rumah bundar beratap jerami yang dibangun di dataran tinggi, berfungsi sebagai tempat tinggal dan pusat kegiatan sosial masyarakat setempat.'
    },
    senilukis: {
      nama: 'Ukiran dan Lukisan Tubuh Papua Tengah',
      deskripsi: 'Motif ukiran pada peralatan rumah dan lukisan tubuh yang melambangkan status sosial, keberanian, dan identitas suku di Papua Tengah.'
    },
    alatMusik: {
      nama: 'Tifa Papua Tengah',
      deskripsi: 'Gendang tabung yang dimainkan dalam upacara adat, tarian perang, dan festival budaya di wilayah Papua Tengah.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Papua Tengah, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'papua-barat-daya',
    nama: 'Papua Barat Daya',
    pulau: 'Papua',
    warna: '#2E4A6B',
    ringkasan: 'Wilayah barat daya Pulau Papua dengan suku Asmat, Marind, dan Sawi yang memiliki tradisi seni ukir dan tarian perang.',
    pakaianAdat: {
      nama: 'Koteka & Hiasan Kepala',
      deskripsi: 'Pria mengenakan koteka dan hiasan kepala dari bulu burung cendrawasih, perempuan mengenakan rok rumbai dari serat alam.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Asmat & Marind',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Papua Barat Daya, memiliki kosakata yang kaya akan istilah alam dan budaya.'
    },
    rumahAdat: {
      nama: 'Rumah Honai Papua Barat Daya',
      deskripsi: 'Rumah bundar beratap jerami yang dibangun di dataran tinggi, berfungsi sebagai tempat tinggal dan pusat kegiatan sosial masyarakat setempat.'
    },
    senilukis: {
      nama: 'Ukiran dan Lukisan Tubuh Papua Barat Daya',
      deskripsi: 'Motif ukiran pada peralatan rumah dan lukisan tubuh yang melambangkan status sosial, keberanian, dan identitas suku di Papua Barat Daya.'
    },
    alatMusik: {
      nama: 'Tifa Papua Barat Daya',
      deskripsi: 'Gendang tabung yang dimainkan dalam upacara adat, tarian perang, dan festival budaya di wilayah Papua Barat Daya.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Papua Barat Daya, memiliki cita rasa yang khas dan lezat.'
    }
  },
  {
    slug: 'sulawesi-barat',
    nama: 'Sulawesi Barat',
    pulau: 'Sulawesi',
    warna: '#6B4A4A',
    ringkasan: 'Tanah Mandar dan Toraja dengan tradisi maritim, tarian perang, dan kuliner khas yang pedas.',
    pakaianAdat: {
      nama: 'Baju Bodo & Baju Adat Mandar',
      deskripsi: 'Busana adat Mandar dengan baju bodo tipis dan sarung, serta busana adat Toraja dengan kain songket dan hiasan kepala.'
    },
    bahasaDaerah: {
      nama: 'Bahasa Mandar & Toraja',
      deskripsi: 'Bahasa daerah yang digunakan oleh suku-suku di Sulawesi Barat, memiliki kosakata yang kaya akan istilah maritim dan budaya lokal.'
    },
    rumahAdat: {
      nama: 'Rumah Walewangko & Rumah Adat Toraja',
      deskripsi: 'Rumah panggung dengan atap melengkung khas Mandar dan rumah panggung Toraja yang mencerminkan arsitektur tradisional dan filosofi hidup masyarakat setempat.'
    },
    senilukis: {
      nama: 'Motif Ukiran Mandar & Toraja',
      deskripsi: 'Ukiran kayu dengan pola geometris dan simbol flora-fauna yang menghiasi rumah panggung, perahu, dan peralatan adat.'
    },
    alatMusik: {
      nama: 'Kolintang & Gendang Toraja',
      deskripsi: 'Alat musik tradisional seperti kolintang (alat musik pukul) dan gendang yang dimainkan dalam upacara adat dan pertunjukan seni di Sulawesi Barat.'
    },
    makananTradicional: {
      nama: 'Nasi Campur',
      deskripsi: 'Nasi yang disajikan dengan berbagai lauk pauk khas Sulawesi Barat, memiliki cita rasa yang khas dan lezat.'
    }
  }
]

export function getProvinsiBySlug(slug) {
  return provinsiList.find((p) => p.slug === slug)
}

export function getKategoriBySlug(slug) {
  return kategoriList.find((k) => k.slug === slug)
}
