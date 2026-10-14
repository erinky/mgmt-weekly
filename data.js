// UTSC Mgmt Weekly — 매주 이 파일만 교체하면 됨.
// kind: "event"(행사일) | "deadline"(마감일)
// date: 행사/마감 날짜, registerBy: 신청 마감(원문 "by Oct 19"), years: 대상 학년(없으면 전체)
// section: "club"(메인) | "career"(사이드 Careers & Recruiting)
window.WEEK = {
  label: "Oct 12 – 18, 2026",
  start: "2026-10-12",
  end: "2026-10-18",
  items: [
    {
      id: "sba-soccer", section: "club", kind: "event",
      club: "SBA", title: "Soccer Tournament",
      date: "2026-10-15", tags: ["social"],
      link: "https://docs.google.com/forms/d/1J4Ta5Kmd3NvLtOmSO8c91FVi27SDLdL-cWnB74bBbFQ"
    },
    {
      id: "is-utfsc", section: "club", kind: "deadline",
      club: "I$", title: "UTFSC 2026 Early Bird Registration Ends",
      date: "2026-10-16", tags: ["finance", "cases"],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSccYJygYlp5r4nC8d6v05SB8rpWU9FdkC17RbfycK5i8u_f9Q/viewform"
    },
    {
      id: "w3b-hiring", section: "club", kind: "deadline",
      club: "W3B", title: "Associate Hiring",
      date: "2026-10-18", tags: ["roles"],
      link: "https://forms.gle/pPY8k97GHTuuJ1Vf9"
    },
    {
      id: "mta-claude", section: "club", kind: "event",
      club: "MTA", title: "Claude Workshop",
      registerBy: "2026-10-19", tags: ["tech"],
      link: "http://forms.gle/VQ2zXxxU75g3d7WX7"
    },
    {
      id: "ace-panel", section: "club", kind: "event",
      club: "ACE", title: "Delegate Panel",
      date: "2026-10-21", tags: ["networking"],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSei1IYNyjfAhKZef15h2eCVnB-yJhd-IqaOCdV1oYvy1JSFLQ/viewform"
    },
    {
      id: "mesa-hra-sports", section: "club", kind: "event",
      club: "MESA × HRA", title: "Sports Day",
      registerBy: "2026-10-21", tags: ["social", "hr"],
      link: "https://forms.gle/QrJCPGPZJJHriY6w8"
    },
    {
      id: "sig-networking", section: "club", kind: "event",
      club: "SIG", title: "Industry Networking Night",
      date: "2026-10-23", tags: ["networking"],
      link: "https://docs.google.com/forms/d/e/1FAIpQLSeUpCd4hzd14-c4UrorS4ZosZs1ZkLUY29xy2FAC13PlUZstw/viewform"
    },
    {
      id: "cpa-lunch", section: "career", kind: "event",
      club: "UTSC × CPA Ontario", title: "Lunch & Learn",
      date: "2026-10-19", tags: ["accounting", "networking"],
      link: "https://myportal.cpaontario.ca/s/lt-event?id=a1UMm000006A62HMAS"
    },
    {
      id: "cpa-case", section: "career", kind: "event",
      club: "CPA Ontario", title: "The CPA Way: Case Competition",
      date: "2026-10-19", years: [1, 2], tags: ["accounting", "cases"],
      link: "https://myportal.cpaontario.ca/s/lt-event?id=a1UMm000005jnWLMAY"
    },
    {
      id: "cpa-psap", section: "career", kind: "event",
      club: "CPA Ontario", title: "PSAP Prestige",
      years: [3, 4], fewSpots: true, tags: ["accounting"],
      link: "https://myportal.cpaontario.ca/s/lt-event?id=a1UMm000005rqLlMAI"
    }
  ]
};
