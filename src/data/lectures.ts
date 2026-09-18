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
      title: TITLE_TBA,
      abstract: TBA,
      bio: 'Yichen Rao is Assistant Professor of Cultural Anthropology at Utrecht University and China AI Lead at the Inclusive AI Lab. He combines anthropology, media studies, and STS to examine how digital technologies and capitalist models shape subjectivities in global China. He has published widely on topics of fin-tech, gaming addiction, digital infrastructure, scams, and AI. He has recently been awarded an ERC Starting Grant to examine the global impact of Chinese AI ecosystems and e-commerce platforms and their role in reconfiguring contemporary capitalism. He also serves as a council member of Society of Social Studies of Science (4S) and Sci-Tech Asia research network. ',
      time: TBA,
      location: 'Online',
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
      title: TITLE_TBA,
      abstract: TBA,
      bio: 'Mayshu (Meixu) Zhan is a PhD candidate in Modern Thought and Literature at Stanford University.',
      time: TBA,
      location: 'Online',
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
      title: TITLE_TBA,
      abstract: TBA,
      bio: 'Dino Ge Zhang is Associate Professor in the Department of Linguistic, Literary and Aesthetic Studies at the University of Bergen.',
      time: TBA,
      location: 'Online',
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
    },
  },
];

export const getLectureById = (id: string) => lectures.find((l) => l.id === id);

/** Fill these in when the registration form and contact address are live. */
export const REGISTRATION_URL = 'https://forms.gle/KGawcU8HVbb1LvZ5A';
export const CONTACT_EMAIL = '';
