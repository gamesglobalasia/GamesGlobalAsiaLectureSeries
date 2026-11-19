// Speaker portraits. Imported rather than referenced by path so that Vite
// fingerprints them and rewrites the URLs for the GitHub Pages base path.
//
// These are display-sized copies (longest edge 600px) of the originals that
// sit alongside them in this folder; the full-resolution files are kept but
// are far too large to ship for a 96px avatar.
import souvikPhoto from './portraits/souvik-mukherjee.jpg';
import yichenPhoto from './portraits/yichen-rao.jpg';
import meixuPhoto from './portraits/mayshu-zhan.jpg';
import dinoPhoto from './portraits/dino-ge-zhang.jpg';
import rachaelPhoto from './portraits/rachael-hutchinson.jpg';
import jacobPhoto from './portraits/jacob-schmidt-madsen.jpg';
import paulinePhoto from './portraits/pauline-lee.jpg';

/**
 * Master switch for the individual lecture pages.
 *
 *   true  — speaker names in the schedule link to a detail page (#/lecture/<id>)
 *   false — names render as plain text and any /lecture/ URL falls back to the
 *           home page. Nothing else about the site changes.
 */
export const LECTURE_PAGES_ENABLED = true;

export interface LectureDetail {
  /** Title of the presentation. */
  title: string;
  /** Brief abstract of the presentation. */
  abstract: string;
  /** Presenter's bio. */
  bio: string;
  /** Presentation time, including time zones. */
  time: string;
  /** Presentation location, e.g. "Online". */
  location: string;
  /**
   * Optional video documentation. Use an *embed* URL, e.g.
   * "https://www.youtube.com/embed/VIDEO_ID" or "https://player.vimeo.com/video/ID".
   * Leave it out entirely and the video block is not rendered at all.
   */
  videoUrl?: string;
}

export interface Lecture {
  id: string;
  /** Display date, as printed on the poster. */
  date: string;
  /** ISO-ish sort key; day omitted where only the month is confirmed. */
  sortKey: string;
  name: string;
  affiliation: string;
  /** Imported headshot. Falls back to the speaker's initials when absent. */
  photo?: string;
  detail: LectureDetail;
}

/** Text shown wherever detail content has not been supplied yet. */
const TBA = 'To be announced.';
const TITLE_TBA = 'Presentation title to be announced';

export const lectures: Lecture[] = [
  {
    id: 'souvik-mukherjee',
    date: 'September 15th, 2026',
    sortKey: '2026-09-15',
    name: 'Souvik Mukherjee',
    photo: souvikPhoto,
    affiliation:
      'Associate professor in Cultural Studies at the Centre for Studies in Social Sciences Calcutta, India',
    detail: {
      title:
        'Sedentary: The (Post)Colonial Absence of Boardgames and Videogames from Indian Historiography',
      abstract: 'In this talk, Dr Souvik Mukherjee will start by addressing the term “sedentary games,” which in colonial parlance referred to board games and implied laziness and idleness. He will then explore how this notion remained embedded in the historical mindset and has since persisted in popular perceptions of videogames as wasteful and perverse. He will look at popular media responses to videogames and also films that perpetuate this thinking.',
      bio: 'Dr Souvik Mukherjee is associate professor in Cultural Studies at the Centre for Studies in Social Sciences Calcutta, India. Souvik’s research looks at videogames as storytelling media through a broad spectrum of topics in Game Studies ranging from postcolonialism, identity and temporality in videogames to videogame cultures in South-East Asia. Souvik is the author of four monographs, Videogames and Storytelling: Reading Games and Playing Books (Palgrave Macmillan 2015), Videogames and Postcolonialism: Empire Plays Back (Springer UK 2017), Videogames in the Indian Subcontinent: Development, Culture(s) and Representations (Bloomsbury India 2022) and Indian Boardgames, Colonial Avatars: Transculturation, Colonialism and Boardgames (De Gruyter 2025). Souvik has been named a Digital Games Research Association (DiGRA) Distinguished Scholar in 2019 and a Higher Education Video Game Alliance (HEVGA) fellow in 2022.',
      time: '9:00am – 10:00am EST · 6:30pm – 7:30pm IST',
      location: 'Online',
      videoUrl: 'https://www.youtube.com/embed/EpBbNirDdp4?list=PLZ5Qg5euYTRk',
    },
  },
  {
    id: 'yichen-rao',
    date: 'October 7th, 2026',
    sortKey: '2026-10-07',
    name: 'Yichen Rao',
    photo: yichenPhoto,
    affiliation:
      'Assistant Professor of Cultural Anthropology at Utrecht University and China AI Lead at the Inclusive AI Lab',
    detail: {
      title: 'Rethinking Addiction in Digital China: Esports, Fintech, and AI Chatbots',
      abstract: 'In China, a teenager in an “internet addiction” treatment camp told me that school was simply a badly designed game; an IT worker lost her savings through an investment app; a university student could no longer trust his own writing without asking generative AI to check it. What do these scenes share? Drawing on a decade of ethnographic research in digital China, this talk approaches addiction not as a medicalized category but as a phenomenological condition emerging through particular modes of mediated connection. Across esports, fintech, and AI chatbots, digital media promise to eliminate everyday frictions—waiting, uncertainty, hesitation, and the need to negotiate with others. Yet frictionless interfaces also reorganize how people relate to themselves, to others, and to the future. In a country where “internet addiction” remains widely treated as a social problem, why is one form of frictionlessness diagnosed as addiction while another is celebrated as innovation? What kind of mediated world are people being invited into?',
      bio: 'Yichen Rao is Assistant Professor of Cultural Anthropology at Utrecht University and China AI Lead at the Inclusive AI Lab. He combines anthropology, media studies, and STS to examine how digital technologies and capitalist models shape subjectivities in global China. He has published widely on topics of fin-tech, gaming addiction, digital infrastructure, scams, and AI. He has recently been awarded an ERC Starting Grant to examine the global impact of Chinese AI ecosystems and e-commerce platforms and their role in reconfiguring contemporary capitalism. He also serves as a council member of Society of Social Studies of Science (4S) and Sci-Tech Asia research network. ',
      time: '11am - 12pm EDT',
      location: 'Online',
      videoUrl: '',
    },
  },
  {
    id: 'mayshu-zhan',
    date: 'October 28th, 2026',
    sortKey: '2026-10-28',
    name: 'Mayshu (Meixu) Zhan',
    photo: meixuPhoto,
    affiliation: 'PhD candidate in Modern Thought and Literature at Stanford University',
    detail: {
      title: 'Women at Play: Feminist Reinscriptions of Chinese Game History, 1980s to Post-2010s',
      abstract: `This article traces women’s participation in Chinese gaming between the early 1980s and the post-2010 era, not as a simple move from absence to presence, but through shifting access, visibility, and value. Building on Western feminist media history that asks, per Laine Nooney, not only “Where are women in game history?” but “Why are they there in the way that they are?,” it reconstructs women’s place in Chinese game history while arguing that frameworks centered on liberal inclusion do not fully capture how gender operates in a postsocialist, state-led media system entangled with patriarchy and consumerism.

    To fill this gap, the article draws on materials such as game magazines, policy documents, online forums, and feminist scholarship, situating game history within Chinese state policy, gender politics, and media infrastructures, to reconstruct four overlapping moments: the arcade–home divide of the early reform era; negotiations over liberal aspiration and “Chineseness” in the late 1990s and first decades of the 2000s; the 2000 to 2010 rise of online games, esports, and beauty marketing; and the 2010 to 2015 platform and mobile boom that drew more women into mobile games, otome/boy love titles, esports, and livestreaming under tightening moral and commercial control.

    Across these periods, women surface as players, industry practitioners, community leaders, esports champions, and market icons, as well as bearers of national morality and targets of monetization. The post-2010 period sees NGO crackdowns, the so-called masculinity crisis, online misogyny, and stricter game censorship unfold alongside mobile and otome blockbusters, mobile esports, and feminist player communities, which expand but also fragment women’s presence. Under these conditions, industry and the state increasingly depoliticize women as consumer-citizens. Women players and creators, however, keep testing how far games can push back against these limits. Taken together, these histories show the value of a feminist reconstruction of Chinese gaming: It makes women visible in an understudied context and reveals how gender operates within a postsocialist, state-led media system.`,
      bio: 'Mayshu (Meixu) Zhan is a PhD candidate in the Program in Modern Thought and Literature at Stanford University, with minors in Computer Science and Communication, and a Graduate Certificate in Science, Technology, and Society. Her research bridges digital game studies, gender studies, and Chinese cultural studies. Through community-driven methods, she examines how gender and power operate in digital culture, with particular attention to algorithmic bias and platform governance. As an amateur game designer, she uses critical design and interactive media to explore themes such as reproductive rights and gun violence. Her work has appeared in Game Studies, ROMchip, and Platypus and is forthcoming in Feminist Media Studies and Asian Popular Culture and the Gothic (Routledge Advances in Popular Culture Studies series)',
      time: '1pm - 2pm EST, 10am - 11am PDT',
      location: 'Online',
      videoUrl: '',
    },
  },
  {
    id: 'dino-ge-zhang',
    date: 'December 1st, 2026',
    sortKey: '2026-12-01',
    name: 'Dino Ge Zhang',
    photo: dinoPhoto,
    affiliation:
      'Associate Professor in the Department of Linguistic, Literary and Aesthetic Studies at the University of Bergen',
    detail: {
      title: 'US–China Reactionary Circuits Among Gamer (Counter)publics',
      abstract:
        'This talk draws on my ongoing research on the circulation of reactionary politics between China and the rest of the world. The talk will begin with a recently published case study on the controversies surrounding Black Myth: Wukong. Chinese critiques of baizuo (literally the ‘white left’) and Gamergate-descended right-wing gamers converge in rejecting feminism and woke politics (although the manifestations of which in the US and China are radically different). However, the resonance is often based on epistemic (mis)readings on both sides. An analysis of such discourses will unpack the contradictions and inconsistencies in the habitual returns to grand narratives such as politics of (male) grievance/misogyny, civilizationism (the peripheral and center), political realism, chauvinism/nationalism, and so on. The talk seeks to demonstrate the ‘co-constitution’ of reactionary currents in China and the US in the sphere of videogame discourses.',
      bio: 'Dino Ge Zhang is an Associate Professor in digital culture at the University of Bergen. His research focuses on socio-technics, aesthetics, and affective ecologies of the Sinophone internet. He is the founding editor of the Bureau of Low Theory, a web database dedicated to internet culture and underground theory from China. More of his work can be found at his website: zdi.no',
      time: TBA,
      location: 'Online',
      videoUrl: '',
    },
  },
  {
    id: 'rachael-hutchinson',
    date: 'January 12th, 2027',
    sortKey: '2027-01-12',
    name: 'Rachael Hutchinson',
    photo: rachaelPhoto,
    affiliation: 'Elias Ahuja Professor of Japanese and Game Studies at University of Delaware',
    detail: {
      title: TITLE_TBA,
      abstract: TBA,
      bio: 'Rachael Hutchinson is the Elias Ahuja Professor of Japanese and Game Studies at the University of Delaware.',
      time: TBA,
      location: 'Online',
      videoUrl: '',
    },
  },
  {
    id: 'jacob-schmidt-madsen',
    date: 'January 26th, 2027',
    sortKey: '2027-01-26',
    name: 'Jacob Schmidt-Madsen',
    photo: jacobPhoto,
    affiliation:
      'Historian in the Astral Sciences in Trans-Regional Asia (ASTRA) research group at the Max Planck Institute for the History of Science (MPIWG)',
    detail: {
      title: TITLE_TBA,
      abstract: TBA,
      bio: 'Jacob Schmidt-Madsen is a historian in the Astral Sciences in Trans-Regional Asia (ASTRA) research group at the Max Planck Institute for the History of Science (MPIWG).',
      time: TBA,
      location: 'Online',
      videoUrl: '',
    },
  },
  {
    id: 'pauline-lee',
    date: 'February, 2027',
    sortKey: '2027-02',
    name: 'Pauline Lee',
    photo: paulinePhoto,
    affiliation: 'Associate Professor of Chinese Thought and Cultures at Saint Louis University',
    detail: {
      title: TITLE_TBA,
      abstract: TBA,
      bio: 'Pauline Lee is Associate Professor of Chinese Thought and Cultures at Saint Louis University.',
      time: TBA,
      location: 'Online',
      videoUrl: '',
    },
  },
];

export const getLectureById = (id: string) => lectures.find((l) => l.id === id);

/** Fill these in when the registration form and contact address are live. */
export const REGISTRATION_URL = 'https://forms.gle/KGawcU8HVbb1LvZ5A';
export const CONTACT_EMAIL = '';
