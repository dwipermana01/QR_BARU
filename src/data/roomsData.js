export const roomsData = {

  // GEDUNG SMP LANTAI 1-4 //
  "030101": {
    name: "Ruangan Tata Usaha",
    location: "Lantai 1 - Gedung SMP",
    capacity: "",
    nameClass: "Ruangan Tata Usaha",
    building: "SMP",
    floor: "3",
    roomNumber: "R03-01-01",
    
    // field images untuk carousel
    images: [
      {
        src: "/images/rooms/7a/kelas-7a-view1.jpeg",
        alt: "Tampak depan Kelas St. Cecilia"
      },
      {
        src: "/images/rooms/7a/kelas-7a-view2.jpeg", 
        alt: "Suasana belajar di Kelas St. Cecilia"
      },
      {
        src: "/images/rooms/7a/kelas-7a-view3.jpeg",
        alt: "Fasilitas AC dan proyektor Kelas St. Cecilia"
      },
      {
        src: "/images/rooms/7a/kelas-7a-view4.jpeg",
        alt: "Bagian belakang Kelas St. Cecilia"
      }
    ],
    
    assets: [
      { icon: "/icons/table.svg", name: "Meja", count: "2 Unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi", count: "7 Unit"},
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Lemari", count: "6 Unit"},
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit"},
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit"},
      { icon: "/icons/loker.svg", name: "Lemari/Rak", count: "3 Unit"},
      { icon: "/icons/curtain.svg", name: "Gorden", count: "1 Unit"},
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "2 Unit"},
      { icon: "/icons/wastafel.svg", name: "Wastafel", count: "1 Unit"},
      { icon: "/icons/fotocopy.svg", name: "Printer", count: "2 Unit"}
    ],
    mapImage: "",
    legendItems: [
      { number: 1, name: "Pintu Masuk", color: "#fffff"},
      { number: 4, name: "Papan Data Informasi", color: "#d7d7d7"},
      { number: 5, name: "Lemari", color: "#ff8c8e"},
      { number: 7, name: "Tempat Sampah", color: "#379e90", textColor: "#fffff"},
      { number: 8, name: "Papan Tulis", color: "#641b2e", textColor: "#fffff"},
      { number: 11, name: "Kursi Guru", color: "#ffc000"},
      { number: 12, name: "Meja Guru", color: "#fbdb93"},
      { number: 16, name: "Kursi & Meja Siswa", color: "#89a3fe"},
      { number: 17, name: "AC", color: "#e9ecff"},
      { number: 18, name: "Jendela", color: "#fffff"},
      { number: 20, name: "Loker", color: "#ffff7f"},
      { number: 22, name: "Jam Dinding", color: "#2c9df5", textColor: "#fffff"}
    ]
  },

  
  "030102": {
    name: "Ruangan Kepala Sekolah",
    location: "Lantai 1 - Gedung SMP",
    capacity: "",
    nameClass: "Ruangan Kepala Sekolah",
    building: "SMP",
    floor: "1",
    roomNumber: "R03-01-02",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja", count: "4 Unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi", count: "6 Unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 Unit"},
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 Unit"},
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit"},
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit"},
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "1 Unit"},
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit"},
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit"},
      { icon: "/icons/flag.svg", name: "Bendera", count: "2 Set"},
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit"},
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "3 Unit"},
      { icon: "/icons/patung.svg", name: "Patung", count: "2 Unit"},
    ],
    mapImage: "/maps/r030202.jpg",
    legendItems: [
      { number: 1, name: "Pintu Kelas", color: "#fffff"}
    ]
  },
  
  "030103": {
    name: "Ruangan Meeting",
    location: "Lantai 1 - Gedung SMP",
    capacity: "12 Orang",
    nameClass: "Ruangan Meeting",
    building: "SMP",
    floor: "1",
    roomNumber: "R03-01-02",
    images: [
      {
        src: "/images/rooms/ruangmeeting/meeting1.jpeg",
        alt: "Tampak Depan TV",
      },
      {
        src: "/images/rooms/ruangmeeting/meeting2.jpeg", 
        alt: "Tampak Depan",
      },
      {
        src: "/images/rooms/ruangmeeting/meeting4.jpeg",
        alt: "Tampak Dalam 1",
      },
      {
        src: "/images/rooms/ruangmeeting/meeting5.jpeg",
        alt: "Tampak Dalam 2",
      },
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Meeting", count: "1 set Unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Meeting", count: "12 Unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "1 Unit" },
      { icon: "/icons/mic.svg", name: "Microphone", count: "1 Unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "1 Unit" }, 
      { icon: "/icons/board-tv.svg", name: "Webex Board", count: "1 Unit" },
      { icon: "/icons/loker.svg", name: "Lemari/Rak", count: "2 Unit"},
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit"},
      { icon: "/icons/curtain.svg", name: "Gorden", count: "3 Unit"},
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit"},
      { icon: "/icons/lockers.svg", name: "Loker", count: "4 Unit"},
      { icon: "/icons/audio-player.svg", name: "Audio Player", count: "1 Set"},
      { icon: "/icons/table-umum.svg", name: "Meja", count: "5 Unit"},
      { icon: "/icons/mixer.svg", name: "Mixer Audio", count: "2 Unit"},
      { icon: "/icons/nursecall.svg", name: "Nurse Call Aiphone", count: "1 Unit"},
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "3 Unit"}
    ],
    mapImage: "",
    legendItems: [
      { number: 1, name: "Pintu Kelas", color: "#fffff"}
    ]
  },

  "030104": {
    name: "Ruangan Wakil Kepala Sekolah",
    location: "Lantai 1 - Gedung SMP",
    capacity: "",
    nameClass: "Ruangan Wakil Kepala Sekolah",
    building: "SMP",
    floor: "1",
    roomNumber: "R03-01-02",
    images: [
      {
        src: "/images/rooms/ruangmeeting/meeting1.jpeg",
        alt: "Tampak Depan TV",
      },
      {
        src: "/images/rooms/ruangmeeting/meeting2.jpeg", 
        alt: "Tampak Depan",
      },
      {
        src: "/images/rooms/ruangmeeting/meeting4.jpeg",
        alt: "Tampak Dalam 1",
      },
      {
        src: "/images/rooms/ruangmeeting/meeting5.jpeg",
        alt: "Tampak Dalam 2",
      },
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 Unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 Unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 Unit"},
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 Unit"},
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 Unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 Unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 Unit" },
      { icon: "/icons/projectorScreen.svg", name: "Layar Proyektor", count: "1 Unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit"},
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit"},
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit"},
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit"},
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "1 Unit"},
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit"},
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit"},
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set"},
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit"},
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit"},
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit"}
    ],
    mapImage: "",
    legendItems: [
      { number: 1, name: "Pintu Kelas", color: "#fffff"}
    ]
  },

  "030105": {
    name: "Ruang Kebersihan",
    location: "Lantai 1 - Gedung SMP",
    capacity: "",
    nameClass: "Ruang Kebersihan",
    building: "SMP",
    floor: "1",
    roomNumber: "R03-01-05",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 Unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 Unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 Unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 Unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 Unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 Unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 Unit" },
      { icon: "/icons/projectorScreen.svg", name: "Layar Proyektor", count: "1 Unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030106": {
    name: "Ruang Kelas VII A",
    location: "Lantai 1 - Gedung SMP",
    capacity: "",
    nameClass: "Ruang Kelas VII A",
    building: "SMP",
    floor: "1",
    roomNumber: "R03-01-06",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "26 Unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "26 Unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 Unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 Unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 Unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 Unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 Unit" },
      { icon: "/icons/projectorScreen.svg", name: "Layar Proyektor", count: "1 Unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "1 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "6 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030107": {
    name: "Ruang Kelas VII B",
    location: "Lantai 1 - Gedung SMP",
    capacity: "",
    nameClass: "Ruang Kelas VII B",
    building: "SMP",
    floor: "1",
    roomNumber: "R03-01-07",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "26 Unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "24 Unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 Unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 Unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 Unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 Unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 Unit" },
      { icon: "/icons/projectorScreen.svg", name: "Layar Proyektor", count: "1 Unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030201": {
    name: "Kelas IX C",
    location: "Lantai 2 - Gedung SMP",
    capacity: "",
    nameClass: "Kelas IX C",
    building: "SMP",
    floor: "2",
    roomNumber: "R03-02-01",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "25 Unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "24 Unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 Unit"},
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 Unit"},
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 Unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 Unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 Unit" },
      { icon: "/icons/projectorScreen.svg", name: "Layar Proyektor", count: "1 Unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit"},
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit"},
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "1 Unit"},
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit"},
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit"},
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set"},
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit"},
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit"},
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit"}
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },
  
  "030202": {
    name: "Ruang Serbaguna",
    location: "Lantai 1 - Gedung SMP",
    capacity: "",
    nameClass: "Ruang Serbaguna",
    building: "SMP",
    floor: "2",
    roomNumber: "R03-02-02",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
     assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "31 Unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "27 Unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 Unit"},
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 Unit"},
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 Unit" },
      { icon: "/icons/water-boiler.svg", name: "Water Boiler", count: "1 Unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 Unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 Unit" },
      { icon: "/icons/projectorScreen.svg", name: "Layar Proyektor", count: "1 Unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit"},
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit"},
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit"},
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit"},
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit"},
      { icon: "/icons/curtain.svg", name: "Gorden", count: "6 Unit"},
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit"},
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set"},
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit"},
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit"},
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit"}
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030203": {
    name: "Ruang Kebersihan",
    location: "Lantai 2 - Gedung SMP",
    capacity: "",
    nameClass: "Ruang Kebersihan",
    building: "SMP",
    floor: "2",
    roomNumber: "R03-02-03",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/water-dispenser.svg", name: "Dispenser", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/table.svg", name: "Meja", count: "2 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030204": {
    name: "Kelas IX B",
    location: "Lantai 2 - Gedung SMP",
    capacity: "",
    nameClass: "Kelas IX B",
    building: "SMP",
    floor: "2",
    roomNumber: "R03-02-04",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "25 Unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "24 Unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 Unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 Unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 Unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 Unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 Unit" },
      { icon: "/icons/projectorScreen.svg", name: "Layar Proyektor", count: "1 Unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "1 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "5 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030205": {
    name: "Kelas IX A",
    location: "Lantai 2 - Gedung SMP",
    capacity: "",
    nameClass: "Kelas IX A",
    building: "SMP",
    floor: "2",
    roomNumber: "R03-02-05",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "28 Unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "24 Unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 Unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 Unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 Unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 Unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 Unit" },
      { icon: "/icons/projectorScreen.svg", name: "Layar Proyektor", count: "1 Unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "6 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030301": {
    name: "Kelas VII B",
    location: "Lantai 3 - Gedung SMP",
    capacity: "",
    nameClass: "Kelas VII B",
    building: "SMP",
    floor: "3",
    roomNumber: "R03-03-01",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "28 Unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 Unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 Unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 Unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 Unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 Unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 Unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "1 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/stopcontact.svg", name: "Stopcontact", count: "1 Unit" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030302": {
    name: "Kelas VII A",
    location: "Lantai 3 - Gedung SMP",
    capacity: "",
    nameClass: "Kelas VII A",
    building: "SMP",
    floor: "3",
    roomNumber: "R03-03-02",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

   "030303": {
    name: "Ruang Kebersihan",
    location: "Lantai 3 - Gedung SMP",
    capacity: "",
    nameClass: "Ruang Kebersihan",
    building: "SMP",
    floor: "1",
    roomNumber: "R03-03-03",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

   "030304": {
    name: "Ruang BK",
    location: "Lantai 3 - Gedung SMP",
    capacity: "",
    nameClass: "Ruang BK",
    building: "SMP",
    floor: "3",
    roomNumber: "R03-03-04",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

   "030305": {
    name: "UKS Putri",
    location: "Lantai 3 - Gedung SMP",
    capacity: "",
    nameClass: "UKS Putri",
    building: "SMP",
    floor: "3",
    roomNumber: "R03-03-05",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

   "030306": {
    name: "Pentry",
    location: "Lantai 3 - Gedung SMP",
    capacity: "",
    nameClass: "Pentry",
    building: "SMP",
    floor: "3",
    roomNumber: "R03-03-06",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

   "030307": {
    name: "Ruang Guru",
    location: "Lantai 3 - Gedung SMP",
    capacity: "",
    nameClass: "Ruang Guru",
    building: "SMP",
    floor: "3",
    roomNumber: "R03-03-07",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },
  
  "030308": {
    name: "UKS Putra",
    location: "Lantai 3 - Gedung SMP",
    capacity: "",
    nameClass: "UKS Putra",
    building: "SMP",
    floor: "3",
    roomNumber: "R03-03-08",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030401": {
    name: "Ruang Maker Space",
    location: "Lantai 4 - Gedung SMP",
    capacity: "",
    nameClass: "Ruang Maker Space",
    building: "SMP",
    floor: "4",
    roomNumber: "R03-04-01",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi Kelas", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030402": {
    name: "Lab. Komputer",
    location: "Lantai 4 - Gedung SMP",
    capacity: "",
    nameClass: "Lab. Komputer",
    building: "SMP",
    floor: "4",
    roomNumber: "R03-04-02",
    images: [
      {
        src: "/images/rooms/labkomputer/labkom-view1.jpg",
        alt: "Tampak Depan Lab.Komputer"
      },
       {
        src: "/images/rooms/labkomputer/labkom-view2.jpg",
        alt: "Tampak Samping Lab.Komputer"
      },
       {
        src: "/images/rooms/labkomputer/labkom-view3.jpg",
        alt: "Tampak Belakang Lab.Komputer"
      },
       {
        src: "/images/rooms/labkomputer/labkom-view4.jpg",
        alt: "Tampak Belakang Lab.Komputer"
      }
    ],
    assets: [
      { icon: "/icons/studentChair.svg", name: "Kursi Plastik", count: "32 unit" },
      { icon: "/icons/table.svg", name: "Meja Victor", count: "21 unit" }, 
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "1 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "6 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/computer.svg", name: "Komputer", count: "32 unit" },
      { icon: "/icons/router.svg", name: "Router", count: "1 unit" },
      { icon: "/icons/airConditioner.svg", name: "AC", count: "2 unit" }
    ],
    mapImage: "/maps/r030402.jpg",
    legendItems: [
      { number: 1, name: "Pintu Masuk", color: "#fffff" },
      { number: 2, name: "Jam Dinding", color: "#2B9DF5" },
      { number: 3, name: "IP Camera", color: "#FDFF84" },
      { number: 4, name: "Projector", color: "#FF7978" },
      { number: 5, name: "Papan Tulis Hijau", color: "#00AF50" },
      { number: 6, name: "Bendera", color: "#892D3A", textColor: "#fffff"},
      { number: 7, name: "Papan Tulis", color: "#641B2E", textColor: "#fffff"},
      { number: 8, name: "Layar Proyektor", color: "#fed2e2"},
      { number: 9, name: "Bingkai", color: "#251FB3"},
      { number: 10, name: "Layar Proyektor", color: "#FED2E3"},
      { number: 11, name: "Speaker", color: "#7C7C7C", textColor: "#fffff"},
      { number: 12, name: "Salib", color: "#14183D", textColor: "#fffff"},
      { number: 13, name: "Meja Victor", color: "#869FF9", textColor: "#fffff"},
      { number: 14, name: "Kursi Plastik", color: "#869FF9", textColor: "#fffff"},
      { number: 15, name: "Komputer", color: "#696969", textColor: "#fffff"},
      { number: 16, name: "Jendela", color: "#fffff"},
      { number: 17, name: "Router", color: "#f4f4f4"},
      { number: 18, name: "AC", color: "#f4f4f4"},
      { number: 19, name: "Lemari Kayu", color: "#FF7E79"},
      { number: 20, name: "CCTV", color: "#f4f4f4"}
    ]
  },

  "030403": {
    name: "Gudang",
    location: "Lantai 4 - Gedung SMP",
    capacity: "",
    nameClass: "Gudang",
    building: "SMP",
    floor: "4",
    roomNumber: "R03-04-02",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030404": {
    name: "Ruang Art",
    location: "Lantai 4 - Gedung SMP",
    capacity: "",
    nameClass: "Ruang Art",
    building: "SMP",
    floor: "4",
    roomNumber: "R03-04-04",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030405": {
    name: "Marketplace",
    location: "Lantai 4 - Gedung SMP",
    capacity: "",
    nameClass: "Marketplace",
    building: "SMP",
    floor: "4",
    roomNumber: "R03-04-05",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },

  "030406": {
    name: "Ruang PAK DWI",
    location: "Lantai 4 - Gedung SMP",
    capacity: "",
    nameClass: "Ruang PAK DWI",
    building: "SMP",
    floor: "4",
    roomNumber: "R03-04-06",
    images: [
      {
        src: "",
        alt: ""
      }
    ],
    assets: [
      { icon: "/icons/table.svg", name: "Meja Siswa", count: "30 unit" },
      { icon: "/icons/studentChair.svg", name: "Kursi Siswa", count: "30 unit" },
      { icon: "/icons/teacherDesk.svg", name: "Meja Guru", count: "1 unit" },
      { icon: "/icons/teacherChair.svg", name: "Kursi Guru", count: "1 unit" },
      { icon: "/icons/speaker.svg", name: "Speaker", count: "2 unit" },
      { icon: "/icons/airConditioner.svg", name: "Air Conditioner", count: "2 unit" },
      { icon: "/icons/projector.svg", name: "Proyektor", count: "1 unit" },
      { icon: "/icons/projectorScreen.svg", name: "Screen Proyektor", count: "1 unit" },
      { icon: "/icons/whiteboardFrame.svg", name: "Papan Tulis", count: "2 Unit" },
      { icon: "/icons/cctv.svg", name: "CCTV", count: "1 Unit" },
      { icon: "/icons/ipCamera.svg", name: "IP Camera", count: "1 Unit" },
      { icon: "/icons/lockers.svg", name: "Loker", count: "2 Unit" },
      { icon: "/icons/clock.svg", name: "Jam Dinding", count: "1 Unit" },
      { icon: "/icons/trash.svg", name: "Tempat Sampah", count: "1 Unit" },
      { icon: "/icons/cabinet.svg", name: "Lemari", count: "2 Unit" },
      { icon: "/icons/curtain.svg", name: "Gorden", count: "7 Unit" },
      { icon: "/icons/cross.svg", name: "Salib", count: "1 Unit" },
      { icon: "/icons/flag.svg", name: "Bendera", count: "1 Set" },
      { icon: "/icons/garudaPancasila.svg", name: "Lambang Garuda", count: "1 Unit" },
      { icon: "/icons/frame.svg", name: "Bingkai", count: "2 Unit" },
      { icon: "/icons/hangingWhiteboard.svg", name: "Papan Data Informasi", count: "1 Unit" }
    ],
    mapImage: "",
    legendItems: [
      { number: "", name: "", color: "" }
    ]
  },
  
  // Contoh kelas dengan gambar dari URL eksternal
  "tk-a": {
    name: "TK A",
    location: "Lantai 1 - Gedung TK",
    capacity: "20 anak",
    nameClass: "TK A",
    subject: "Pembelajaran Anak Usia Dini",
    building: "TK",
    floor: "1",
    roomNumber: "TK.01",
    access: "Pintu utama gedung TK",
    
    assets: [
      { icon: "/icons/chair-small.svg", name: "Kursi Anak", count: "20 unit" },
      { icon: "/icons/desk-small.svg", name: "Meja Anak", count: "20 unit" },
      { icon: "/icons/toys.svg", name: "Mainan Edukatif", count: "15 set" },
      { icon: "/icons/books.svg", name: "Buku Cerita", count: "50 buku" },
      { icon: "/icons/art-supplies.svg", name: "Alat Gambar", count: "20 set" },
    ],
    mapImage: "/images/maps/tk-a-map.jpg",
    legendItems: [
      { number: 1, name: "Pintu Masuk", color: "bg-red-500" },
      { number: 2, name: "Area Bermain", color: "bg-blue-500" },
      { number: 3, name: "Area Belajar", color: "bg-green-500" },
    ]
  },
  
  // Contoh kelas tanpa gambar (akan menggunakan fallback)
  "8a": {
    name: "Kelas 8A",
    location: "Lantai 2 - Gedung SMP",
    capacity: "32 siswa",
    nameClass: "8A",
    building: "SMP",
    floor: "2",
    roomNumber: "R02.02.01",
    
    // Tidak ada images - akan menggunakan fallback
    // images: undefined,
    
    assets: [
      { icon: "/icons/table.svg", name: "Kursi Siswa", count: "32 unit" },
      { icon: "/icons/desk.svg", name: "Meja Siswa", count: "32 unit" },
      { icon: "/icons/whiteboard.svg", name: "Whiteboard", count: "1 unit" },
      { icon: "/icons/ac.svg", name: "AC", count: "2 unit" },
    ],
    mapImage: "/images/maps/8a-map.jpg",
    legendItems: [
      { number: 1, name: "Pintu Masuk", color: "bg-red-500" },
      { number: 2, name: "Whiteboard", color: "bg-gray-500" },
    ]
  }
};